import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className = '',
  id,
  ...props
}) => {
  const hasError = !!error;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
          hasError
            ? 'border-red-400 focus:ring-red-200 focus:border-red-400'
            : 'border-gray-300 hover:border-gray-400'
        } ${icon ? 'pl-10' : ''} ${className}`}
        {...props}
      />
        <AnimatePresence>
          {hasError ? (
            <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
              <AlertCircle className="w-5 h-5 text-red-500" />
            </motion.div>
          ) : props.value && !hasError && props.value !== '' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | null;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const hasError = !!error;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none ${
          hasError
            ? 'border-red-400 focus:ring-red-200'
            : 'border-gray-300 hover:border-gray-400'
        } ${className}`}
        {...props}
      />
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
