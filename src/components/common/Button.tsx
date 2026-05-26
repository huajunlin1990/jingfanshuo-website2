import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 relative overflow-hidden';
  
  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25',
    secondary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const widthStyles = fullWidth ? 'w-full' : '';

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`;

  const commonProps = {
    className: styles,
    ...(!disabled && {
      whileHover: { scale: 1.02, y: -1 },
      whileTap: { scale: 0.98 },
    }),
    transition: { duration: 0.2 },
  };

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        {...commonProps}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...commonProps}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
