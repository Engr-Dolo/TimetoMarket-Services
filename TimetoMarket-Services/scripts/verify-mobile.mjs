import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'verify-screenshots');
mkdirSync(outDir, { recursive: true });

const BASE = 'https://engr-dolo.github.io/TimetoMarket-Services';

// Tecno/Infinix/Samsung A12 — 720×1600 HD+ at 2× DPR = 360×800 CSS
const DEVICE = {
  viewport: { width: 360, height: 800 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  userAgent: 'Mozilla/5.0 (Linux; Android 12; Tecno Spark 8P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
};

const pages = [
  { name: 'home',      path: '/' },
  { name: 'portfolio', path: '/portfolio' },
  { name: 'services',  path: '/services' },
  { name: 'about',     path: '/about' },
  { name: 'contact',   path: '/contact' },
  { name: '404',       path: '/this-does-not-exist' },
];

const results = [];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext(DEVICE);

for (const { name, path } of pages) {
  const page = await ctx.newPage();
  const url = `${BASE}${path}`;

  // Track console errors
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

  // Wait for animations to settle
  await page.waitForTimeout(1500);

  // Scroll check — detect horizontal overflow
  const hasHScroll = await page.evaluate(() =>
    document.documentElement.scrollWidth > document.documentElement.clientWidth
  );

  // Check for blank page (root div has children)
  const hasContent = await page.evaluate(() => {
    const root = document.getElementById('root');
    return root ? root.children.length > 0 : false;
  });

  // Touch target audit — find buttons/links narrower than 44px
  const smallTargets = await page.evaluate(() => {
    const els = [...document.querySelectorAll('button, a[href]')];
    return els
      .map(el => {
        const r = el.getBoundingClientRect();
        return { tag: el.tagName, text: el.textContent.trim().slice(0, 40), w: Math.round(r.width), h: Math.round(r.height) };
      })
      .filter(t => t.w > 0 && t.h > 0 && (t.w < 44 || t.h < 44))
      .slice(0, 5);
  });

  // Screenshot — above the fold
  const screenshotPath = join(outDir, `${name}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: false });

  results.push({ name, url, hasContent, hasHScroll, smallTargets, errors: errors.slice(0, 3) });
  await page.close();
}

await browser.close();

// Print report
console.log('\n=== MOBILE VERIFICATION REPORT (360×800, 2× DPR) ===\n');
for (const r of results) {
  const status = r.hasContent && !r.hasHScroll ? '✅' : '❌';
  console.log(`${status} /${r.name.toUpperCase()}`);
  console.log(`   Content rendered : ${r.hasContent ? 'YES' : 'NO — BLANK PAGE'}`);
  console.log(`   Horizontal scroll: ${r.hasHScroll ? 'YES — OVERFLOW BUG' : 'none'}`);
  if (r.smallTargets.length) {
    console.log(`   Small targets    : ${r.smallTargets.map(t => `"${t.text}" ${t.w}×${t.h}px`).join(', ')}`);
  } else {
    console.log(`   Touch targets    : all ≥44px`);
  }
  if (r.errors.length) {
    console.log(`   JS errors        : ${r.errors.join('; ')}`);
  }
  console.log(`   Screenshot       : verify-screenshots/${r.name}.png`);
  console.log('');
}
console.log('=== END ===');
