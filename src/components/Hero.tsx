import React from 'react';
import { BrainCircuit, ArrowRight, FileSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <BrainCircuit className="w-8 h-8 text-primary" />
            <span className="text-lg font-medium text-muted-foreground">Human & AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the Future<br />while Providing our Clients with Results
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your old out dated digital presence with cutting-edge AI solutions. We bring innovation to life through advanced technology and creative design.
          </p>

          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center mb-8">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group w-full md:w-auto"
            >
              <Link to="/get-started">
                Request Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="px-8 py-6 text-lg border-2 w-full md:w-auto"
            >
              <Link to="/services">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="flex justify-center">
            <Button
              variant="ghost"
              asChild
              className="text-primary hover:text-primary/90 group"
            >
              <Link to="/contact">
                <FileSearch className="mr-2 w-5 h-5" />
                Free Quote or consultation on your current site or ideas on a new one!
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;