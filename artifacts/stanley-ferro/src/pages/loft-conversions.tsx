import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Loft conversions | Stanley Ferro Developments | Crosby</title>
        <meta name="description" content="Make the most of your loft space with Stanley Ferro Developments, Crosby. We handle all aspects of loft conversions: call our team today for a quote." />
      </Helmet>
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

        <div className="bg-primary/10 border-l-4 border-primary rounded-xl p-8 my-4">
          <div className="flex gap-1 mb-3">
            {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
          </div>
          <blockquote className="text-[#091405] italic leading-relaxed mb-3">
            "We used Stanley Ferro for a loft conversion including an en-suite and a walk in wardrobe and they have done a brilliant job. They take pride in the work they do, go the extra mile and the finish of their work is faultless. They are very reliable, always easy to contact, and always kept us updated on costs — presenting options so we could choose what suited us and our budget. Will definitely recommend to family and friends."
          </blockquote>
          <p className="text-sm font-semibold text-primary">Verified Customer — Loft Conversion</p>
        </div>

        <div className="bg-[#091405] rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">Ready to transform your loft?</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
            Contact Thomas and Ste for a free site visit. We'll assess your roof space and advise you on the best conversion options for your property and budget.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 relative z-10" asChild>
            <Link href="/quote?service=loft">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
