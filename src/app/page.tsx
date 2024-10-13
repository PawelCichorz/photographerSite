import React from 'react';
import Navbar from './Components/Navbar';
import ImageCarousel from './Components/ImageCarousel';
import SocialIcons from './Components/SocialIcons';
import About from './Components/About';
import Galerry from './Components/Galerry';
import Opinions from './Components/Opinions';
import Questions from './Components/Questions';
import Contact from './Components/Contact';

export default function Home() {
  return (
    <>
      <Navbar /> <ImageCarousel />
      <SocialIcons />
      <About />
      <Galerry />
      <Opinions />
      <Questions />
      <Contact />
    </>
  );
}
