'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Obiekt z pytaniami i odpowiedziami
const faqData = [
  {
    question: 'Gdzie zrobimy sesję?',
    answer:
      'Sesja może odbyć się zarówno w plenerze, jak i w Twoim domu lub studiu fotograficznym, w zależności od Twoich preferencji.',
  },
  {
    question: 'W co mam się ubrać?',
    answer:
      'Najlepiej wybierać neutralne kolory i proste kroje, które nie odwrócą uwagi od Ciebie. Pamiętaj, że najważniejsze, abyś czuła się komfortowo.',
  },
  {
    question: 'Czy robisz zdjęcia w studiu fotograficznym?',
    answer:
      'Tak, oferuję sesje zarówno w studiu, jak i w plenerze oraz u klienta w domu.',
  },
  {
    question: 'Martwię się, że mój dom nie nadaje się do zdjęć',
    answer:
      'Twój dom to doskonałe miejsce, aby uchwycić naturalne, intymne chwile. Mogę pomóc wybrać odpowiednie miejsca w domu do zdjęć.',
  },
  {
    question: 'Ile trwa sesja?',
    answer:
      'Standardowa sesja trwa od 1 do 2 godzin, w zależności od jej rodzaju i Twoich potrzeb.',
  },
  {
    question: 'Kiedy dostanę zdjęcia?',
    answer:
      'Gotowe zdjęcia dostaniesz w ciągu 2-3 tygodni od sesji, w zależności od ilości zdjęć do obróbki.',
  },
  {
    question: 'Czy dostanę zdjęcia bez obróbki?',
    answer:
      'Nie udostępniam surowych zdjęć bez obróbki. Każde zdjęcie, które otrzymasz, będzie starannie wyretuszowane.',
  },
  {
    question: 'Czy usuniesz mi niedoskonałości w Photoshopie?',
    answer:
      'Tak, delikatna retusz jest częścią usługi, abyś wyglądała najlepiej, jak to możliwe, ale zachowam naturalny wygląd.',
  },
  {
    question: 'W jakim miesiącu najlepiej zrobić sesję brzuszkową?',
    answer:
      'Najlepszy czas na sesję brzuszkową to 7-8 miesiąc ciąży, kiedy brzuszek jest już widoczny, ale jeszcze nie za duży.',
  },
  {
    question: 'Co z makijażem/fryzurą?',
    answer:
      'Zalecam profesjonalny makijaż i fryzurę, abyś czuła się pewnie przed aparatem. Mogę polecić sprawdzonych specjalistów.',
  },
  {
    question: 'Jak przygotować mieszkanie do sesji?',
    answer:
      'Zadbaj o porządek i naturalne oświetlenie. Proste dekoracje i jasne kolory w tle sprawią, że zdjęcia będą wyglądać lepiej.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="border-t border-gray-300 my-8 opacity-50 white-bg-section  "></div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className=" py-10 font-patrick"
      >
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">
            PRZYDATNE INFORMACJĘ
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index}>
                <motion.div
                  className="cursor-pointer bg-slate-200/40 p-4 rounded-lg shadow-md"
                  onClick={() => toggleAnswer(index)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-medium text-black">
                    {item.question}
                  </h3>
                </motion.div>
                {activeIndex === index && (
                  <motion.div
                    className="p-4 bg-white rounded-lg my-1 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-gray-700">{item.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FAQ;
