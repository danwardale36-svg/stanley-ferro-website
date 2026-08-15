import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '@/components/layout/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// @ts-ignore
import hmoImg from '@assets/8_a1e76b_6bbe6eb3c4d449dcbf660a18e73a2fc7_1786824412975.jpg';
// @ts-ignore
import hmoImg2 from '@assets/10_a1e76b_7a0650ae898545d1be334e95ce6f3106_1786824412975.png';

export default function HmoConversions() {
  return (
    <div className="flex flex-col w-full pb-24">
      <Helmet>
        <title>HMO conversions | Stanley Ferro Developments | Crosby</title>
        <meta name="description" content="Ensure your HMO conversions meet current UK regulations, with Stanley Ferro Developments. We are ready to work with developers and landlords in Crosby." />
      </Helmet>
      <PageHeader 
        title="HMO Conversions" 
        subtitle="Expert House in Multiple Occupation conversions designed for maximum yield and compliance."
        imageSrc={hmoImg}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">Invest with confidence</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Converting a property into a House in Multiple Occupation (HMO) requires strict adherence to building regulations, fire safety standards, and local council requirements. We have extensive experience in delivering fully compliant, high-yield HMO conversions for landlords and investors.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We focus on creating highly durable, attractive living spaces that appeal to professional tenants. From soundproofing and fire doors to individual en-suites and communal kitchens, we design and build HMOs that stand out in the rental market and minimize ongoing maintenance.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Full HMO compliance and fire safety integration",
                "Space optimization for maximum occupancy",
                "En-suite additions to individual rooms",
                "Durable communal kitchens and living areas",
                "Soundproofing and insulation upgrades"
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
            <img src={hmoImg} alt="Refurbished room with hardwood floor" className="w-full h-80 object-cover rounded-xl" />
            <img src={hmoImg2} alt="Open plan extension with bifold doors" className="w-full h-64 object-cover rounded-xl mt-8" />
          </motion.div>
        </div>

        <div className="bg-primary/10 border-l-4 border-primary rounded-xl p-8 my-4">
          <div className="flex gap-1 mb-3">
            {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
          </div>
          <blockquote className="text-[#091405] italic leading-relaxed mb-3">
            "The team at Stanley Ferro was very professional and supportive throughout our full property renovation. They provided a detailed quotation, itemising each task that was to be undertaken. This made settling up at the end of the project really easy."
          </blockquote>
          <p className="text-sm font-semibold text-primary">Verified Customer — HMO Conversion</p>
        </div>

        <div className="bg-[#091405] rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">Looking to convert a property?</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
            Partner with a contractor who understands the specific demands of HMO conversions. Contact us to discuss your investment property.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 relative z-10" asChild>
            <Link href="/quote?service=hmo">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
