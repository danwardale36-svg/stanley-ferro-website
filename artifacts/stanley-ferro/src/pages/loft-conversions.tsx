import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// @ts-ignore
import loftImg from '@assets/3_a1e76b_03a9bd348eed4259af23a98cd95096fb_1786824412975.jpg';
// @ts-ignore
import loftImg2 from '@assets/12_a1e76b_9b9537878c2a415f971596c27c7e51ee_1786824412975.png';

export default function LoftConversions() {
  return (
    <div className="flex flex-col w-full pb-24">
      <PageHeader 
        title="Loft Conversions" 
        subtitle="Unlock the hidden space in your home with a stunning, functional loft conversion."
        imageSrc={loftImg}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">Maximize your home's potential</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A loft conversion is often the most cost-effective way to add an extra bedroom, bathroom, or home office to your property. Instead of moving out, you can move up, creating bright and beautiful new spaces from a previously unused area.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From Velux and Dormer conversions to complex Mansard or Hip-to-Gable designs, we handle the entire process. We ensure structural integrity, proper insulation, plumbing, and flawless finishing, turning a dusty attic into the best room in the house.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Dormer, Velux, and Mansard conversions",
                "En-suite bathroom installations",
                "Custom built-in storage solutions",
                "Building regulations compliance",
                "Staircase design and integration"
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
            <img src={loftImg} alt="Loft conversion exterior" className="w-full h-80 object-cover rounded-xl" />
            <img src={loftImg2} alt="Loft conversion dormer detail" className="w-full h-64 object-cover rounded-xl mt-8" />
          </motion.div>
        </div>

        <div className="bg-[#091405] rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">Ready to transform your loft?</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
            Contact Thomas and Ste for a free site visit. We'll assess your roof space and advise you on the best conversion options for your property and budget.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 relative z-10" asChild>
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
