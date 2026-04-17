import { useState, lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy load heavy components
const IndexNew = lazy(() => import("./pages/IndexNew"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    background: '#050508',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4F8EF7',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '14px',
    letterSpacing: '0.1em'
  }}>
    LOADING...
  </div>
);

// App fallback if everything crashes
const AppFallback = () => (
  <div style={{
    background: '#050508',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F0F0FF',
    fontFamily: 'JetBrains Mono, monospace',
    gap: '16px',
    padding: '20px'
  }}>
    <div style={{ fontSize: '48px', fontWeight: 800, color: '#4F8EF7' }}>VR</div>
    <div style={{ fontSize: '14px', color: '#6B6B8A' }}>Vivek Rana — Frontend Developer</div>
    <a
      href="mailto:vivekrana.dev@gmail.com"
      style={{ color: '#4F8EF7', fontSize: '13px', textDecoration: 'none' }}
    >
      Get in touch
    </a>
  </div>
);

const App = () => {
  console.log('🎨 App component rendering...');

  return (
    <ErrorBoundary name="App-Root" fallback={<AppFallback />}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Suspense fallback={<LoadingFallback />}>
            {/* Toast Notifications */}
            <ErrorBoundary name="Toaster">
              <Toaster />
              <Sonner />
            </ErrorBoundary>
            
            {/* Router */}
            <ErrorBoundary name="Router">
              <BrowserRouter basename="/">
                <Routes>
                  <Route path="/" element={<IndexNew />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </ErrorBoundary>
          </Suspense>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
