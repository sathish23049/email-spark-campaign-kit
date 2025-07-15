import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import CurrentAffairs from "./pages/CurrentAffairs";
import CurrentAffairsDetail from "./pages/CurrentAffairsDetail";
import Materials from "./pages/Materials";
import Editorials from "./pages/Editorials";
import YouTube from "./pages/YouTube";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/current-affairs" element={<CurrentAffairs />} />
              <Route path="/current-affairs/:id" element={<CurrentAffairsDetail />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/editorials" element={<Editorials />} />
              <Route path="/youtube" element={<YouTube />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
