'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Definiowanie animacji spadania dla każdego elementu
const dropInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.6, // Każdy element ma opóźnienie w zależności od indeksu
      type: 'spring',
    },
  }),
};

const Reportage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const sessions = [
    'Sesje rodzinne',
    'Sesje ciążowe',
    'Sesje noworodkowe',
    'Sesje kobiece',
    'Sesje wizerunkowe',
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 font-poppins">
      {/* Animowany nagłówek "PLENER/STUDIO CENNIK" */}
      <motion.h1
        className="lg:text-4xl font-bold text-center mb-6 text-2xl"
        initial="hidden"
        animate="visible"
        variants={dropInVariants}
        custom={0}
      >
        PLENER/STUDIO CENNIK
      </motion.h1>

      <div className="text-center lg:mb-12 space-y-4 lg:text-2xl tetx-xl text-gray-700 flex items-center flex-col">
        {showText &&
          sessions.map((session, index) => (
            <motion.div
              key={session}
              custom={index + 1}
              initial="hidden"
              animate="visible"
              variants={dropInVariants}
              className="border border-amber-700 rounded-lg w-[300px]"
            >
              {session}
            </motion.div>
          ))}
      </div>

      <motion.div
        className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 mt-10"
        initial="hidden"
        animate="visible"
        variants={dropInVariants}
        custom={sessions.length + 2}
      >
        <motion.div
          className="p-6 border border-amber-800 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform mb-6 md:mb-0 w-[330px] lg:w-[450px]"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="lg:text-2xl font-bold lg:mb-4 text-xl text-center">
            Basic
          </h2>
          <p className="lg:text-xl text-lg font-semibold text-center text-amber-700">
            350 PLN
          </p>
          <ul className="list-disc lg:ml-5 lg:mt-4 space-y-2">
            <li>7 wybranych ujęć w wersji elektronicznej</li>
            <li>7 wydruków na jedwabnym papierze w formacie 15/23</li>
            <li>Elegancka koperta na zdjęcia</li>
            <li>Prywatna galeria online</li>
            <li>Dodatkowe ujęcie: 30 PLN</li>
          </ul>
        </motion.div>

        <motion.div
          className="p-6 border border-amber-800 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform w-[330px] lg:w-[450px]"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="lg:text-2xl font-bold lg:mb-4 text-xl text-center">
            Standard
          </h2>
          <p className="lg:text-xl text-lg font-semibold text-center text-amber-700">
            500 PLN
          </p>
          <ul className="list-disc lg:ml-5 lg:mt-4 space-y-2">
            <li>12 wybranych ujęć w wersji elektronicznej</li>
            <li>12 wydruków na jedwabnym papierze w formacie 15/23</li>
            <li>Ozdobne pudełko na zdjęcia</li>
            <li>Prywatna galeria online</li>
            <li>Dodatkowe ujęcie: 30 PLN</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 max-w-3xl mx-auto text-center text-sm text-gray-600 w-[300px] lg:w-[450px]"
        initial="hidden"
        animate="visible"
        variants={dropInVariants}
        custom={sessions.length + 3}
      >
        Niniejsza oferta nie stanowi oferty handlowej w rozumieniu KC i może
        ulec zmianie. Istnieje możliwość przygotowania indywidualnej oferty oraz
        zamówienia dodatkowych odbitek i albumów.
      </motion.div>
      <Link href="/" className="top-5 left-5 fixed z-50 ">
        <div className="w-[40px] h-[25px] flex items-center justify-center cursor-pointer border-2 border-amber-700  animate-fade-in animate-bounce ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#b45309"
            className="w-full h-full transform"
            width="50"
            height="50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 6l-6 6 6 6"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Reportage;
