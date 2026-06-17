import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  setupCSPReporting,
  setupConsoleWarning,
  preventClickjacking,
  protectContent,
} from "./utils/security.js";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Run security checks immediately
preventClickjacking();
setupCSPReporting();
setupConsoleWarning();
protectContent();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
