import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

export function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[350px] w-full bg-[#091405] flex items-center pt-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091405] via-[#091405]/70 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 uppercase">
            Stanley Ferro Developments
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
