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
        <Link href="/polityka-prywatnosci" className="hover:underline">
          Polityka Prywatności
        </Link>
        <div className="mt-2">
          <Link href="/klauzula-rodo" className="hover:underline">
            Klauzula RODO
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
