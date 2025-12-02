import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Process', path: '/process' },
      // { name: 'Industries', path: '/industries' }
    ],
    resources: [
      // { name: 'Case Studies', path: '/case-studies' },
      { name: 'Insights', path: '/insights' },
      // { name: 'Businesses for Sale', path: '/businesses-for-sale' },
      { name: 'FAQ', path: '/faq' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Confidentiality', path: '/confidentiality' },
      { name: 'Disclaimer', path: '/disclaimer' }
    ]
  };

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Zaman <span className="text-[#d4af37]">Partners</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A premier M&A advisory firm specializing in middle-market transactions. We deliver strategic insights and expert guidance throughout the entire deal lifecycle.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (416) 937-7500</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">qzaman@eztax.ca</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Mississauga, ON</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Company</span>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Resources</span>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Legal</span>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Zaman Partners. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://ca.linkedin.com/in/qamarzaman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center md:text-left">
            Securities offered through registered representatives. Member FINRA/SIPC. All transactions are conducted with the utmost confidentiality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;