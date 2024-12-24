import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Award } from 'lucide-react';
import { Section } from '../common/Section';
import { PartnerCard } from './PartnerCard';

const benefits = [
  {
    icon: Rocket,
    title: 'Быстрый Старт',
    description: 'Начните зарабатывать сразу после регистрации',
  },
  {
    icon: Shield,
    title: 'Надёжная Система',
    description: 'Прозрачная система начисления комиссий',
  },
  {
    icon: Award,
    title: 'Высокие Выплаты',
    description: 'До 50% от комиссии ваших рефералов',
  },
];

export function Partners() {
  return (
    <Section className="py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Партнёрская Программа
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <PartnerCard key={index} {...benefit} index={index} />
        ))}
      </div>
    </Section>
  );
}