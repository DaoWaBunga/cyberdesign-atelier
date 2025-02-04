import React from 'react';
import Navbar from '@/components/Navbar';
import { CheckCircle } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered E-commerce Platform",
    client: "TechStyle Retail",
    description: "Implemented personalized product recommendations and automated customer service, resulting in a 40% increase in sales.",
  },
  {
    title: "Smart Content Management System",
    client: "Global Media Corp",
    description: "Developed an AI-driven CMS that automates content creation and optimization, reducing production time by 60%.",
  },
  {
    title: "Intelligent Customer Service Platform",
    client: "ServicePro Solutions",
    description: "Created an advanced chatbot system handling 80% of customer inquiries automatically.",
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-dark mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pioneering the future of web development with artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold mb-6 text-cyber-dark">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2022, CyberSideStudio emerged from a vision to revolutionize web development
              through the power of artificial intelligence. Our team of experts combines decades of
              experience in web development with cutting-edge AI technology.
            </p>
            <p className="text-gray-600">
              We've successfully delivered over 100 projects, helping businesses transform their
              digital presence and achieve unprecedented growth through AI-powered solutions.
            </p>
          </div>
          <div className="animate-fade-up delay-100">
            <h2 className="text-3xl font-bold mb-6 text-cyber-dark">Why Choose Us</h2>
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
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyber-dark">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-cyber-dark">{project.title}</h3>
                <p className="text-primary mb-4">Client: {project.client}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;