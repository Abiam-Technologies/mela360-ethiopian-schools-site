
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/0879dca8-451d-43af-a226-ccbfd2e81073.png" 
                alt="Mela360°" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Complete school management software built specifically for Ethiopian schools. 
              Supporting local languages, payment methods, and MoE compliance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-ethiopian-yellow" />
                <span className="text-sm text-gray-300">Hayahulet, 3rd Floor, 24 Building, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-ethiopian-yellow" />
                <span className="text-sm text-gray-300">+251 941 91 9514</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-ethiopian-yellow" />
                <span className="text-sm text-gray-300">+251 932 99 4194</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-ethiopian-yellow" />
                <span className="text-sm text-gray-300">info@abiam.net (Sales)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-ethiopian-yellow" />
                <span className="text-sm text-gray-300">support@abiam.net (Support)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">Pricing</Link></li>
              <li><Link to="/modules" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">Modules</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/roi-calculator" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">ROI Calculator</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">Price calculator</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ethiopian-yellow transition-colors">API</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mela360°. All rights reserved. Made with ❤️ in Ethiopia.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-ethiopian-yellow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-ethiopian-yellow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
