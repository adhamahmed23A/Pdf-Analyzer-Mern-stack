import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "./providers/session.provider.tsx";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider disableHoverableContent>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <SessionProvider>
            <App />
          </SessionProvider>
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            duration={3000}
          />
        </ThemeProvider>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>,
);
