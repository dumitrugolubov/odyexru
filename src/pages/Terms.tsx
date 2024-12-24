import React from 'react';
import { Layout } from '../components/Layout';

export function Terms() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl font-bold mb-8">Условия Использования</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Общие Положения</h2>
            <p>
              Используя платформу Odyssey Exchange, вы соглашаетесь с настоящими условиями использования. Наша платформа предназначена для торговли криптовалютами и мемкоинами.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Торговые Условия</h2>
            <p>
              Мы предоставляем возможность торговли с плечом до 777x. Пользователи несут полную ответственность за свои торговые решения и должны осознавать риски маржинальной торговли.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Безопасность</h2>
            <p>
              Odyssey Exchange использует передовые технологии безопасности для защиты средств пользователей. Мы рекомендуем использовать двухфакторную аутентификацию.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}