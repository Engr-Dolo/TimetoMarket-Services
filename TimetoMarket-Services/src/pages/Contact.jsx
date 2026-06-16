import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  sanitizeInput,
  detectMaliciousInput,
  checkRateLimit,
  generateCSRFToken,
  isBot,
} from "../utils/security";

// Inside the component, update state and submit:
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState(""); // bot trap
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [error, setError] = useState("");
  const [csrfToken] = useState(() => generateCSRFToken());
  const submitCount = useRef(0);

  const handle = (e) => {
    const { name, value } = e.target;
    if (detectMaliciousInput(value)) {
      setError("Invalid characters detected in your input.");
      return;
    }
    setError("");
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setError("");

    // Bot check
    if (isBot(honeypot)) {
      console.warn("[Security] Bot detected via honeypot");
      setSent(true); // silently succeed to fool bots
      return;
    }

    // Rate limiting
    const rate = checkRateLimit("contact-form", 3, 60000);
    if (!rate.allowed) {
      setError(
        `Too many attempts. Please wait ${rate.resetIn} seconds before trying again.`,
      );
      return;
    }

    // Validate required fields
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }

    // Email format check
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Sanitize all inputs before sending
    const safe = {
      name: sanitizeInput(form.name),
      business: sanitizeInput(form.business),
      email: sanitizeInput(form.email),
      phone: sanitizeInput(form.phone),
      message: sanitizeInput(form.message),
    };

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hi Engr. Dolo! I'm reaching out from your website.\n\nName: ${safe.name}\nBusiness: ${safe.business}\nEmail: ${safe.email}\nPhone: ${safe.phone}\n\nMessage: ${safe.message}\n\n[Token: ${csrfToken.slice(0, 8)}]`,
    );

    window.open(
      `https://wa.me/919266833394?text=${msg}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };
  // ... rest of JSX remains the same, but add:
  // 1. Honeypot field (hidden from users, visible to bots):
  // <input
  //   type="text"
  //   name="website"
  //   value={honeypot}
  //   onChange={e => setHoneypot(e.target.value)}
  //   className="hidden"
  //   tabIndex="-1"
  //   autoComplete="off"
  //   aria-hidden="true"
  // />
  // 2. Error display above submit button:
  // {error && (
  //   <div className="text-[13px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
  //     {error}
  //   </div>
  // )}
}
