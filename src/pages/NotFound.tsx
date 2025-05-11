
import { Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-8xl font-semibold mb-4">404</h1>
          <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-sm mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button href="/" size="lg">
            Return Home
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
