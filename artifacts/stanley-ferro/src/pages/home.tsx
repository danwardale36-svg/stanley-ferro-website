import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

// @ts-ignore
import heroImg from '@assets/15_a1e76b_9cfe61dbe7c547e491ee0b66a6787182_1786824412975.jpg';
// @ts-ignore
import extensionsImg from '@assets/5_a1e76b_4d222dd0d26f4de69ef0d2b7910cc5c7_1786824412975.jpg';
// @ts-ignore
import loftImg from '@assets/3_a1e76b_03a9bd348eed4259af23a98cd95096fb_1786824412975.jpg';
// @ts-ignore
import refurbImg from '@assets/2_a1e76b_1c661abb9b4f49c1a4b6abca8723d47d_1786824412974.jpg';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-[#091405] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Modern house extension" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091405] via-[#091405]/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6 uppercase">
              Stanley Ferro Developments
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Construction Contractors In <span className="text-primary">Crosby</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl font-light">
              Get in touch today to discuss your home. We focus on house additions, loft conversions, and total home renovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8" asChild>
                <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white text-lg h-14 px-8" asChild>
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
              <CheckCircle2 className="h-10 w-10 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-xl">Trusted Locals</h3>
                <p className="text-white/80 text-sm">Serving Crosby & Merseyside</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
              <CheckCircle2 className="h-10 w-10 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-xl">Fully Managed</h3>
                <p className="text-white/80 text-sm">From concept to completion</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
              <CheckCircle2 className="h-10 w-10 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-xl">Premium Finish</h3>
                <p className="text-white/80 text-sm">Quality craftsmanship guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#091405]">About Stanley Ferro Developments</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A reputable building contractor company, Stanley Ferro Developments Ltd focuses on house additions, loft conversions, and total home renovations. We take pride in our work.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Run by friends Thomas and Ste, we bring decades of combined experience to every project. Whether you're looking to expand your living space or completely modernise your property, our team delivers exceptional results with minimal disruption to your daily life.
              </p>
              <Button size="lg" variant="outline" className="border-[#091405] text-[#091405] hover:bg-[#091405] hover:text-white" asChild>
                <Link href="/about">Read Our Story</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 rounded-xl -z-10" />
              <img 
                src={extensionsImg} 
                alt="Stanley Ferro team at work" 
                className="rounded-xl w-full h-[500px] object-cover shadow-xl"
              />
              
              <div className="absolute bottom-8 -left-8 bg-white p-6 shadow-2xl rounded-lg border-l-4 border-primary max-w-[250px] hidden md:block">
                <div className="flex gap-2 text-[#091405] mb-2">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-[#091405]">"Highly recommended. Professional, tidy, and finished to an amazing standard."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#091405]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Comprehensive Building Services</h3>
            <p className="text-lg text-white/70">
              From minor alterations to complete property transformations, we have the skills and experience to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="House Extensions" 
              desc="Expand your living space and add value to your property with our bespoke single and double-storey extensions."
              img={extensionsImg}
              link="/house-extensions"
            />
            <ServiceCard 
              title="Loft Conversions" 
              desc="Unlock the hidden potential in your roof space with a stunning loft conversion tailored to your needs."
              img={loftImg}
              link="/loft-conversions"
            />
            <ServiceCard 
              title="Full Refurbishments" 
              desc="Breathe new life into your home with our comprehensive end-to-end renovation and refurbishment services."
              img={refurbImg}
              link="/full-refurbishments"
            />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/house-extensions">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B0A986]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#091405] mb-6">Ready to start your project?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Contact Thomas and Ste today to discuss your ideas and arrange a free, no-obligation quotation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 w-full sm:w-auto" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-[#091405] font-semibold text-lg">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>Thomas: 07791 151427</span>
              </div>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>Ste: 07714 873398</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc, img, link }: { title: string, desc: string, img: string, link: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-[#091405] border border-white/10 rounded-xl overflow-hidden shadow-lg"
    >
      <Link href={link} className="block relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-[#091405]/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>
      <div className="p-8 bg-white relative -mt-4 mx-4 rounded-xl shadow-xl mb-4 z-20 transition-transform group-hover:-translate-y-2">
        <h3 className="font-display font-bold text-2xl text-[#091405] mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3">{desc}</p>
        <Link href={link} className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
          Find out more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
