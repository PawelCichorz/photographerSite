'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade'; // Załaduj styl dla efektu fade
import 'swiper/css'; // Import ogólnych stylów Swiper
import 'swiper/css/pagination'; // Import stylów dla paginacji
import 'swiper/css/autoplay'; // Import stylów dla autoplay
import one from '../../../assets/imgMain/one.jpg';
import two from '../../../assets/imgMain/two.jpg';
import three from '../../../assets/imgMain/three.jpg';
import four from '../../../assets/imgMain/four.jpg';
import five from '../../../assets/imgMain/five.jpg';
import fives from '../../../assets/imgMain/small/fives.jpg';
import sixs from '../../../assets/imgMain/small/sixs.jpg';
import sevens from '../../../assets/imgMain/small/sevens.jpg';
import eights from '../../../assets/imgMain/small/eights.jpg';
import nines from '../../../assets/imgMain/small/nines.jpg';
import logo from '../../../assets/logo.png';

const image: StaticImageData[] = [one, two, three, four, five];

const smallImage: StaticImageData[] = [fives, sixs, sevens, eights, nines];

const ImageCarousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const selectedImages = isMobile ? smallImage : image;

  return (
    <div className="h-screen relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 pointer-events-none "></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 border-4 border-white opacity-60 z-10 text-white lg:block hidden">
        {' '}
        <Image src={logo} alt="logo" width={300} priority />
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {selectedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="object-cover"
              fill
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
