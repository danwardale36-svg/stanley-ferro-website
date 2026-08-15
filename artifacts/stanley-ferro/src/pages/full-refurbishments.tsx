import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// @ts-ignore
import refurbImg from '@assets/2_a1e76b_1c661abb9b4f49c1a4b6abca8723d47d_1786824412974.jpg';
// @ts-ignore
import refurbImg2 from '@assets/8_a1e76b_6bbe6eb3c4d449dcbf660a18e73a2fc7_1786824412975.jpg';

export default function FullRefurbishments() {
  return (
    <div className="flex flex-col w-full pb-24">
      <PageHeader 
        title="Full Refurbishments" 
        subtitle="Complete property renovations, managed from concept to flawless completion."
        imageSrc={refurbImg}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">Breathe new life into your property</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Whether you've purchased a fixer-upper, inherited an outdated property, or simply want to completely modernise your current home, our full refurbishment service provides a comprehensive, stress-free solution.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We manage the entire project, coordinating all trades required. From structural alterations, re-wiring, and new heating systems, right through to plastering, flooring, and decorating. You deal with one contractor — us — ensuring consistent quality and clear communication.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Structural alterations and knock-throughs",
                "Full re-wiring and plumbing upgrades",
                "Plastering, rendering, and damp proofing",
                "New kitchens and bathrooms",
                "Bespoke joinery and high-end decorating"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-[#091405] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={refurbImg} alt="Modern living room refurbishment" className="w-full h-64 object-cover rounded-xl mt-8" />
            <img src={refurbImg2} alt="Open plan refurbished room with hardwood floor" className="w-full h-80 object-cover rounded-xl" />
          </motion.div>
        </div>

        <div className="bg-primary/10 border-l-4 border-primary rounded-xl p-8 my-4">
          <div className="flex gap-1 mb-3">
            {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
          </div>
          <blockquote className="text-[#091405] italic leading-relaxed mb-3">
            "I would recommend them over anyone anytime and will be using these guys only for additional work I want to be carried out. If you want reliability, professionalism and quality work just don't look further! Additionally, they are passionate about their work and actually give suggestions and house layout improvements you may not consider."
          </blockquote>
          <p className="text-sm font-semibold text-primary">Verified Customer — Full Refurbishment</p>
        </div>

        <div className="bg-[#091405] rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">Start your renovation journey</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
            A full refurbishment requires a trusted contractor. Speak to Thomas and Ste today to discuss your vision and see how we can bring it to life on time and on budget.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 relative z-10" asChild>
            <Link href="/contact">Get a Free Quotation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
