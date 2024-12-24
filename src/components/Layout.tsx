import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9333EA] to-[#38BDF8]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}