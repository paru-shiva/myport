import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 max-w-md text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button as={Link} to="/" className="mt-8">
        <Home className="h-4 w-4" />
        Back to Home
      </Button>
    </main>
  );
}
