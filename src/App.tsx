import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LegacyIndex from "./pages/LegacyIndex";
import NewLanding from "./pages/NewLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Navigation = () => (
  <nav className="fixed top-4 right-4 z-50 flex gap-4">
    <Link
      to="/"
      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
    >
      Original
    </Link>
    <Link
      to="/new"
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
    >
      Nueva versión
    </Link>
  </nav>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<LegacyIndex />} />
        <Route path="/new" element={<NewLanding />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
