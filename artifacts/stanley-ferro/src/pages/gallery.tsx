import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';

// @ts-ignore
import galleryHero from '@assets/generated_images/gallery-hero.jpg';
// @ts-ignore
import img1 from '@assets/generated_images/home-hero.jpg';
// @ts-ignore
import img2 from '@assets/generated_images/house-extensions.jpg';
// @ts-ignore
import img3 from '@assets/generated_images/loft-conversions.jpg';
// @ts-ignore
import img4 from '@assets/generated_images/full-refurbishments.jpg';
// @ts-ignore
import img5 from '@assets/generated_images/kitchens.jpg';
// @ts-ignore
import img6 from '@assets/generated_images/bathrooms.jpg';
// @ts-ignore
import img7 from '@assets/generated_images/hmo-conversions.jpg';

const projects = [
  { img: img1, title: 'Modern Extension', category: 'House Extensions' },
  { img: img2, title: 'Open Plan Living', category: 'House Extensions' },
  { img: img3, title: 'Dormer Conversion', category: 'Loft Conversions' },
  { img: img4, title: 'Complete Renovation', category: 'Full Refurbishment' },
  { img: img5, title: 'Bespoke Kitchen', category: 'Kitchens' },
  { img: img6, title: 'Luxury Wet Room', category: 'Bathrooms' },
  { img: img7, title: 'Professional HMO', category: 'HMO Conversions' },
  { img: galleryHero, title: 'Project Planning', category: 'Design & Build' },
];

export default function Gallery() {
  return (
    <div className="flex flex-col w-full pb-24 bg-gray-50">
      <PageHeader 
        title="Project Gallery" 
        subtitle="Take a look at some of our recent transformations across Crosby and Merseyside."
        imageSrc={galleryHero}
      />
      
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#091405] mb-6">Our Craft in Focus</h2>
          <p className="text-lg text-muted-foreground">
            We let our work speak for itself. Every image represents a completed project where we've worked closely with homeowners to bring their vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-white cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#091405]/80 via-[#091405]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-1">{project.category}</span>
                <h3 className="text-white font-display font-bold text-xl">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display font-bold text-2xl text-[#091405] mb-4">Want to see more?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We regularly update our social media pages with ongoing project photos and behind-the-scenes glimpses of our work. Follow us to stay updated.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-medium transition-colors">Facebook</a>
            <a href="#" className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-medium transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </div>
  );
}
