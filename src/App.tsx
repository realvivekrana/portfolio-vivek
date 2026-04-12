import { useState, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load heavy components
const IndexNew = lazy(() => import("./pages/IndexNew"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LoadingScreen = lazy(() => import("./components/ui/LoadingScreen"));
const Cursor = lazy(() => import("./components/ui/Cursor"));
const ScrollProgress = lazy(() => import("./components/ui/ScrollProgress"));
const BackgroundScene = lazy(() => import("./components/3d/BackgroundScene"));

const queryClient = new QueryClient();

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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={<LoadingFallback />}>
          {/* Cinematic Loading Screen */}
          {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
          
          {/* Custom 3D Cursor */}
          <Cursor />
          
          {/* 3D Background Scene */}
          <BackgroundScene />
          
          {/* Scroll Progress Indicator */}
          <ScrollProgress />
          
          {/* Toast Notifications */}
          <Toaster />
          <Sonner />
          
          {/* Router */}
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<IndexNew />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
