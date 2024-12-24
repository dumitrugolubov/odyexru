import React from 'react';
import { Rocket, Shield, Award } from 'lucide-react';

export function Partners() {
  const benefits = [
    {
      icon: <Rocket className="h-12 w-12" />,
      title: 'Быстрый Старт',
      description: 'Начните зарабатывать сразу после регистрации',
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Надёжная Система',
      description: 'Прозрачная система начисления комиссий',
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'Высокие Выплаты',
      description: 'До 50% от комиссии ваших рефералов',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Партнёрская Программа</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-lg">
              <div className="mb-4 inline-block">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}