
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ProjectPage from "./pages/ProjectPage";
import PromoterPage from "./pages/PromoterPage";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import ProfessionalPage from "./pages/ProfessionalPage";
import ContactPage from "./pages/ContactPage";
import PromoterContactPage from "./pages/PromoterContactPage";
import PromoterNewsPage from "./pages/PromoterNewsPage";
import GuidePratique from "./pages/GuidePratique";
import CompanyRegistrationPage from "./pages/CompanyRegistrationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
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
            <Route path="/proprietes/garages" element={<Index />} />
            <Route path="/proprietes/mixtes" element={<Index />} />
            <Route path="/professionnels" element={<ProfessionalsPage />} />
            <Route path="/professionnels/recherche" element={<ProfessionalsPage searchMode />} />
            <Route path="/professionnels/inscription" element={<CompanyRegistrationPage />} />
            <Route path="/professionnels/:id" element={<ProfessionalPage />} />
            <Route path="/actu-promoteur" element={<PromoterNewsPage />} />
            <Route path="/actu-promoteur/:id" element={<Index />} />
            <Route path="/guide-pratique" element={<GuidePratique />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/carte" element={<Index />} />
            <Route path="/mentions-legales" element={<Index />} />
            <Route path="/confidentialite" element={<Index />} />
            <Route path="/conditions" element={<Index />} />
            <Route path="/projets/:id" element={<ProjectPage />} />
            <Route path="/promoteurs/:id" element={<PromoterPage />} />
            <Route path="/promoteurs/:id/contact" element={<PromoterContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
