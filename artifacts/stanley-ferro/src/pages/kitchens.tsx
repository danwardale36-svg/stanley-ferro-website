import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// @ts-ignore
import kitchensImg from '@assets/14_a1e76b_9c4c8f4c353d4dba9badc9d18be3914e_1786824412975.jpeg';
// @ts-ignore
import kitchensImg2 from '@assets/17_a1e76b_30bf3fbf9e984b1ab783cdeba6170a57_1786824412975.jpg';

export default function Kitchens() {
  return (
    <div className="flex flex-col w-full pb-24">
      <PageHeader 
        title="Bespoke Kitchens" 
        subtitle="The heart of the home, expertly fitted with precision and care."
        imageSrc={kitchensImg}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">A kitchen designed for living</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your kitchen is more than just a place to cook — it's the social hub of your home. We install high-quality, beautiful kitchens that are built to withstand the demands of daily life while looking incredible.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From removing your old kitchen and preparing the space (including any necessary structural work like removing walls) to the final fitting of cabinets, worktops, appliances, and tiling, we handle it all. We ensure every unit is perfectly aligned and every appliance is safely integrated.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Full strip-out and preparation",
                "Cabinet and worktop installation",
                "Appliance integration and plumbing",
                "Tiling and splashbacks",
                "Bespoke lighting solutions"
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
            <img src={kitchensImg} alt="Navy blue shaker kitchen with island" className="w-full h-80 object-cover rounded-xl" />
            <img src={kitchensImg2} alt="Kitchen with Smeg range cooker" className="w-full h-64 object-cover rounded-xl mt-8" />
          </motion.div>
        </div>

        <div className="bg-[#091405] rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">Plan your dream kitchen</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
            Let us help you create a space you'll love to cook and entertain in. Contact us today to discuss your new kitchen installation.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 relative z-10" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
