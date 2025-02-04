import React from 'react';
import Navbar from '@/components/Navbar';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Select } from '@/components/ui/select';

type QuoteFormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const GetStarted = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Here you would typically integrate with your email service
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you with a detailed proposal soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-dark mb-6">Get Started</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Request a free consultation and quote for your project
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <Input
              placeholder="Company Name"
              {...register("company")}
            />
          </div>

          <div>
            <select
              {...register("service", { required: "Please select a service" })}
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            >
              <option value="">Select a Service</option>
              <option value="ai-strategy">AI Strategy Consulting</option>
              <option value="web-development">AI-Powered Web Development</option>
              <option value="chatbots">Custom AI Chatbots</option>
              <option value="seo">AI SEO Optimization</option>
              <option value="security">AI Security Solutions</option>
              <option value="analytics">AI Analytics</option>
              <option value="ml">Machine Learning Integration</option>
              <option value="content">AI Content Generation</option>
              <option value="automation">Process Automation</option>
              <option value="data">AI Data Management</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
            )}
          </div>

          <div>
            <select
              {...register("budget")}
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            >
              <option value="">Expected Budget Range</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>

          <div>
            <Textarea
              placeholder="Tell us about your project"
              {...register("message", { required: "Please describe your project" })}
              className={errors.message ? "border-red-500" : ""}
              rows={6}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Request Quote
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;