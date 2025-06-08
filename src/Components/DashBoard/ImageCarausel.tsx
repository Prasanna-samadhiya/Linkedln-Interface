import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from 'styled-components';

const CarouselContainer = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  border-radius: 10px;
`;

const SlideWrapper = styled(Box)<{ index: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => `-${props.index * 100}%`});
`;

const Slide = styled(Box)`
  min-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
`;

interface ImageCarouselProps {
  images: string[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoSlide = false,
  slideInterval = 3000
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlide, slideInterval]);

  return (
    <CarouselContainer>
      <SlideWrapper index={index}>
        {images.map((img, i) => (
          <Slide key={i} style={{ backgroundImage: `url(${img})` }} />
        ))}
      </SlideWrapper>
    </CarouselContainer>
  );
};

export default ImageCarousel;