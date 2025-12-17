
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Engineering from "./pages/Engineering";
import Tools from "./pages/Tools";
import Service from "./pages/Service";
import Production from "./pages/Production";
import Catalog from "./pages/Catalog";
import Cases from "./pages/Cases";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/service" element={<Service />} />
          <Route path="/production" element={<Production />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Home />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;