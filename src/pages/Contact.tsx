import React from 'react';
import Navbar from '@/components/Navbar';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to discuss your project to get started!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">cybersidestudio@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (403) 483-8918</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Calgary,AB CANADA</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

            <div>
              <Input
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className={errors.subject ? "border-destructive" : ""}
              />
              {errors.subject && (
                <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                className={errors.message ? "border-destructive" : ""}
                rows={6}
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;