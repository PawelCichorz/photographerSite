'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Comment {
  name: string;
  text: string;
}

const comments: Comment[] = [
  {
    name: 'Weronika',
    text: 'Sesja zdjęciowa ( narzeczeńska ) pod okiem Klaudi była bardzo udana. Klaudia potrafiła uchwycić nasze najlepsze strony. Całość przebiegała sprawnie i profesjonalnie, a efekty są naprawdę imponujące. Cudowna pamiątka, która zostanie na lata ❤️. Polecam wszystkim.',
  },
  {
    name: 'Monika',
    text: 'Rodzinna sesja zdjęciowa w plenerze pod okiem Klaudii - rewelacja. Ciekawe propozycje zdjęć, a i nawet balonik na sesji był! Miejsca do zdjęć fajne, ciekawe.😉 My bardzo polecamy Klaudię😁❤️',
  },
  {
    name: 'Bogdan',
    text: 'Skorzystałem z sesji rodzinnej- pokoleniowej. Bardzo przyjemna atmosfera, cudowne zdjęcia, wydobyte emocje :) Polecam',
  },
  {
    name: 'Michał',
    text: 'Pełne zaangażowanie do swojej pracy oraz dusza artysty Polecam!!',
  },
  {
    name: 'Klaudia',
    text: 'Profesjonalne podejście, bardzo miła atmosfera podczas sesji.Polecam 🥰',
  },
  {
    name: 'Marta',
    text: 'Pełen profesjonalizm ❤️ Atmosfera i kontakt z klientem na najwyższym poziomie. Polecam !!!!!',
  },
  {
    name: 'Lizaveta',
    text: 'To było wspaniałe, profesjonalne i niezapomniane przeżycie o świcie z Klaudią. Polecam w 100%',
  },
];

const Opinions = () => {
  const [currentComment, setCurrentComment] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % comments.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="border-t border-gray-300 my-8 opacity-50 "></div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-10 flex justify-center items-center flex-col  "
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-poppins mb-6 text-amber-700"
        >
          OPINIE
          <br />
          OCENA W GOOGLE 5/5
          <br />
          <br />
          <Link
            href="https://g.co/kgs/HvPQyoV"
            target="_blank"
            rel="noopener noreferrer"
            className=" px-8 py-4 bg-transparent text-amber-700 border border-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all animate-pulse"
          >
            Sprawdź tutaj
          </Link>
        </motion.h2>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg mx-auto w-[300px] sm:w-[500px] lg:w-[700px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg text-gray-800 mb-4"
          >
            {comments[currentComment].text}
          </motion.p>
          <p className="text-center font-bold text-lg text-amber-700">
            - {comments[currentComment].name}
          </p>

          <div className="flex justify-center mt-4 space-x-2">
            {comments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentComment(index)}
                className={`w-3 h-3 rounded-full ${
                  currentComment === index ? 'bg-amber-700' : 'bg-gray-300'
                }`}
                aria-label={`Comment ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Opinions;
