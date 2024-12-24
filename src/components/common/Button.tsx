import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
}

export function Button({ href, children, showArrow = true, className = '' }: ButtonProps) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center px-6 py-3 text-base font-semibold bg-white text-purple-600 rounded-full hover:bg-opacity-90 transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {showArrow && (
        <motion.div
          className="ml-2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.div>
      )}
    </motion.a>
  );
}