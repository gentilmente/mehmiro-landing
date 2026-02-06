import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages";
import ScrollyTelling from "./pages/ScrollyTelling";
import NotFound from "./pages/NotFound";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const queryClient = new QueryClient();

const Navigation = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && !mobileMenuOpen && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="fixed top-0 right-0 z-50 p-3 sm:p-4"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Mobile menu overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>

          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
          >
            Cómo funciona
          </Link>
        </div>
      )}

      {/* Desktop navbar */}
      {!isMobile && (
        <nav className="fixed top-4 right-4 z-50">
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-lg">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
            >
              Inicio
            </Link>
            <div className="w-px h-4 bg-border" />
            <Link
              to="/como-funciona"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
            >
              Cómo funciona
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/como-funciona" element={<ScrollyTelling />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
