import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// @ts-ignore
import bathroomsImg from '@assets/0_a1e76b_0b993bf785c34c17917433867057587d_1786824412974.jpg';
// @ts-ignore
import bathroomsImg2 from '@assets/4_a1e76b_3d8e82447e0949078376ddcb185766a5_1786824412975.jpg';

export default function Bathrooms() {
  return (
    <div className="flex flex-col w-full pb-24">
      <PageHeader 
        title="Luxury Bathrooms" 
        subtitle="Beautiful, relaxing, and impeccably finished bathroom refits."
        imageSrc={bathroomsImg}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">Your personal sanctuary</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A well-designed bathroom should be a place of relaxation and comfort. Whether you desire a sleek modern wet room, a traditional family bathroom, or a compact but luxurious en-suite, our team delivers exceptional results.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bathroom installations require precise coordination of plumbing, electrical work, tiling, and carpentry. We manage all these elements flawlessly to ensure a water-tight, beautifully finished space that will look stunning for years to come.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Full bathroom refits and remodeling",
                "Wet rooms and walk-in showers",
                "En-suite creation and installation",
                "High-quality tiling and waterproof boarding",
                "Underfloor heating and specialized lighting"
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
            <img src={bathroomsImg} alt="Walk-in shower with freestanding tub" className="w-full h-64 object-cover rounded-xl mt-8" />
            <img src={bathroomsImg2} alt="Marble-tiled bathroom" className="w-full h-80 object-cover rounded-xl" />
          </motion.div>
        </div>

        <div className="bg-[#091405] rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">Time for a bathroom upgrade?</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
            Contact us today to discuss your ideas. We provide expert advice, transparent pricing, and a commitment to exceptional craftsmanship.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 relative z-10" asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
