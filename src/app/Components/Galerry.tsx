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
        className="my-10 flex justify-center items-center flex-col font-poppins"
      >
        <h2 className="text-center text-2xl sm:text-2xl text-amber-700 mb-6 2xl:text-[35px]">
          ZOBACZ JAK PRACUJĘ
        </h2>
        <div className="flex items-center lg:justify-around flex-wrap justify-center ">
          <Image
            src={a}
            alt="całująca się para"
            width={300}
            layout="intrinsic"
            className="lg:m-[6px] mx-[4px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aa}
            alt="dziecko robiące ciasteczka na święta"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aaaa}
            alt="młoda kobieta w drzwiach kamienicy"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />

          <Image
            src={b}
            alt="chrzciny"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bb}
            alt="zdjęcie fotografia"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bbb}
            alt="kobieca sesja fotograficzna"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aaa}
            alt="sesja fotograficzna studniówka"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bbbb}
            alt="sesja noworodkoa w Skawinie"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={c}
            alt="kobieta oparta o mur"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={cc}
            alt="rodzinna sesja fotofgraficzna"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ccc}
            alt="modelka"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={cccc}
            alt="wałek do robienia ciasteczek świątecznych"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <Link
          href="/portfolio"
          className="lg:px-6 lg:py-2 px-10 py-6 text-white font-poppins bg-amber-700/40 m-4 rounded-sm text-[24px] rounded-lg"
        >
          Więcej...
        </Link>
        <Link
          href="https://m.me/klaudia.wiechec.10"
          target="_blank" 
          rel="noopener noreferrer" 
          className=" px-8 py-4 bg-transparent text-amber-700 border border-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all animate-pulse text-xl sm:text-2xl"
        >
          Napisz na Messenger
        </Link>
      </motion.div>
    </>
  );
};

export default Galerry;
