'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

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
import five from '../../../assets/imgMain/small/DSC00691.jpg';
import six from '../../../assets/imgMain/small/DSC09219.jpg';
import seven from '../../../assets/imgMain/small/DSC09443.jpg';
import eight from '../../../assets/imgMain/small/eight.png';

const image: StaticImageData[] = [one, two, three, four];

const smallImage: StaticImageData[] = [five, six, seven, eight];

const ImageCarousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if screen width is less than 768px
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const selectedImages = isMobile ? smallImage : image;

  return (
    <div className="h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          // reverseDirection: false, // Dodaj tę linię
        }}
        speed={1000}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {selectedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-full">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
