import React, { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

type QuoteFormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const GetStarted = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteFormData>();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("QuCJbf1yop9f3LSZC");
  }, []);

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // EmailJS configuration
      const serviceId = 'service_5hetx19';
      
      console.log("Sending quote request with data:", data);
      
      // Send the email using EmailJS send method instead of sendForm
      const result = await emailjs.send(
        serviceId,
        "template_uvoq4cm", // Updated to the correct template ID
        {
          from_name: data.name,
          to_name: "CyberSide Studio",
          message: `Subject: Quote Request

Project Details:
${data.message}

Company: ${data.company || 'Not specified'}
Service: ${data.service || 'Not specified'}
Budget: ${data.budget || 'Not specified'}

Contact Email: ${data.email}`,
          reply_to: data.email
        },
        "QuCJbf1yop9f3LSZC"
      );
      
      console.log("EmailJS result:", result);
      
      if (result.text === 'OK') {
        toast({
          title: "Quote Request Sent!",
          description: "We'll get back to you with a detailed proposal soon.",
        });
        reset();
      } else {
        throw new Error(`Failed to send quote request: ${result.text}`);
      }
    } catch (error) {
      console.error('Error sending quote request:', error);
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

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-destructive" : ""}
                name="name"
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
                name="email"
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
              name="company"
            />
          </div>

          <div>
            <select
              {...register("service", { required: "Please select a service" })}
              className="w-full rounded-md border border-input bg-background text-foreground px-3 py-2"
              name="service"
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
              name="budget"
            >
              <option value="">Expected Budget Range</option>
              <option value="$995 - $2,000">$995 - $2,000</option>
              <option value="$2100 - $5,000">$2100 - $5,000</option>
              <option value="$5100 - $20,000">$5100 - $20,000</option>
              <option value="$20,000+">$20,000+</option>
            </select>
          </div>

          <div>
            <Textarea
              placeholder="Tell us about your project"
              {...register("message", { required: "Please describe your project" })}
              className={errors.message ? "border-destructive" : ""}
              rows={6}
              name="message"
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Request Quote"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;