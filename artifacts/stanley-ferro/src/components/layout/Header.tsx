import { Link, useLocation } from 'wouter';
import { Menu, X, Facebook, Instagram, Phone } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';
import { Button } from '../ui/button';

// @ts-ignore - Local asset import
import logo from '@assets/FwmPQmrXgAA51T1_1786824909538.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'House Extensions', path: '/house-extensions' },
  { name: 'Loft Conversions', path: '/loft-conversions' },
  { name: 'Full Refurbishments', path: '/full-refurbishments' },
  { name: 'Kitchens', path: '/kitchens' },
  { name: 'Bathrooms', path: '/bathrooms' },
  { name: 'HMO Conversions', path: '/hmo-conversions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Top Bar - Logo and Contact */}
      <div className="bg-black px-4 md:px-6 py-2 flex flex-row sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="shrink-0 flex items-center">
          <img src={logo} alt="Stanley Ferro Developments" className="h-20 sm:h-28 md:h-64 object-contain" />
        </Link>
        
        <div className="flex items-center gap-6 text-sm text-white/80">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Thomas</span>
                <span>07791 151427</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Ste</span>
                <span>07714 873398</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 border-l border-white/20 pl-6">
            <a href="https://www.facebook.com/p/Stanley-Ferro-Developments-Limited-100065145694491/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/stanleyferrodevelopments/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://x.com/ferro_ltd" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
              <FaXTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="hidden xl:flex items-center justify-between">
            <ul className="flex items-center w-full justify-between py-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className={`text-sm lg:text-base font-medium transition-colors hover:text-white/80 ${
                      location === link.path ? 'text-white underline underline-offset-4 decoration-2' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile menu toggle */}
          <div className="xl:hidden flex items-center justify-between py-3">
            <span className="font-semibold text-white">Menu</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-border flex flex-col py-4 px-4 z-40 max-h-[calc(100vh-140px)] overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-md text-base font-medium transition-colors ${
                    location === link.path 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
