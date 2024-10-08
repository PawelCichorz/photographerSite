'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import a from '../../../assets/imgPorfolio/firstTen/a.jpg';
import aa from '../../../assets/imgPorfolio/firstTen/aa.jpg';
import aaa from '../../../assets/imgPorfolio/firstTen/aaa.jpg';
import aaaa from '../../../assets/imgPorfolio/firstTen/aaaa.jpg';
import b from '../../../assets/imgPorfolio/firstTen/b.jpg';
import bb from '../../../assets/imgPorfolio/firstTen/bb.jpg';
import bbb from '../../../assets/imgPorfolio/firstTen/bbb.jpg';
import bbbb from '../../../assets/imgPorfolio/firstTen/bbbb.jpg';
import c from '../../../assets/imgPorfolio/firstTen/c.jpg';
import cc from '../../../assets/imgPorfolio/firstTen/cc.jpg';
import ccc from '../../../assets/imgPorfolio/firstTen/ccc.jpg';
import cccc from '../../../assets/imgPorfolio/firstTen/cccc.jpg';

const Galerry = () => {
  return (
    <>
      <div className="border-t border-gray-300 my-8 opacity-50 white-bg-section "></div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-10 flex justify-center items-center flex-col font-patrick"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl text-amber-700 mb-6 "
        >
          ZOBACZ JAK PRACUJĘ
        </motion.h2>
        <div className="flex items-center lg:justify-around flex-wrap justify-center white-bg-section">
          <Image
            src={a}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            className="lg:m-[6px] mx-[4px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aa}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aaaa}
            alt="intrinsic"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aaa}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={b}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bb}
            alt="intrinsic"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bbb}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bbbb}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={c}
            alt="intrinsic"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={cc}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ccc}
            alt="intrinsic"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={cccc}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <Link
          href="/portfolio"
          className="lg:px-6 lg:py-2 px-10 py-6 text-white font-patrick bg-amber-700/40 m-4 rounded-sm text-[24px] rounded-lg"
        >
          Więcej...
        </Link>
        <Link
          href="https://m.me/klaudia.wiechec.10"
          target="_blank" // Otwiera link w nowej karcie
          rel="noopener noreferrer" // Dla bezpieczeństwa przy otwieraniu nowej karty
          className=" px-8 py-4 bg-transparent text-amber-700 border border-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all animate-pulse text-2xl"
        >
          Napisz na Messenger
        </Link>
      </motion.div>
    </>
  );
};

export default Galerry;
