import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useSearch } from 'wouter';

// @ts-ignore
import headerImg from '@assets/5_a1e76b_4d222dd0d26f4de69ef0d2b7910cc5c7_1786824412975.jpg';

const quoteSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select an approximate budget"),
  contactTime: z.string().min(1, "Please select a preferred contact time"),
  description: z.string().min(10, "Please give us a brief description of your project")
});

const serviceOptions = [
  { value: "extensions", label: "House Extensions" },
  { value: "loft", label: "Loft Conversions" },
  { value: "refurbishment", label: "Full Refurbishment" },
  { value: "kitchen", label: "Kitchen Fitting" },
  { value: "bathroom", label: "Bathroom Fitting" },
  { value: "hmo", label: "HMO Conversion" },
  { value: "other", label: "Other / Not Sure" },
];

const budgetOptions = [
  { value: "under-10k", label: "Under £10,000" },
  { value: "10k-25k", label: "£10,000 – £25,000" },
  { value: "25k-50k", label: "£25,000 – £50,000" },
  { value: "50k-100k", label: "£50,000 – £100,000" },
  { value: "100k-plus", label: "£100,000+" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const contactTimeOptions = [
  { value: "morning", label: "Morning (8am – 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm – 5pm)" },
  { value: "anytime", label: "Anytime" },
];

const selectClass = (hasError: boolean) =>
  `flex h-10 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${hasError ? 'border-red-500' : 'border-gray-200'}`;

export default function Quote() {
  const { toast } = useToast();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const preselectedService = params.get('service') ?? '';

  type QuoteFormValues = z.infer<typeof quoteSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: preselectedService,
      budget: '',
      contactTime: '',
      description: '',
    }
  });

  const onSubmit = async (data: QuoteFormValues) => {
    try {
      const serviceLabel = serviceOptions.find(s => s.value === data.service)?.label ?? data.service;
      const budgetLabel = budgetOptions.find(b => b.value === data.budget)?.label ?? data.budget;
      const contactTimeLabel = contactTimeOptions.find(c => c.value === data.contactTime)?.label ?? data.contactTime;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '08cc5551-9a93-4900-8ce8-176697290a62',
          subject: `Quote Request from ${data.name} — ${serviceLabel}`,
          from_name: 'Stanley Ferro Website',
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: serviceLabel,
          budget: budgetLabel,
          preferred_contact_time: contactTimeLabel,
          project_description: data.description,
        })
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Quote Request Sent!",
          description: "Thank you — Thomas or Ste will be in touch at your preferred time.",
        });
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please call us directly on 07791 151427 or email sfdltd@outlook.com",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col w-full pb-24">
      <PageHeader
        title="Request a Quote"
        subtitle="Tell us about your project and we'll get back to you with a free, no-obligation quotation."
        imageSrc={headerImg}
      />

      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">
              Let's get your project started
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Fill in the form and Thomas or Ste will call you back at a time that suits you. No pushy sales — just a straightforward conversation about what you'd like to achieve.
            </p>

            <div className="space-y-6">
              {[
                { title: "Free, no-obligation quote", desc: "We'll assess your project and provide a detailed quote at no cost." },
                { title: "Quick response", desc: "We aim to call you back within one working day." },
                { title: "Local expertise", desc: "Based in Crosby, serving all of Merseyside and surrounding areas." },
                { title: "End-to-end management", desc: "We handle everything from planning to the final finish." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#091405] mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-sm text-muted-foreground">Prefer to call us directly?</p>
              <p className="font-bold text-[#091405] mt-1">
                Thomas: <a href="tel:07791151427" className="text-primary hover:underline">07791 151427</a>
              </p>
              <p className="font-bold text-[#091405]">
                Ste: <a href="tel:07714873398" className="text-primary hover:underline">07714 873398</a>
              </p>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10"
          >
            <h3 className="font-display font-bold text-2xl text-[#091405] mb-2">Your project details</h3>
            <p className="text-muted-foreground text-sm mb-8">All fields are required so we can give you the most accurate quote.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input id="name" {...register("name")} className={`bg-gray-50 border-gray-200 ${errors.name ? 'border-red-500' : ''}`} placeholder="e.g. John Smith" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" {...register("email")} className={`bg-gray-50 border-gray-200 ${errors.email ? 'border-red-500' : ''}`} placeholder="you@example.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input id="phone" type="tel" {...register("phone")} className={`bg-gray-50 border-gray-200 ${errors.phone ? 'border-red-500' : ''}`} placeholder="07700 000000" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select id="service" {...register("service")} className={selectClass(!!errors.service)}>
                  <option value="">Select a service...</option>
                  {serviceOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message as string}</p>}
              </div>

              {/* Budget + Contact Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Approximate Budget</label>
                  <select id="budget" {...register("budget")} className={selectClass(!!errors.budget)}>
                    <option value="">Select a range...</option>
                    {budgetOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message as string}</p>}
                </div>
                <div>
                  <label htmlFor="contactTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Callback Time</label>
                  <select id="contactTime" {...register("contactTime")} className={selectClass(!!errors.contactTime)}>
                    <option value="">Select a time...</option>
                    {contactTimeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {errors.contactTime && <p className="text-red-500 text-xs mt-1">{errors.contactTime.message as string}</p>}
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Brief Project Description</label>
                <Textarea
                  id="description"
                  {...register("description")}
                  className={`bg-gray-50 border-gray-200 min-h-[130px] ${errors.description ? 'border-red-500' : ''}`}
                  placeholder="Tell us what you have in mind — even rough ideas are helpful at this stage."
                />
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message as string}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg">
                {isSubmitting ? "Sending your request..." : "Request My Free Quote"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting this form you agree to be contacted by Stanley Ferro Developments regarding your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
