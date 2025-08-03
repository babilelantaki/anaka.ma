import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PlaceholderPage } from "./components/PlaceholderPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ModeHijab from "./pages/ModeHijab";
import Blog from "./pages/Blog";
import ProductDetail from "./pages/ProductDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mode-hijab" element={<ModeHijab />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/maison-deco"
              element={
                <PlaceholderPage
                  title="Maison & Déco"
                  description="Découvrez notre collection de stores, rideaux et accessoires déco pour votre intérieur."
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PlaceholderPage
                  title="Contact"
                  description="Contactez notre équipe pour toute question ou assistance."
                />
              }
            />
            <Route
              path="/livraison"
              element={
                <PlaceholderPage
                  title="Livraison"
                  description="Informations sur nos options de livraison."
                />
              }
            />
            <Route
              path="/retours"
              element={
                <PlaceholderPage
                  title="Retours"
                  description="Notre politique de retours et échanges."
                />
              }
            />
            <Route
              path="/faq"
              element={
                <PlaceholderPage
                  title="FAQ"
                  description="Questions fréquemment posées."
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
