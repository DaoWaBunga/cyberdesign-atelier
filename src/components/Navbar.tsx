import React from 'react';
import { Brain, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-cyber-dark">CyberSideStudio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Get Started
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