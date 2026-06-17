import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'og-image.png');

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="80" result="blur"/>
    </filter>
    <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="60" result="blur"/>
    </filter>
    <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D97D54"/>
      <stop offset="100%" stop-color="#D97D54" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="textFade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E8E2D9"/>
      <stop offset="85%" stop-color="#E8E2D9"/>
      <stop offset="100%" stop-color="#E8E2D9" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#0A0F1A"/>

  <!-- Ambient glow — top right -->
  <circle cx="1080" cy="80" r="340" fill="#D97D54" opacity="0.10" filter="url(#glow1)"/>

  <!-- Ambient glow — bottom left -->
  <circle cx="120" cy="560" r="260" fill="#3E5C4A" opacity="0.12" filter="url(#glow2)"/>

  <!-- Outer border frame -->
  <rect x="36" y="36" width="${W - 72}" height="${H - 72}" rx="18"
        fill="none" stroke="#E8E2D9" stroke-opacity="0.06" stroke-width="1"/>

  <!-- Top accent bar -->
  <rect x="36" y="36" width="220" height="3" rx="2" fill="url(#accentLine)"/>

  <!-- Eyebrow label -->
  <text x="72" y="108"
        font-family="Arial, Helvetica, sans-serif"
        font-size="12" font-weight="700" letter-spacing="3.5"
        fill="#D97D54" opacity="0.9">TIMETOMARKET-SERVICES</text>

  <!-- Pulse dot -->
  <circle cx="57" cy="104" r="4" fill="#D97D54" opacity="0.9"/>
  <circle cx="57" cy="104" r="7" fill="#D97D54" opacity="0.25"/>

  <!-- Main headline line 1 -->
  <text x="72" y="225"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="82" font-weight="900"
        fill="#FFFFFF" letter-spacing="-2">Your Business,</text>

  <!-- Main headline line 2 — accent colour -->
  <text x="72" y="325"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="82" font-weight="900"
        fill="#D97D54" letter-spacing="-2">Online &amp; Secured.</text>

  <!-- Divider line -->
  <rect x="72" y="358" width="560" height="1" fill="#E8E2D9" opacity="0.08"/>

  <!-- Subtitle -->
  <text x="72" y="400"
        font-family="Arial, Helvetica, sans-serif"
        font-size="19" font-weight="400"
        fill="#E8E2D9" opacity="0.48">
    Premium, secured webapps for small and growing businesses
  </text>
  <text x="72" y="428"
        font-family="Arial, Helvetica, sans-serif"
        font-size="19" font-weight="400"
        fill="#E8E2D9" opacity="0.48">across Liberia and beyond.</text>

  <!-- Trust badges row -->
  <!-- Badge 1 -->
  <rect x="72" y="488" width="148" height="36" rx="18"
        fill="#161E2E" stroke="#E8E2D9" stroke-opacity="0.07" stroke-width="1"/>
  <text x="96" y="511"
        font-family="Arial, Helvetica, sans-serif"
        font-size="13" font-weight="600"
        fill="#E8E2D9" opacity="0.55">&#x1F512; SSL Secured</text>

  <!-- Badge 2 -->
  <rect x="232" y="488" width="148" height="36" rx="18"
        fill="#161E2E" stroke="#E8E2D9" stroke-opacity="0.07" stroke-width="1"/>
  <text x="256" y="511"
        font-family="Arial, Helvetica, sans-serif"
        font-size="13" font-weight="600"
        fill="#E8E2D9" opacity="0.55">&#x26A1; Mobile-First</text>

  <!-- Badge 3 -->
  <rect x="392" y="488" width="148" height="36" rx="18"
        fill="#161E2E" stroke="#E8E2D9" stroke-opacity="0.07" stroke-width="1"/>
  <text x="416" y="511"
        font-family="Arial, Helvetica, sans-serif"
        font-size="13" font-weight="600"
        fill="#E8E2D9" opacity="0.55">&#x1F916; AI-Ready</text>

  <!-- Bottom accent line -->
  <rect x="72" y="560" width="320" height="2" rx="1" fill="url(#accentLine)" opacity="0.5"/>

  <!-- Right side — decorative card stack -->
  <!-- Card shadow -->
  <rect x="780" y="100" width="360" height="210" rx="20"
        fill="#161E2E" opacity="0.5"/>

  <!-- Card 1 (back) -->
  <rect x="800" y="115" width="340" height="190" rx="16"
        fill="#161E2E" stroke="#E8E2D9" stroke-opacity="0.06" stroke-width="1"/>

  <!-- Card 2 (front) -->
  <rect x="780" y="145" width="340" height="210" rx="16"
        fill="#0F1825" stroke="#D97D54" stroke-opacity="0.25" stroke-width="1"/>

  <!-- Card 2 top accent -->
  <rect x="780" y="145" width="340" height="3" rx="1" fill="#D97D54" opacity="0.7"/>

  <!-- Card icon -->
  <rect x="812" y="185" width="48" height="48" rx="12"
        fill="#D97D54" opacity="0.12"/>
  <rect x="812" y="185" width="48" height="48" rx="12"
        fill="none" stroke="#D97D54" stroke-opacity="0.3" stroke-width="1"/>
  <text x="825" y="216"
        font-family="Arial, Helvetica, sans-serif"
        font-size="22">&#x1F3E5;</text>

  <!-- Card title -->
  <text x="876" y="206"
        font-family="Arial, Helvetica, sans-serif"
        font-size="15" font-weight="700"
        fill="#FFFFFF">SOS Medical Centre</text>
  <text x="876" y="226"
        font-family="Arial, Helvetica, sans-serif"
        font-size="12"
        fill="#D97D54" opacity="0.8">Healthcare</text>

  <!-- Card tags -->
  <rect x="812" y="252" width="76" height="22" rx="6"
        fill="#E8E2D9" opacity="0.05"/>
  <text x="824" y="267"
        font-family="Arial, Helvetica, sans-serif"
        font-size="10" font-weight="600"
        fill="#E8E2D9" opacity="0.45">React</text>

  <rect x="900" y="252" width="82" height="22" rx="6"
        fill="#E8E2D9" opacity="0.05"/>
  <text x="912" y="267"
        font-family="Arial, Helvetica, sans-serif"
        font-size="10" font-weight="600"
        fill="#E8E2D9" opacity="0.45">AI Chatbot</text>

  <rect x="994" y="252" width="96" height="22" rx="6"
        fill="#E8E2D9" opacity="0.05"/>
  <text x="1006" y="267"
        font-family="Arial, Helvetica, sans-serif"
        font-size="10" font-weight="600"
        fill="#E8E2D9" opacity="0.45">Booking</text>

  <!-- Card status -->
  <rect x="812" y="295" width="93" height="22" rx="11"
        fill="#22c55e" opacity="0.12"/>
  <circle cx="825" cy="306" r="3" fill="#22c55e" opacity="0.9"/>
  <text x="833" y="311"
        font-family="Arial, Helvetica, sans-serif"
        font-size="10" font-weight="700"
        fill="#22c55e" opacity="0.9">Demo Ready</text>

  <!-- Second decorative mini-card -->
  <rect x="820" y="380" width="300" height="140" rx="16"
        fill="#161E2E" stroke="#E8E2D9" stroke-opacity="0.07" stroke-width="1"/>
  <rect x="820" y="380" width="300" height="3" rx="1" fill="#3E5C4A" opacity="0.6"/>
  <text x="852" y="420"
        font-family="Arial, Helvetica, sans-serif"
        font-size="20">&#x1F331;</text>
  <text x="884" y="411"
        font-family="Arial, Helvetica, sans-serif"
        font-size="14" font-weight="700"
        fill="#FFFFFF">Gro Green Agribusiness</text>
  <text x="884" y="430"
        font-family="Arial, Helvetica, sans-serif"
        font-size="11"
        fill="#3E5C4A" opacity="1">Agriculture</text>

  <!-- URL label bottom right -->
  <text x="${W - 72}" y="${H - 52}"
        font-family="Arial, Helvetica, sans-serif"
        font-size="13" font-weight="600"
        text-anchor="end"
        fill="#E8E2D9" opacity="0.22">engr-dolo.github.io/TimetoMarket-Services</text>

  <!-- Bottom accent line right -->
  <rect x="${W - 72 - 200}" y="${H - 36 - 4}" width="200" height="2" rx="1"
        fill="#D97D54" opacity="0.18"/>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, quality: 100 })
  .toFile(outPath);

console.log('og-image.png generated at', outPath);
