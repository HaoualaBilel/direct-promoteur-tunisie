
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectPage from "./pages/ProjectPage";
import PromoterPage from "./pages/PromoterPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projets" element={<Index />} />
          <Route path="/projets/2026" element={<Index />} />
          <Route path="/projets/2025" element={<Index />} />
          <Route path="/projets/immediate" element={<Index />} />
          <Route path="/projets/vendus" element={<Index />} />
          <Route path="/promoteurs" element={<Index />} />
          <Route path="/promoteurs/populaires" element={<Index />} />
          <Route path="/proprietes/habitations" element={<Index />} />
          <Route path="/proprietes/commerciales" element={<Index />} />
          <Route path="/proprietes/estivales" element={<Index />} />
          <Route path="/actu-promoteur" element={<Index />} />
          <Route path="/guide-pratique" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/carte" element={<Index />} />
          <Route path="/mentions-legales" element={<Index />} />
          <Route path="/confidentialite" element={<Index />} />
          <Route path="/conditions" element={<Index />} />
          <Route path="/projets/:id" element={<ProjectPage />} />
          <Route path="/promoteurs/:id" element={<PromoterPage />} />
          <Route path="/actu-promoteur/:id" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
