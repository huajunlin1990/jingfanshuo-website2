import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../../data/company';

const navItems = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '工程案例', path: '/cases' },
  { name: '关于我们', path: '/about' },
  { name: '新闻资讯', path: '/news' },
  { name: '联系我们', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>{companyInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>{companyInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{companyInfo.address}</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">晶</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">{companyInfo.shortName}</h1>
              <p className="text-xs text-gray-500">新材料科技</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300"
            >
              立即咨询
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-accent/10 text-accent'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
