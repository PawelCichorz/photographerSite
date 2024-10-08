'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import about from '../../../assets/about.jpg';

const FadeInComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }} // Początkowa pozycja i przezroczystość
      whileInView={{ opacity: 1, y: 0 }} // Kiedy komponent jest widoczny
      transition={{ duration: 1.5 }} // Czas trwania animacji
      viewport={{ once: true }} // Animacja występuje tylko raz przy przewinięciu
      className="my-10 flex justify-center items-center flex-col lg:flex-row white-bg-section"
    >
      <Image src={about} alt="zdjęcie fotografa" width={400} priority />
      <div className="text-black mb-4  w-[300px] sm:w-[472px]  lg:w-[430px] font-patrick lg:ml-16  text-[17px] lg:text-[20px] text-center">
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
            sequence={[3000, ' Klaudia Cichórz']}
            wrapper="span"
            speed={1}
          />
        </p>
      </div>
    </motion.div>
  );
};

export default FadeInComponent;
