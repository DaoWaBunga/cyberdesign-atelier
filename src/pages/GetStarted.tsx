import React from 'react';
import Navbar from '@/components/Navbar';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact the SyberSide Team Today!</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Request a free consultation or quote for your project
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
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
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
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
              className="w-full rounded-md border border-input bg-background text-foreground px-3 py-2"
            >
              <option value="">Select a Service</option>
              <option value="ai-strategy">AI Strategy Consulting</option>
              <option value="web-development">Web Development</option>
              <option value="chatbots">Custom AI Chatbots</option>
              <option value="seo">SEO Optimization</option>
              <option value="security">Website Maintenence</option>
              <option value="analytics">AI Analytics</option>
              <option value="ml">Machine Learning Integration</option>
              <option value="content">AI Content Generation</option>
              <option value="automation">Process Automation</option>
              <option value="data">Custom Apps</option>
            </select>
            {errors.service && (
              <p className="text-destructive text-sm mt-1">{errors.service.message}</p>
            )}
          </div>

          <div>
            <select
              {...register("budget")}
              className="w-full rounded-md border border-input bg-background text-foreground px-3 py-2"
            >
              <option value="">Expected Budget Range</option>
              <option value="5k-10k">$995 - $2,000</option>
              <option value="10k-25k">$2100 - $5,000</option>
              <option value="25k-50k">$5100 - $20,000</option>
              <option value="50k+">$20,000+</option>
            </select>
          </div>

          <div>
            <Textarea
              placeholder="Tell us about your project"
              {...register("message", { required: "Please describe your project" })}
              className={errors.message ? "border-destructive" : ""}
              rows={6}
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
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