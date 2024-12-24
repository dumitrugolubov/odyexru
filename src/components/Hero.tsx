import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 text-white text-center">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">
        Первая Биржа Мемкоинов
      </h1>
      <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
        Торгуйте с комиссией 0% и используйте плечо до 777x
      </p>
      <a
        href="https://ody.lol"
        className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-purple-600 rounded-full hover:bg-opacity-90 transition-all"
      >
        Начать торговлю
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </section>
  );
}