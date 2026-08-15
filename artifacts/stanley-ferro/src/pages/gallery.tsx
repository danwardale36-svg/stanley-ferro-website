import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';

// @ts-ignore
import galleryHero from '@assets/14_a1e76b_9c4c8f4c353d4dba9badc9d18be3914e_1786824412975.jpeg';

// Bathrooms
// @ts-ignore
import bath1 from '@assets/0_a1e76b_0b993bf785c34c17917433867057587d_1786824412974.jpg';
// @ts-ignore
import bath2 from '@assets/4_a1e76b_3d8e82447e0949078376ddcb185766a5_1786824412975.jpg';

// Full Refurbishments / Interior
// @ts-ignore
import refurb1 from '@assets/2_a1e76b_1c661abb9b4f49c1a4b6abca8723d47d_1786824412974.jpg';
// @ts-ignore
import refurb2 from '@assets/8_a1e76b_6bbe6eb3c4d449dcbf660a18e73a2fc7_1786824412975.jpg';
// @ts-ignore
import refurb3 from '@assets/1_a1e76b_0e0e818ce132412b82452893074cad9d_1786824412974.jpg';
// @ts-ignore
import refurb4 from '@assets/16_a1e76b_22faa3885b2b4622b78223d73724254a_1786824412975.jpg';

// Loft Conversions
// @ts-ignore
import loft1 from '@assets/3_a1e76b_03a9bd348eed4259af23a98cd95096fb_1786824412975.jpg';
// @ts-ignore
import loft2 from '@assets/12_a1e76b_9b9537878c2a415f971596c27c7e51ee_1786824412975.png';

// House Extensions
// @ts-ignore
import ext1 from '@assets/15_a1e76b_9cfe61dbe7c547e491ee0b66a6787182_1786824412975.jpg';
// @ts-ignore
import ext2 from '@assets/5_a1e76b_4d222dd0d26f4de69ef0d2b7910cc5c7_1786824412975.jpg';
// @ts-ignore
import ext3 from '@assets/6_a1e76b_5c7c7431d3204c5aa8af80ff551673a0_1786824412975.png';
// @ts-ignore
import ext4 from '@assets/9_a1e76b_6f997462e71c4f86b2924063b34f5815_1786824412975.jpeg';
// @ts-ignore
import ext5 from '@assets/13_a1e76b_9bdefced3aef4667aa126983a62e0aa0_1786824412975.jpeg';
// @ts-ignore
import ext6 from '@assets/10_a1e76b_7a0650ae898545d1be334e95ce6f3106_1786824412975.png';

// Kitchens
// @ts-ignore
import kit1 from '@assets/14_a1e76b_9c4c8f4c353d4dba9badc9d18be3914e_1786824412975.jpeg';
// @ts-ignore
import kit2 from '@assets/17_a1e76b_30bf3fbf9e984b1ab783cdeba6170a57_1786824412975.jpg';
// @ts-ignore
import kit3 from '@assets/7_a1e76b_5fd83f5a60064fa89ebec95aba7c8ac9_1786824412975.jpg';
// @ts-ignore
import kit4 from '@assets/11_a1e76b_8a9027afcae54df28b29551628aa92db_1786824412975.png';
// @ts-ignore
import kit5 from '@assets/18_a1e76b_34f5142477bc4395b1806fee2b212e3c_1786824412975.jpg';

// Additional
// @ts-ignore
import add1 from '@assets/21_a1e76b_707fcb7f23ef416288ce18e9337c2caf_1786824412975.jpg';
// @ts-ignore
import add2 from '@assets/22_a1e76b_743ce020875e4b0cb66b0cf2c63c92af_1786824412975.jpg';
// @ts-ignore
import add3 from '@assets/23_a1e76b_8651c9510fc84c6680d24dd603326214_1786824412975.jpg';
// @ts-ignore
import add4 from '@assets/25_a1e76b_9968d17c924441ed9b966b0ab9ec65fd_1786824412975.jpg';
// @ts-ignore
import add5 from '@assets/27_a1e76b_67398d1e8ce545aaaae18c8b665795b3_1786824412975.jpg';
// @ts-ignore
import add6 from '@assets/28_a1e76b_368168d48649497db81e1a1c0e2ff04d_1786824412975.jpg';
// @ts-ignore
import add7 from '@assets/29_a1e76b_9905815c2fc84ec18939f72036a8aee7_1786824412975.jpg';
// @ts-ignore
import add8 from '@assets/20_a1e76b_87aca25cef904191b69f464f482ee45d_1786824412975.jpeg';
// @ts-ignore
import add9 from '@assets/24_a1e76b_9847af829af44d24b1040652c6404f08_1786824412975.jpeg';
// @ts-ignore
import add10 from '@assets/26_a1e76b_20537da0e2ed4ca79f66f5a11e63dcf1_1786824412975.jpeg';

const projects = [
  { img: ext1, title: 'Completed House Extension', category: 'House Extensions' },
  { img: kit1, title: 'Navy Shaker Kitchen', category: 'Kitchens' },
  { img: bath1, title: 'Wet Room & Freestanding Bath', category: 'Bathrooms' },
  { img: loft1, title: 'Loft Conversion Exterior', category: 'Loft Conversions' },
  { img: kit2, title: 'Kitchen with Range Cooker', category: 'Kitchens' },
  { img: refurb1, title: 'Living Room Refurbishment', category: 'Full Refurbishments' },
  { img: ext2, title: 'Rear Extension with Bifolds', category: 'House Extensions' },
  { img: bath2, title: 'Marble Bathroom Suite', category: 'Bathrooms' },
  { img: kit3, title: 'Traditional White Kitchen', category: 'Kitchens' },
  { img: ext3, title: 'Extension Under Construction', category: 'House Extensions' },
  { img: refurb2, title: 'Open Plan Room', category: 'Full Refurbishments' },
  { img: loft2, title: 'Dormer Detail', category: 'Loft Conversions' },
  { img: kit4, title: 'Modern Grey Kitchen Island', category: 'Kitchens' },
  { img: ext4, title: 'Extension Aerial View', category: 'House Extensions' },
  { img: kit5, title: 'Kitchen with Skylights', category: 'Kitchens' },
  { img: ext5, title: 'Brick Extension Gable', category: 'House Extensions' },
  { img: refurb3, title: 'Herringbone Flooring', category: 'Full Refurbishments' },
  { img: ext6, title: 'Open Plan Extension Interior', category: 'House Extensions' },
  { img: refurb4, title: 'Parquet Floor Detail', category: 'Full Refurbishments' },
  { img: add1, title: 'Recent Project', category: 'Our Work' },
  { img: add2, title: 'Recent Project', category: 'Our Work' },
  { img: add3, title: 'Recent Project', category: 'Our Work' },
  { img: add4, title: 'Recent Project', category: 'Our Work' },
  { img: add5, title: 'Recent Project', category: 'Our Work' },
  { img: add6, title: 'Recent Project', category: 'Our Work' },
  { img: add7, title: 'Recent Project', category: 'Our Work' },
  { img: add8, title: 'Recent Project', category: 'Our Work' },
  { img: add9, title: 'Recent Project', category: 'Our Work' },
  { img: add10, title: 'Recent Project', category: 'Our Work' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.5 }}
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
