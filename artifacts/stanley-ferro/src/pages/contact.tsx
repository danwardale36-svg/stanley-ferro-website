import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

// @ts-ignore
import contactImg from '@assets/generated_images/home-hero.jpg';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project")
});

export default function Contact() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '08cc5551-9a93-4900-8ce8-176697290a62',
          subject: `New enquiry from ${data.name} — ${data.service}`,
          from_name: 'Stanley Ferro Website',
          ...data
        })
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for getting in touch. Thomas or Ste will contact you shortly.",
        });
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please call us directly on 07791 151427 or email sfdltd@outlook.com",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col w-full pb-24">
      <Helmet>
        <title>Building renovations | Stanley Ferro Developments | Crosby</title>
        <meta name="description" content="For your queries regarding building renovations in and around Crosby, contact Stanley Ferro Developments today by calling 07714 873398 or 07791 151427." />
      </Helmet>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch today to discuss your home. We offer free, no-obligation quotations."
        imageSrc={contactImg}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">Let's talk about your project</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Whether you have fully formed architectural plans or just an idea in your head, we're here to help. Reach out directly to Thomas or Ste using the details below, or fill out the form.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[#091405] text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground">Thomas: <a href="tel:07791151427" className="text-primary hover:underline font-medium">07791 151427</a></p>
                  <p className="text-muted-foreground">Ste: <a href="tel:07714873398" className="text-primary hover:underline font-medium">07714 873398</a></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[#091405] text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:sfdltd@outlook.com" className="text-primary hover:underline font-medium">sfdltd@outlook.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[#091405] text-lg mb-1">Service Area</h4>
                  <p className="text-muted-foreground">
                    Based in Crosby, we serve homeowners across Merseyside and the surrounding areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[#091405] text-lg mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Weekend: By appointment</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10"
          >
            <h3 className="font-display font-bold text-2xl text-[#091405] mb-6">Request a Callback</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input id="name" {...register("name")} className={`bg-gray-50 border-gray-200 ${errors.name ? 'border-red-500' : ''}`} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" {...register("email")} className={`bg-gray-50 border-gray-200 ${errors.email ? 'border-red-500' : ''}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input id="phone" type="tel" {...register("phone")} className={`bg-gray-50 border-gray-200 ${errors.phone ? 'border-red-500' : ''}`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                <select 
                  id="service" 
                  {...register("service")} 
                  className={`flex h-10 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-200 ${errors.service ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a service...</option>
                  <option value="extensions">House Extensions</option>
                  <option value="loft">Loft Conversions</option>
                  <option value="refurbishment">Full Refurbishment</option>
                  <option value="kitchen">Kitchen Fitting</option>
                  <option value="bathroom">Bathroom Fitting</option>
                  <option value="hmo">HMO Conversion</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message as string}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                <Textarea 
                  id="message" 
                  {...register("message")} 
                  className={`bg-gray-50 border-gray-200 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`} 
                  placeholder="Tell us a bit about what you're looking to achieve..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message as string}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
