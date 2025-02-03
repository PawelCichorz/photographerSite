'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import about from '../../../assets/newMain.png';

const FadeInComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="my-10 flex justify-center items-center flex-col lg:flex-row white-bg-section"
    >
      <Image src={about} alt="zdjęcie fotografa" width={350} priority />
      <div className="text-black mb-4  w-[300px] sm:w-[472px]  lg:w-[500px] 2xl:w-[900px] font-poppins lg:ml-8  text-[17px] lg:text-[18px] text-center 2xl:text-[25px]">
        <span>
          Witaj, jestem fotografem i od zawsze fascynuje mnie możliwość
          zatrzymania ulotnych chwil w kadrze i opowiedzenia historii za pomocą
          obrazów. Specjalizuję się w fotografii rodzinnej, reportażowej,
          ciążowej, noworodkowej i kobiecej. Dzięki Wam mogę uchwycić emocje i
          piękno, które jest w każdym z nas. Każde zdjęcie to dla mnie nowa
          przygoda i wyzwanie, które pozwala mi rozwijać swoje umiejętności.
          Zapraszam do obejrzenia mojego portfolio i wspólnego stworzenia
          wyjątkowych wspomnień!
        </span>
        <br></br>
        <p className="w-full text-center">
          <TypeAnimation
            className="font-grypen text-[45px] "
            sequence={[5000, ' Klaudia Cichórz']}
            wrapper="span"
            speed={1}
          />
        </p>
      </div>
    </motion.div>
  );
};

export default FadeInComponent;
