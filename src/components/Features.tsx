import React from 'react';
import { Percent, Coins, TrendingUp, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Percent className="h-8 w-8" />,
      title: '0% Комиссия',
      description: 'Торгуйте спотом без комиссии',
    },
    {
      icon: <Coins className="h-8 w-8" />,
      title: '10% с Ликвидаций',
      description: 'Получайте доход от ликвидаций',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Плечо до 777x',
      description: 'Максимальное плечо на рынке',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '50% Партнёрам',
      description: 'Высокие партнёрские вознаграждения',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-white text-center p-6">
              <div className="mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}