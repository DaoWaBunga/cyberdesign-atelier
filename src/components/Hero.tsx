import React from 'react';
import { BrainCircuit, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-50 animate-gradient-y overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <BrainCircuit className="w-8 h-8 text-primary" />
            <span className="text-lg font-medium text-gray-600">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-cyber-dark mb-6 leading-tight">
            Building the Future<br />with AI Technology
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your digital presence with cutting-edge AI solutions. We bring innovation to life through advanced technology and creative design.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-2">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;