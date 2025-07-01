
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SecurityHeaders from "./components/SecurityHeaders";
import ProjectInquiryModal from "./components/ProjectInquiryModal";
import React, { useState } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SecurityHeaders />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index setIsModalOpen={setIsModalOpen} />} />
          <Route path="/services" element={<Services setIsModalOpen={setIsModalOpen} />} />
          <Route path="/our-work" element={<OurWork setIsModalOpen={setIsModalOpen} />} />
          <Route path="/about" element={<About setIsModalOpen={setIsModalOpen} />} />
          <Route path="/contact" element={<Contact setIsModalOpen={setIsModalOpen} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ProjectInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
