import React from 'react';
import { Percent, Coins, TrendingUp, Users } from 'lucide-react';
import { Section } from '../common/Section';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Percent,
    title: '0% Комиссия',
    description: 'Торгуйте спотом без комиссии',
  },
  {
    icon: Coins,
    title: '10% с Ликвидаций',
    description: 'Получайте доход от ликвидаций',
  },
  {
    icon: TrendingUp,
    title: 'Плечо до 777x',
    description: 'Максимальное плечо на рынке',
  },
  {
    icon: Users,
    title: '50% Партнёрам',
    description: 'Высокие партнёрские вознаграждения',
  },
];

export function Features() {
  return (
    <Section className="py-16 bg-white/10 backdrop-blur-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </Section>
  );
}