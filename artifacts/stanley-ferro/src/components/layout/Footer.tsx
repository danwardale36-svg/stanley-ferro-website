import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from '@assets/stanley-ferro-logo.png';

export function Footer() {
  return (
    <footer className="bg-[#091405] text-white pt-16 pb-8 border-t-4 border-primary mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <div className="bg-white p-4 rounded-md inline-block w-fit mb-2">
              <img src={logo} alt="Stanley Ferro Developments" className="h-12 object-contain" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              A reputable building contractor company focusing on house additions, loft conversions, and total home renovations across Crosby and surrounding areas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-semibold text-lg text-primary mb-2">Services</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/house-extensions" className="hover:text-primary transition-colors">House Extensions</Link></li>
              <li><Link href="/loft-conversions" className="hover:text-primary transition-colors">Loft Conversions</Link></li>
              <li><Link href="/full-refurbishments" className="hover:text-primary transition-colors">Full Refurbishments</Link></li>
              <li><Link href="/kitchens" className="hover:text-primary transition-colors">Kitchens</Link></li>
              <li><Link href="/bathrooms" className="hover:text-primary transition-colors">Bathrooms</Link></li>
              <li><Link href="/hmo-conversions" className="hover:text-primary transition-colors">HMO Conversions</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-semibold text-lg text-primary mb-2">Company</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Project Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-semibold text-lg text-primary mb-2">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Crosby, Merseyside<br/>and surrounding areas</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>Thomas: 07791 151427</span>
                  <span>Ste: 07714 873398</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@stanleyferro.co.uk" className="hover:text-primary transition-colors">info@stanleyferro.co.uk</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Stanley Ferro Developments Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
