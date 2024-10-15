import React from 'react';
import { useState, useEffect } from 'react';

export default function Cookie() {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setVisible(false);
    }
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-4 bg-black text-white flex justify-between items-center transition-transform z-1500 text-[12px] md:text-lg ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <p>
        Ta strona używa cookies, aby zapewnić najlepsze wrażenia. Kontynuując
        korzystanie z witryny, akceptujesz naszą politykę cookies.
      </p>
      <button
        onClick={handleAccept}
        className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-600 transition"
      >
        Akceptuję
      </button>
    </div>
  );
}
