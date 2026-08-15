import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import { Layout } from './components/layout/Layout';
import Home from './pages/home';
import About from './pages/about';
import HouseExtensions from './pages/house-extensions';
import LoftConversions from './pages/loft-conversions';
import FullRefurbishments from './pages/full-refurbishments';
import Kitchens from './pages/kitchens';
import Bathrooms from './pages/bathrooms';
import HmoConversions from './pages/hmo-conversions';
import Gallery from './pages/gallery';
import Contact from './pages/contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <RoutedErrorBoundary>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/house-extensions" component={HouseExtensions} />
          <Route path="/loft-conversions" component={LoftConversions} />
          <Route path="/full-refurbishments" component={FullRefurbishments} />
          <Route path="/kitchens" component={Kitchens} />
          <Route path="/bathrooms" component={Bathrooms} />
          <Route path="/hmo-conversions" component={HmoConversions} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </RoutedErrorBoundary>
    </Layout>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
