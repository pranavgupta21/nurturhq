import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Terms from "@/pages/Terms";

const queryClient = new QueryClient();

function PrivacyRedirect() {
  useEffect(() => {
    window.location.replace(`${import.meta.env.BASE_URL}privacy.html`);
  }, []);

  return null;
}

function AnimationRedirect() {
  useEffect(() => {
    window.location.replace(`${import.meta.env.BASE_URL}animation/`);
  }, []);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/animation" component={AnimationRedirect} />
      <Route path="/privacy" component={PrivacyRedirect} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
