import React from 'react';
import { Brain, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-cyber-dark">CyberSideStudio</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services" 
              className={`text-gray-600 hover:text-primary transition-colors ${
                location.pathname === '/services' ? 'text-primary' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`text-gray-600 hover:text-primary transition-colors ${
                location.pathname === '/about' ? 'text-primary' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`text-gray-600 hover:text-primary transition-colors ${
                location.pathname === '/contact' ? 'text-primary' : ''
              }`}
            >
              Contact
            </Link>
            <Button asChild className="bg-primary hover:bg-primary-dark text-white">
              <Link to="/get-started">
                Get Started
              </Link>
            </Button>
          </div>
          
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;