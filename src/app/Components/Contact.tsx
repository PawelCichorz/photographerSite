'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/emailsend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccessMessage('Twoja wiadomość została wysłana!');
      } else {
        setSuccessMessage('Błąd podczas wysyłania wiadomości.');
      }
    } catch (error) {
      setSuccessMessage(`Wystąpił błąd sieciowy ${error}`);
    }
  };

  return (
    <>
      <div className="border-t border-gray-300 my-8 opacity-50 white-bg-section "></div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row w-full justify-around  font-patrick pb-8"
      >
        <div className="mx-auto p-4   flex flex-col items-center justify-center   ">
          <h2 className="text-amber-700 text-3xl font-bold mb-4">
            SKONTAKTUJ SIĘ ZE MNĄ
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-center align-center text-center">
              <input
                placeholder="Imię"
                type="text"
                {...register('name', { required: 'Podaj swoje imię.' })}
                className=" p-2 bg-slate-200/40  rounded border border-gray-300 w-[300px] lg:w-[400px]"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="flex justify-center align-center text-center">
              <input
                placeholder="Email"
                type="email"
                {...register('email', {
                  required: 'Podaj swój email.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Niepoprawny format email.',
                  },
                })}
                className=" p-2 bg-slate-200/40 rounded border border-gray-300 w-[300px] lg:w-[400px]"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="flex  flex-col justify-center align-center text-center">
              <textarea
                placeholder="Wiadomość"
                {...register('message', { required: 'Wpisz swoją wiadomość.' })}
                className=" p-2 bg-slate-200/40 rounded border border-gray-300 h-[150px]"
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-transparent text-amber-700 border border-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all"
            >
              Wyślij
            </button>

            {successMessage && (
              <p className="text-green-500 mt-2">{successMessage}</p>
            )}
          </form>
        </div>
        <div className="flex flex-col  items-center p-4 w-full lg:w-1/3 ">
          {' '}
          <h2 className="text-extrabold text-3xl">
            Fotografia Klaudia Cichórz
          </h2>
          <p className="text-bold text-xl mb-8">Fotograf Skawina i okolice</p>
          <p className="text-lg mb-2">
            Adres: 34-113 Sosnowice ul.Spokojna 41
          </p>{' '}
          <p className="text-lg text-amber-700">tel:509-911-325</p>
          <p className="text-lg text-amber-700 mb-8">
            email: cichorzklaudia@gmail.com
          </p>
          <p className="text-sm w-[300px] text-center">
            Wysyłając wiadomość wyrażasz zgodę na przetwarzanie danych osobowych
            zgodnie z Ustawą o ochronie danych osobowych w związku z wysłaniem
            zapytania przez formularz kontaktowy. Podanie przez Ciebie danych
            jest dobrowolne, ale niezbędne do przetworzenia zapytania.
            Przysługuje Ci prawo dostępu do swoich danych, możliwości ich
            poprawienia lub żądania zaprzestania ich przetwarzania.
          </p>
        </div>
      </motion.div>
    </>
  );
}
