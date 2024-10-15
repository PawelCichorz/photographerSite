'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Obiekt z pytaniami i odpowiedziami
const faqData = [
  {
    question: 'Gdzie zrobimy sesję?',
    answer:
      'Kiedy ustalimy termin, zawsze podpytuję o preferencje: plener czy wnętrze, ile będzie osób i w jakim wieku. Wszystko zależy od Waszych upodobań. Jeśli macie konkretne miejsce, w którym chcielibyście zdjęcia, oceniam, czy jest to możliwe(światło, warunki atmosferyczne). Jeśli nie macie pomysłu, nie martwcie się-ja podam swoje propozycje.',
  },
  {
    question: 'W co mam się ubrać?',
    answer: `Na zdjęciach najlepiej sprawdzają się ubrania wygodne, i takie w
których się dobrze czujecie. Ważne, aby nie miały napisów, naklejek,
dużych wzorów. Dobrze wyglądają stroje w miarę jednolite,
utrzymane w podobnej tonacji(staramy się nie wprowadzać więcej niż
3/4kolory). Postaraj się też dopasować strój do klimatu miejsca sesji,
jeśli np. będzie to las, zostaw pantofle i krawat w domu  na pewno
lepiej sprawdzi się luźna koszula, przewiewne spodnie. Jeśli natomiast
elegancka miejska sesja-szykowne sukienki będą w sam raz. Jeśli
jedna osoba zakłada coś wzorzystego, w kwiaty, paski, kropki, niech
reszta uczestników sesji będzie ubrana w jednolite barwy, inaczej
wprowadzimy za dużo gryzących się ze sobą wzorów.`,
  },
  {
    question: 'Czy robisz zdjęcia w studiu fotograficznym?',
    answer: `Tak, przygotowałam dla Was studio w klimacie boho. Zapraszam do
obejrzenia jego zdjęć na stronie.`,
  },
  {
    question: 'Martwię się, że mój dom nie nadaje się do zdjęć',
    answer: `Jedyny ewentualny problem to zbyt mała ilość światła. Z tego
względu na sesje w domu umawiamy się między godziną 10-16. Przed
sesją proszę Was, abyście wysłali mi kilka zdjęc z Waszego domu,
abym mogła ocenić, czy damy radę :)
Przed sesją proszę, aby uprzątnąć wszelkie kable, ładowarki, płyny,
proszki. Jednym słowem wszystko, co może rozpraszać uwagę od
głównych postaci na zdjęciach.
Co do wystroju, mebli itp. nie ma to żadnego znaczenia. To wasz
dom, Wasze wspomnienia i o to w tym chodzi !`,
  },
  {
    question: 'Ile trwa sesja?',
    answer:
      'Standardowa sesja trwa od 1 do 2 godzin, w zależności od jej rodzaju i Twoich potrzeb.',
  },
  {
    question: 'Kiedy dostanę zdjęcia?',
    answer: `Czas oczekiwania to 2-4 tygodni. Oczywiście, jeśli uda mi się
wcześniej, nie zawaham się tego zrobić!;)`,
  },
  {
    question: 'Czy dostanę zdjęcia bez obróbki?',
    answer:
      'Nie udostępniam surowych zdjęć bez obróbki. Każde zdjęcie, które otrzymasz, będzie starannie wyretuszowane.',
  },
  {
    question: 'Czy usuniesz mi niedoskonałości w Photoshopie?',
    answer: `Drobne mankamenty urody takie jak: blizny, pieprzyki, krostki,
siniaki itp. usuwam. Natomiast nie odchudzam, niczego nie
powiększam, nie pomniejszam, nie zmieniam koloru oczu, czy
włosów. Ja staram się rejestrować rzeczywistość i cenię naturalność.
Dlatego na moich zdjęciach są prawdziwi ludzie, z delikatnym
podkreśleniem ich naturalnego piękna.`,
  },
  {
    question: 'W jakim miesiącu najlepiej zrobić sesję brzuszkową?',
    answer: `Tak naprawdę, to Ty wiesz najepiej jak się czujesz. Optymalny czas to
7/8 miesiąc, kiedy to widać już ładnie brzuszek, a Ty czujesz się
spokojna.`,
  },
  {
    question: 'Co z makijażem/fryzurą?',
    answer: `Tak jak wspominałam, lubię naturalność. Ale faktycznie chociaż lekki
makijaż znacznie poprawia efekt końcowy. Możesz skorzystać z usług
wizażystki, albo pomalować się sama. Główną pracę wykonuje tu
fluid, który wyrówna koloryt skóry.`,
  },
  {
    question: 'Jak przygotować mieszkanie do sesji?',
    answer: `Usuń z widocznych obszarów wszelkie płyny, proszki do prania i inne rozpraszacze.  
Uporządkuj ilość kabli i ładowarek, zaleca się, aby podczas sesji nie było tego typu przedmiotów w gniazdkach. 
Często sesje w domu odbywają się na łóżku w sypialni, dlatego warto przygotować jasną, jednolitą pościel. 
Zabawki mogą być ciekawym elementem na zdjęciach, jednak unikaj ich nadmiernego nagromadzenia. 
Jeśli twoje mieszkanie jest dość ciemne, odsłoń wszystkie firanki i zasłony.`,
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
        className=" py-10 font-poppins"
      >
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">
            Q & A
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
