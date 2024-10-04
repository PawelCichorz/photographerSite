import React from 'react';

interface ButtonNavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const ButtonNavbar: React.FC<ButtonNavbarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden z-50 ">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none p-4 "
      >
        {isOpen ? (
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ButtonNavbar;
