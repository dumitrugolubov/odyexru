import React, { useState, useEffect } from 'react';

export function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) setAccepted(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
          <a href="/privacy" className="underline">
            политикой конфиденциальности
          </a>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="whitespace-nowrap px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-opacity-90"
        >
          Принять
        </button>
      </div>
    </div>
  );
}