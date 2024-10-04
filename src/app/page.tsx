import React from 'react';
import Navbar from './Components/Navbar';
import ImageCarousel from './Components/ImageCarousel';
import SocialIcons from './Components/SocialIcons';
import About from './Components/About';

export default function Home() {
  return (
    <>
      <Navbar /> <ImageCarousel />
      <SocialIcons />
      <About />
    </>
  );
}
