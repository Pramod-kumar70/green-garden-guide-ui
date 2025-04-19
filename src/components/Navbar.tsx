
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-garden-primary animate-leaf-sway" />
              <span className="ml-2 text-xl font-display font-bold text-garden-primary">Green Garden Guide</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-garden-gray hover:text-garden-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/features" className="text-garden-gray hover:text-garden-primary px-3 py-2 rounded-md text-sm font-medium">Features</Link>
            <Link to="/about" className="text-garden-gray hover:text-garden-primary px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/contact" className="text-garden-gray hover:text-garden-primary px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <div className="ml-4 flex items-center">
              <Button asChild variant="outline" className="mr-2 border-garden-primary text-garden-primary hover:bg-garden-primary/10">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-garden-primary hover:bg-garden-primary/90 text-white">
                <Link to="/onboarding">Sign Up</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-garden-gray hover:text-garden-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link to="/" className="text-garden-gray hover:text-garden-primary block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/features" className="text-garden-gray hover:text-garden-primary block px-3 py-2 rounded-md text-base font-medium">Features</Link>
            <Link to="/about" className="text-garden-gray hover:text-garden-primary block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="text-garden-gray hover:text-garden-primary block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <Button asChild variant="outline" className="border-garden-primary text-garden-primary hover:bg-garden-primary/10 w-full">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-garden-primary hover:bg-garden-primary/90 text-white w-full">
                <Link to="/onboarding">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
