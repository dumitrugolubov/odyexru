import React from 'react';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-8 h-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Triangular O shape */}
        <motion.svg
          viewBox="0 0 40 40"
          className="w-full h-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
          <path
            d="M20 4
               L36 30
               H4
               L20 4z"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            strokeLinejoin="round"
            className="origin-center"
          />
        </motion.svg>
      </motion.div>
      <motion.span 
        className="text-xl font-bold text-white"
        whileHover={{ scale: 1.05 }}
      >
        Odyssey Exchange
      </motion.span>
    </motion.div>
  );
}