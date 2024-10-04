'use client';
import React, { useState, useEffect } from 'react';
import ButtonNavbar from './ButtonNavbar';
import Link from 'next/link';
import Image from 'next/image';
import one from '../../../assets/one.png';

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
    <nav className="fixed  flex md:justify-center md:items-center justify-end  z-40 w-full font-patrick  text-xl lg:text-[27px] bg-none md:bg-amber-700/40 text-black shadow-lg  ">
      <ul className="hidden md:flex space-x-16 md:justify-center md:items-center ">
        <li>
          <Link href="/" className="hover:underline text-decoration-gold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline text-decoration-gold">
            Oferta
          </Link>
        </li>
        <Image src={one} alt="logo" width={200} height={50} priority />
        <li>
          <Link
            href="/contact"
            className="hover:underline text-decoration-gold"
          >
            Porfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:underline text-decoration-gold"
          >
            Kontakt
          </Link>
        </li>
      </ul>

      <ButtonNavbar isOpen={isOpen} toggleMenu={toggleMenu} />

      {isOpen && (
        <ul className="fixed inset-0   flex flex-col items-center justify-center font-lato font-bold text-[50px] bg-amber-700/40 text-[#F1FAEE]">
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
