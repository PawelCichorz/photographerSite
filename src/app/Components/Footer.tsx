import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col  lg:flex-row justify-between items-center h-[20vh] bg-black text-gray-200 p-4 font-patrick text-center">
      <div className="lg:text-left">
        <p>© 2024. Fotografia Klaudia Cichórz</p>
        <p>Wszystkie zdjęcia objęte są prawem autorskim.</p>
      </div>
      <div className="lg:text-right">
        <Link
          href="/pdf/Polityka.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Polityka Prywatności i RODO
        </Link>
        <div className="mt-2">
          <Link
            href="/pdf/regulaminSesji.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Regulamin Sesji
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
