import React from 'react';
import { Layout } from '../components/Layout';

export function Privacy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl font-bold mb-8">Политика Конфиденциальности</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Защита Данных</h2>
            <p>
              Odyssey Exchange придает первостепенное значение защите ваших персональных данных. Мы используем современные методы шифрования и безопасного хранения информации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Использование Cookies</h2>
            <p>
              Мы используем файлы cookie для улучшения работы платформы и предоставления персонализированного опыта. Продолжая использовать наш сайт, вы соглашаетесь с использованием cookies.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}