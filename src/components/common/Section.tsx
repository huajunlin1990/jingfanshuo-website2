import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'light-gray';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  bg = 'white',
}) => {
  const bgStyles = {
    'white': 'bg-white',
    'light-gray': 'bg-light-gray',
  };

  return (
    <section id={id} className={`${bgStyles[bg]} py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}> = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        {title}
      </h2>
    </motion.div>
  );
};
