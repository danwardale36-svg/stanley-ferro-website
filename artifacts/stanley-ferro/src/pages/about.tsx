import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { CheckCircle2, Shield, HeartHandshake, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// @ts-ignore
import aboutImg from '@assets/generated_images/full-refurbishments.jpg';

export default function About() {
  return (
    <div className="flex flex-col w-full pb-24">
      <PageHeader 
        title="About Us" 
        subtitle="A local, family-run contractor built on trust, quality, and hard work."
        imageSrc={aboutImg}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#091405] mb-6">The Stanley Ferro Story</h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Stanley Ferro Developments Ltd is a reputable building contractor company serving homeowners across Crosby and Merseyside. Founded by brothers Thomas and Ste, we've built our business on the simple principle that good construction requires honesty, clear communication, and an unwavering commitment to quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We grew up in the area and understand the local architecture. When you hire us, you're not just getting a team of builders — you're getting local tradesmen who care deeply about their reputation and the community they serve. From the initial consultation to the final sweep-up, Thomas and Ste are hands-on, ensuring every detail meets our high standards.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#091405] mb-3">Reliability</h3>
            <p className="text-muted-foreground">We turn up when we say we will, we finish on time, and we stick to the agreed budget. No hidden costs, no excuses.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Hammer className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#091405] mb-3">Craftsmanship</h3>
            <p className="text-muted-foreground">We take immense pride in our work. Every joint, every tile, every lick of paint is applied with the utmost care and attention to detail.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <HeartHandshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#091405] mb-3">Respect</h3>
            <p className="text-muted-foreground">We know we're working in your home, not just a building site. We keep the area clean, tidy, and treat your property with complete respect.</p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">Work with builders you can trust</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
            Join the hundreds of satisfied homeowners across Crosby who have trusted Stanley Ferro Developments with their homes.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-gray-100 text-lg h-14 px-8 relative z-10" asChild>
            <Link href="/contact">Contact Thomas & Ste</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
