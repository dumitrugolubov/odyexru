import React from 'react';
import { Container } from './common/Container';
import { Logo } from './common/Logo';
import { Button } from './common/Button';

export function Header() {
  return (
    <header className="py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <nav>
            <Button href="https://ody.lol" showArrow={false}>
              Начать торговлю
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}