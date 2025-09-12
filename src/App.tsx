import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProvetecniaLayout } from "@/components/layout/ProvetecniaLayout";
import Dashboard from "./pages/Dashboard";
import Servicios from "./pages/Servicios";
import Usuarios from "./pages/Usuarios";
import Viaticos from "./pages/Viaticos";
import Reportes from "./pages/Reportes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ProvetecniaLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/viaticos" element={<Viaticos />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProvetecniaLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
