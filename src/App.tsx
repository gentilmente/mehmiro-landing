import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages";
import ScrollyTelling from "./pages/ScrollyTelling";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Navigation = () => (
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
      <div className="w-px h-4 bg-border" />
      <a
        href="https://app.mehmiro.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-colors"
      >
        Demo gratuita
      </a>
    </div>
  </nav>
);

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
