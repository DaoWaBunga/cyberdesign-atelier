import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Index;