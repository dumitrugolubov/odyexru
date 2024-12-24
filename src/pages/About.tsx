import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/common/Button';
import { Section } from '../components/common/Section';

export function About() {
  return (
    <Layout>
      <Section className="py-12">
        <article className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">О Бирже Odyssey Exchange</h1>
          
          <div className="mb-12">
            <img 
              src="/images/odyssey-exchange.png"
              alt="Odyssey Exchange - Первая биржа мемкоинов с нулевой комиссией"
              className="w-full rounded-lg mb-6"
            />
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Инновационная Платформа для Торговли Мемкоинами</h2>
              <p className="mb-4">
                Odyssey Exchange - это революционная торговая платформа, созданная специально для энтузиастов мемкоинов и криптовалютных трейдеров. Мы первыми предложили уникальные условия: нулевую комиссию на спот-торговлю и беспрецедентное плечо до 777x, что делает нас лидером в сегменте торговли мемкоинами.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Преимущества Торговли на Odyssey Exchange</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Нулевая комиссия на все спот-сделки, позволяющая максимизировать вашу прибыль</li>
                <li>Уникальное плечо до 777x - самое высокое на рынке криптовалют</li>
                <li>Инновационная система распределения прибыли: 10% возврат с ликвидаций</li>
                <li>Лучшая партнёрская программа с вознаграждением до 50% от комиссии рефералов</li>
                <li>Мгновенное исполнение ордеров благодаря передовой торговой системе</li>
                <li>Профессиональный торговый интерфейс с расширенной аналитикой</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Технологии и Безопасность</h2>
              <p className="mb-4">
                Odyssey Exchange использует передовые технологии безопасности и шифрования для защиты средств пользователей. Наша инфраструктура построена на высокопроизводительных серверах, обеспечивающих минимальную задержку при исполнении ордеров и максимальную стабильность работы платформы.
              </p>
              <p className="mb-4">
                Мы применяем многоуровневую систему защиты, включающую:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Холодное хранение криптоактивов</li>
                <li>Двухфакторную аутентификацию (2FA)</li>
                <li>Продвинутый мониторинг транзакций</li>
                <li>Защиту от DDoS-атак</li>
                <li>Регулярные аудиты безопасности</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Торговля Мемкоинами: Новая Эра</h2>
              <p className="mb-4">
                В мире, где мемкоины становятся всё более популярными, Odyssey Exchange предоставляет профессиональную платформу для торговли этими активами. Мы поддерживаем широкий спектр мемкоинов, постоянно расширяем листинг и предоставляем детальную аналитику по каждому активу.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <img 
                src="/images/odyssey-exchange-trade.png"
                alt="Odyssey Trade - Профессиональный торговый интерфейс для торговли мемкоинами"
                className="rounded-lg"
              />
              <img 
                src="/images/odyssey-trade.png"
                alt="Odyssey Exchange - Мобильная платформа для торговли мемкоинами"
                className="rounded-lg"
              />
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Присоединяйтесь к Революции в Торговле Мемкоинами</h2>
              <p className="mb-6">
                Odyssey Exchange - это больше, чем просто биржа. Это сообщество трейдеров, объединённых страстью к инновациям и новым возможностям на рынке криптовалют. Присоединяйтесь к нам и станьте частью революции в торговле мемкоинами.
              </p>
              <div className="text-center">
                <Button href="https://t.me/odysseyexchange_m" className="px-8 py-4 text-lg">
                  Присоединиться к сообществу
                </Button>
              </div>
            </section>
          </div>
        </article>
      </Section>
    </Layout>
  );
}