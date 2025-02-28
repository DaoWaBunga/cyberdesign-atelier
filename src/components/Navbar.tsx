import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">CyberSideStudio</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services" 
              className={`text-foreground/70 hover:text-primary transition-colors ${
                location.pathname === '/services' ? 'text-primary' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`text-foreground/70 hover:text-primary transition-colors ${
                location.pathname === '/about' ? 'text-primary' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`text-foreground/70 hover:text-primary transition-colors ${
                location.pathname === '/contact' ? 'text-primary' : ''
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/get-started">
                Get Started
              </Link>
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/services" 
              className={`text-foreground/70 hover:text-primary transition-colors py-2 ${
                location.pathname === '/services' ? 'text-primary' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`text-foreground/70 hover:text-primary transition-colors py-2 ${
                location.pathname === '/about' ? 'text-primary' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`text-foreground/70 hover:text-primary transition-colors py-2 ${
                location.pathname === '/contact' ? 'text-primary' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center justify-between py-2">
              <ThemeToggle />
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/get-started" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;