// ============================================
// SECURITY UTILITIES
// TimetoMarket-Services
// ============================================

// 1. Input sanitization — strip XSS vectors
export function sanitizeInput(str) {
    if (typeof str !== 'string') return ''
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .replace(/`/g, '&#96;')
        .trim()
        .slice(0, 1000) // max input length
}

// 2. URL validation — prevent open redirects
export function isSafeUrl(url) {
    try {
        const parsed = new URL(url)
        const allowedProtocols = ['https:', 'mailto:', 'tel:']
        const allowedDomains = [
            'wa.me',
            'api.whatsapp.com',
            'github.com',
            'engr-dolo.github.io',
        ]
        if (!allowedProtocols.includes(parsed.protocol)) return false
        if (parsed.protocol === 'https:') {
            return allowedDomains.some(d => parsed.hostname === d || parsed.hostname.endsWith(`.${d}`))
        }
        return true
    } catch {
        return false
    }
}

// 3. Rate limiting — prevent form spam (client-side layer)
const attempts = new Map()

export function checkRateLimit(key, maxAttempts = 3, windowMs = 60000) {
    const now = Date.now()
    const record = attempts.get(key) || { count: 0, firstAttempt: now }

    if (now - record.firstAttempt > windowMs) {
        attempts.set(key, { count: 1, firstAttempt: now })
        return { allowed: true, remaining: maxAttempts - 1 }
    }

    if (record.count >= maxAttempts) {
        const resetIn = Math.ceil((record.firstAttempt + windowMs - now) / 1000)
        return { allowed: false, remaining: 0, resetIn }
    }

    record.count++
    attempts.set(key, record)
    return { allowed: true, remaining: maxAttempts - record.count }
}

// 4. CSRF token generation
export function generateCSRFToken() {
    const array = new Uint8Array(32)
    crypto.getRandomValues(array)
    return Array.from(array, b => b.toString(16).padStart(2, '0')).join('')
}

// 5. Content Security Policy violation reporter
export function setupCSPReporting() {
    document.addEventListener('securitypolicyviolation', e => {
        console.warn('[CSP Violation]', {
            directive: e.violatedDirective,
            blocked: e.blockedURI,
            source: e.sourceFile,
        })
    })
}

// 6. Detect suspicious patterns in form input
export function detectMaliciousInput(input) {
    const patterns = [
        /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /data:text\/html/gi,
        /vbscript:/gi,
        /<iframe/gi,
        /<object/gi,
        /<embed/gi,
        /union\s+select/gi,
        /drop\s+table/gi,
        /insert\s+into/gi,
        /select\s+\*/gi,
        /exec\s*\(/gi,
        /\.\.\//g,
        /etc\/passwd/gi,
    ]
    return patterns.some(p => p.test(input))
}

// 7. Honeypot field checker — bot trap
export function isBot(honeypotValue) {
    return honeypotValue !== ''
}

// 8. Disable right-click on sensitive elements (mild obfuscation)
export function protectContent() {
    // Only log — don't block, as it frustrates legit users
    document.addEventListener('contextmenu', e => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault()
        }
    })
}

// 9. Console warning for devtools snoopers
export function setupConsoleWarning() {
    const warning = `
%c⚠️ SECURITY WARNING
%cThis browser console is for developers only.
Pasting anything here could expose your account to attackers.
TimetoMarket-Services does not ask you to paste code here.
  `
    console.log(
        warning,
        'color: #D97D54; font-size: 24px; font-weight: bold;',
        'color: #E8E2D9; font-size: 14px;'
    )
}

// 10. Detect and block iframe embedding (clickjacking protection)
export function preventClickjacking() {
    if (window.self !== window.top) {
        document.body.innerHTML = ''
        window.top.location = window.self.location
    }
}