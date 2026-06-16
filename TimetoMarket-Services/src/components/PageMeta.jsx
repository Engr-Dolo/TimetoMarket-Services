import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const meta = {
  "/": {
    title: "TimetoMarket-Services — Secure Webapps for Growing Businesses",
    description:
      "I design, build and manage premium, well-secured webapps and digital platforms for small and growing businesses across Liberia and beyond.",
    keywords:
      "web developer Liberia, webapp design Liberia, secure website Liberia, digital platform Africa",
  },
  "/portfolio": {
    title: "Portfolio — TimetoMarket-Services",
    description:
      "Real platforms built for real businesses — clinics, restaurants, agribusiness, logistics and more across Liberia.",
    keywords:
      "web design portfolio Liberia, demo sites Africa, business website examples",
  },
  "/services": {
    title: "Services — TimetoMarket-Services",
    description:
      "Web design & build, security monitoring, platform management and AI-powered features for small businesses.",
    keywords:
      "web development services Liberia, website security Africa, AI chatbot Liberia",
  },
  "/about": {
    title: "About — TimetoMarket-Services",
    description:
      "Meet Engr. Philip J. Dolo — Liberian web developer building secure digital platforms for African businesses.",
    keywords: "Liberian web developer, Philip Dolo, Africa tech developer",
  },
  "/contact": {
    title: "Contact — TimetoMarket-Services",
    description:
      "Get in touch for a free consultation. WhatsApp, email or call — I respond within 24 hours.",
    keywords: "contact web developer Liberia, free website consultation Africa",
  },
};

const BASE_URL = "https://engr-dolo.github.io/TimetoMarket-Services";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export default function PageMeta() {
  const { pathname } = useLocation();
  const page = meta[pathname] || meta["/"];

  useEffect(() => {
    // Title
    document.title = page.title;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName] = selector.match(/\[(.+?)=/) || [];
        if (attrName) {
          const key = attrName
            .replace("[", "")
            .replace("=", "")
            .replace(/"/g, "")
            .split("=")[0];
          // simplified: just use setAttribute
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Standard meta
    const updateOrCreate = (name, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    updateOrCreate("description", page.description);
    updateOrCreate("keywords", page.keywords);

    // Open Graph
    updateOrCreate("og:title", page.title, true);
    updateOrCreate("og:description", page.description, true);
    updateOrCreate("og:image", OG_IMAGE, true);
    updateOrCreate("og:url", `${BASE_URL}${pathname}`, true);
    updateOrCreate("og:type", "website", true);
    updateOrCreate("og:site_name", "TimetoMarket-Services", true);

    // Twitter Card
    updateOrCreate("twitter:card", "summary_large_image");
    updateOrCreate("twitter:title", page.title);
    updateOrCreate("twitter:description", page.description);
    updateOrCreate("twitter:image", OG_IMAGE);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${pathname}`);
  }, [pathname, page]);

  return null;
}
