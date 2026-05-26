import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
  threshold?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  threshold = 0.1,
  duration = 0.6,
}) => {
  const [ref, isInView] = useInView({ threshold, triggerOnce: once });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 60, opacity: 0 };
      case 'down':
        return { y: -60, opacity: 0 };
      case 'left':
        return { x: 60, opacity: 0 };
      case 'right':
        return { x: -60, opacity: 0 };
      default:
        return { y: 60, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={getInitialPosition()}
      animate={isInView ? { y: 0, x: 0, opacity: 1 } : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.82, 0.32, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
