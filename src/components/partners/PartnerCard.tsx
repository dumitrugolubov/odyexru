import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PartnerCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function PartnerCard({ icon: Icon, title, description, index }: PartnerCardProps) {
  return (
    <motion.div 
      className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
      }}
    >
      <motion.div 
        className="mb-4 inline-block"
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon className="h-12 w-12" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}