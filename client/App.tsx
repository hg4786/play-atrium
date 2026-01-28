import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PartiesAndEvents from "./pages/PartiesAndEvents";
import ContactUs from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
import Layout from "./Layout";
import Gallery from "./pages/Gallery";
import CustomDecorations from "./pages/CustomDecorations";

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
            <Route path="/parties-events" element={<PartiesAndEvents />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/custom-decorations" element={<CustomDecorations />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
