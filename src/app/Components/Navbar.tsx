'use client';
import React, { useState, useEffect } from 'react';
import ButtonNavbar from './ButtonNavbar';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed  flex md:justify-center md:items-center justify-end  z-40 w-full font-patrick  text-xl lg:text-[27px] sm:bg-black/30 text-white shadow-lg py-4 text`}
    >
      <ul className="hidden md:flex space-x-20 md:justify-center md:items-center ">
        <li>
          <Link href="/" className="hover:underline text-decoration-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline text-decoration-white">
            Oferta
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="hover:underline text-decoration-white"
          >
            Porftolio
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:underline text-decoration-white"
          >
            Kontakt
          </Link>
        </li>
      </ul>

      <ButtonNavbar isOpen={isOpen} toggleMenu={toggleMenu} />

      {isOpen && (
        <ul className="fixed inset-0   flex flex-col items-center justify-center font-lato font-bold text-[50px] bg-black/60 text-[#F1FAEE]">
          <li className="mt-8 p-12">
            <Link href="/" className="hover:underline" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="mt-8 p-12">
            <Link
              href="/about"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Oferta
            </Link>
          </li>

          <li className="mt-8 p-12">
            <Link
              href="/contact"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Porfolio
            </Link>
          </li>
          <li className="mt-8 p-12">
            <Link
              href="/contact"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
