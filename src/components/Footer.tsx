import React from 'react';
import { Container } from './common/Container';
import { Button } from './common/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-white/80">
      <Container>
        <div className="text-center mb-8">
          <Button href="https://ody.lol" className="px-8 py-4 text-lg">
            Перейти на биржу
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">О нас</h3>
            <p className="text-sm">
              Odyssey Exchange - первая биржа мемкоинов с нулевой комиссией и высоким плечом.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Документы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-white">О бирже</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">Условия использования</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">Политика конфиденциальности</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://t.me/t_dmi3" className="hover:text-white">Telegram</a>
              </li>
              <li>
                <a href="https://x.com/t_dmi3" className="hover:text-white">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm border-t border-white/10 pt-8">
          <p>&copy; {currentYear} Odyssey Exchange. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  );
}