import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexNew from "./pages/IndexNew";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/ui/LoadingScreen";
import Cursor from "./components/ui/Cursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackgroundScene from "./components/3d/BackgroundScene";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
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
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
