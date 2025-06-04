import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="0bimshhpy" data-path="src/App.tsx">
    <TooltipProvider data-id="juiddopb0" data-path="src/App.tsx">
      <Toaster data-id="fm5qhzhdi" data-path="src/App.tsx" />
      <BrowserRouter data-id="g53wc30v5" data-path="src/App.tsx">
        <Routes data-id="ae8haoajn" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="451b0g22k" data-path="src/App.tsx" />} data-id="lwddpl5sl" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="57rj8kr7t" data-path="src/App.tsx" />} data-id="usml6mtj2" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;