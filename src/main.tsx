import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App-minimal.tsx"; // Using minimal version - no lazy loading
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext";

// Import premium fonts - LATIN ONLY for 80% size reduction
import '@fontsource/syne/latin-700.css';
import '@fontsource/syne/latin-800.css';
import '@fontsource/plus-jakarta-sans/latin-400.css';
import '@fontsource/plus-jakarta-sans/latin-600.css';
import '@fontsource/plus-jakarta-sans/latin-800.css';
import '@fontsource/inter/latin-300.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-700.css';
import '@fontsource/bebas-neue/latin-400.css';

// Make sure root element EXISTS
const rootElement = document.getElementById('root');

if (!rootElement) {
  // This is why blank screen happens sometimes
  document.body.innerHTML = `
    <div style="background:#050508;min-height:100vh;display:flex;
    align-items:center;justify-content:center;color:#4F8EF7;
    font-family:monospace;font-size:24px;font-weight:800">VR</div>
  `;
  throw new Error('Root element #root not found in index.html');
}

// Add error logging
console.log('🚀 Starting React app...');
console.log('Root element found:', rootElement);

try {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
  console.log('✅ React app rendered successfully');
} catch (error) {
  console.error('❌ Failed to render React app:', error);
  document.body.innerHTML = `
    <div style="background:#050508;min-height:100vh;display:flex;
    flex-direction:column;align-items:center;justify-content:center;
    color:#F0F0FF;font-family:monospace;padding:20px;text-align:center">
      <div style="font-size:48px;color:#4F8EF7;margin-bottom:20px">⚠️</div>
      <div style="font-size:18px;margin-bottom:10px">Failed to load portfolio</div>
      <div style="font-size:12px;color:#6B6B8A;max-width:600px">${error}</div>
    </div>
  `;
}
