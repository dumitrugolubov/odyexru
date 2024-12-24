import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Button } from '../common/Button';

export function Hero() {
  return (
    <Section className="py-20 text-white text-center">
      <motion.h1 
        className="text-4xl sm:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Первая Биржа Мемкоинов
      </motion.h1>
      <motion.p 
        className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Торгуйте с комиссией 0% и используйте плечо до 777x
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Button href="https://ody.lol" className="px-8 py-4 text-lg">
          Начать торговлю
        </Button>
      </motion.div>
    </Section>
  );
}