import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// @ts-ignore
import extensionsImg from '@assets/15_a1e76b_9cfe61dbe7c547e491ee0b66a6787182_1786824412975.jpg';
// @ts-ignore
import extensionsImg2 from '@assets/5_a1e76b_4d222dd0d26f4de69ef0d2b7910cc5c7_1786824412975.jpg';

export default function HouseExtensions() {
  return (
    <div className="flex flex-col w-full pb-24">
      <PageHeader 
        title="House Extensions" 
        subtitle="Expand your living space and add significant value to your property with our premium house extension services."
        imageSrc={extensionsImg}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">Create the space you've always wanted</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Whether you're looking for an open-plan kitchen and dining area, an extra bedroom, or a home office, a house extension is one of the most effective ways to transform your living environment without the hassle of moving.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Stanley Ferro Developments, we specialise in single and double-storey extensions, wrap-around extensions, and side-returns. Our experienced team handles everything from groundworks and brickwork to roofing, plastering, and the final decorative touches.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Single and double-storey extensions",
                "Rear, side-return, and wrap-around",
                "Seamless integration with existing architecture",
                "Full project management from start to finish",
                "High-quality materials and craftsmanship"
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
            <img src={extensionsImg2} alt="House extension under construction" className="w-full h-64 object-cover rounded-xl mt-8" />
            <img src={extensionsImg} alt="Completed house extension" className="w-full h-80 object-cover rounded-xl" />
          </motion.div>
        </div>

        <div className="bg-[#091405] rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">Discuss your extension project today</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
            Let Thomas and Ste help you unlock the potential of your property. We offer free, no-obligation quotes for all house extensions in Crosby and Merseyside.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 relative z-10" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
