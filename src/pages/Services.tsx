import React from 'react';
import Navbar from '@/components/Navbar';
import { Brain, Code, Bot, Globe, Shield, BarChart, Cpu, MessageSquare, Zap, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Brain className="w-12 h-12 text-primary" />,
    title: "AI Strategy Consulting",
    description: "Custom AI implementation strategies tailored to your business needs"
  },
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "AI-Powered Web Development",
    description: "Modern websites with integrated AI features and automation"
  },
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    title: "Custom AI Chatbots",
    description: "Intelligent chatbots trained on your business data"
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "AI SEO Optimization",
    description: "Smart SEO strategies using AI-driven insights"
  },
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "AI Security Solutions",
    description: "Advanced security systems powered by machine learning"
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "AI Analytics",
    description: "Deep insights through AI-powered data analysis"
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary" />,
    title: "Machine Learning Integration",
    description: "Custom ML models for your specific use cases"
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-primary" />,
    title: "AI Content Generation",
    description: "Automated content creation and optimization"
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Process Automation",
    description: "Streamline operations with AI-powered automation"
  },
  {
    icon: <Database className="w-12 h-12 text-primary" />,
    title: "AI Data Management",
    description: "Intelligent data processing and organization"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of AI-powered solutions designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group animate-fade-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button asChild variant="default" className="mt-auto">
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;