import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: React.ReactNode;
  aspectRatio?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  aspectRatio = '16/9',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    };

    let observer: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '100px',
        threshold: 0.01,
      });

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
    } else {
      setIsInView(true);
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const defaultPlaceholder = (
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
      style={{ aspectRatio }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <div className="w-10 h-10 border-3 border-gray-300 rounded-full animate-spin border-t-accent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-200 rounded-full" />
        </div>
      </div>
    </motion.div>
  );

  const errorPlaceholder = (
    <div
      className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center"
      style={{ aspectRatio }}
    >
      <svg
        className="w-12 h-12 text-gray-400 mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-sm text-gray-500">图片加载失败</span>
    </div>
  );

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      <AnimatePresence mode="wait">
        {!isLoaded && !hasError && (placeholder || defaultPlaceholder)}
      </AnimatePresence>

      {hasError && errorPlaceholder}

      {isInView && !hasError && (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
