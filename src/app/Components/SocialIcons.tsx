// src/Components/SocialIcons.tsx
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="fixed right-5 top-24 bg-blue-800/90 rounded-lg shadow-lg p-3 z-50 ">
      <a
        href="https://www.facebook.com/klaudia.wiechec.10"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="block text-white hover:text-blue-600 transition duration-300 pb-4"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="block text-white hover:text-pink-600 transition duration-300"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialIcons;
