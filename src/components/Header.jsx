import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', path: '/services' },
        { name: 'Process', path: '/process' },
        // { name: 'Industries', path: '/industries' }
      ]
    },
    // { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },

    // ⭐ ADDED THIS LINE ⭐
    { name: 'Pricing', path: '/pricing' },

    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-[#1e3a5f] tracking-tight"
            >
              Zaman <span className="text-[#d4af37]">Partners</span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                        location.pathname === item.path ||
                        item.dropdownItems?.some(d => d.path === location.pathname)
                          ? 'text-[#d4af37]'
                          : 'text-[#2d2d2d] hover:text-[#1e3a5f]'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2"
                        >
                          {item.dropdownItems.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.path}
                              className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-[#d4af37]'
                        : 'text-[#2d2d2d] hover:text-[#1e3a5f]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white px-6">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#2d2d2d] hover:text-[#1e3a5f] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-[#d4af37] bg-gray-50'
                          : 'text-[#2d2d2d] hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>

                    {item.hasDropdown && item.dropdownItems && (
                      <div className="pl-4">
                        {item.dropdownItems.slice(1).map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-gray-50"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="px-4 pt-4">
                  <Link to="/contact" className="block">
                    <Button className="w-full bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
