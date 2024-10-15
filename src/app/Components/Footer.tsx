import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col text-[14px] lg:text-[16px] md:flex-row justify-between items-center min-h-[15vh] bg-black text-gray-200 p-4 font-poppins text-center 2xl:text-xl">
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
