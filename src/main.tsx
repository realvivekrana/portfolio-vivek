import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App-minimal.tsx";
import "./index.css";

// Fonts — Inter (body/headings) + JetBrains Mono (code/labels)
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/latin-800.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-700.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML = `
    <div style="background:#050508;min-height:100vh;display:flex;
    align-items:center;justify-content:center;color:#4F8EF7;
    font-family:monospace;font-size:2rem;font-weight:800">VR</div>
  `;
  throw new Error("Root element #root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
