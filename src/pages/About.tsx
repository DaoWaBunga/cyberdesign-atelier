import React from 'react';
import Navbar from '@/components/Navbar';
import { CheckCircle } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    client: "TechStyle Retail",
    description: "Implemented personalized product recommendations and automated customer service, resulting in a 40% increase in sales.",
  },
  {
    title: "Web Site for Non-Profit",
    client: "svgassncalg",
    description: "Developed Wordpress Site for Non-Profit st vincent and the grenadines club.",
  },
  {
    title: "Maintenence of pro sites",
    client: "Multiple",
    description: "We currently manage sites for clients with a wide range of needs and technical variaty.",
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering the future of web development with human & artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2020, CyberSideStudio emerged from a vision to revolutionize web development
              through the power of Low cost human & artificial intelligence. Our team of experts combines decades of
              experience in web & app development with cutting-edge AI technology now part of the toolbelt.
            </p>
            <p className="text-muted-foreground">
              We've successfully delivered over 15 projects, helping businesses transform their
              digital presence and achieve unprecedented growth through our teams vision and dedication to understand our clients needs.
            </p>
          </div>
          <div className="animate-fade-up delay-100">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <ul className="space-y-4">
              {[
                "Cutting-edge AI Technology",
                "Experienced Development Team",
                "Custom-tailored Solutions",
                "Proven Track Record",
                "24/7 Support"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary w-6 h-6" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-primary mb-4">Client: {project.client}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;