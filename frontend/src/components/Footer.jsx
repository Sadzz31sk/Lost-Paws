import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white px-5 py-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/logo_lostpaws.png" alt="LostPaws Logo" className="w-10 h-10" />
              <h3 className="text-xl font-bold">LostPaws</h3>
            </div>
            
            <p className="text-gray-400 mb-6 text-sm">
              Helping stray animals find their forever homes through community support and compassion.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-card flex justify-center items-center hover:bg-orange-primary transition"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-card flex justify-center items-center hover:bg-orange-primary transition"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-card flex justify-center items-center hover:bg-orange-primary transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-primary transition text-sm">Home</Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-400 hover:text-orange-primary transition text-sm">Report Animal</Link>
              </li>
              <li>
                <Link to="/shelters" className="text-gray-400 hover:text-orange-primary transition text-sm">Shelters</Link>
              </li>
              <li>
                <Link to="/adopt" className="text-gray-400 hover:text-orange-primary transition text-sm">Adopt</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-orange-primary transition text-sm">Donate</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:help@lostpaws.com" className="flex items-center gap-2 text-gray-400 hover:text-orange-primary transition text-sm">
                <Mail size={18} />
                help@lostpaws.com
              </a>
              <a href="mailto:support@lostpaws.com" className="flex items-center gap-2 text-gray-400 hover:text-orange-primary transition text-sm">
                <Mail size={18} />
                support@lostpaws.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-orange-primary transition text-sm">
                <Phone size={18} />
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 LostPaws. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
