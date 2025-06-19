import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledImg = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

interface ImageCarouselProps {
  images: string[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoSlide = false,
  slideInterval = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    setLoaded(new Array(images.length).fill(false));
  }, [images]);

  useEffect(() => {
    if (!autoSlide || images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlide, slideInterval]);

  const handleImageLoad = (i: number) => {
    setLoaded((prev) => {
      const updated = [...prev];
      updated[i] = true;
      return updated;
    });
  };

  return (
    <CarouselContainer>
      <SlideWrapper index={index}>
        {images.map((img, i) => (
          <Slide key={i}>
            {!loaded[i] && (
              <DotLottieReact
                src="https://lottie.host/f0fda652-ff52-49d1-b4e1-d1f84b8dfd8b/gf6cEbVl5O.lottie"
                autoplay
                loop
                style={{ width: 550, height: 260, position: 'absolute' }}
              />
            )}
            <StyledImg
              src={img}
              alt={`carousel-img-${i}`}
              onLoad={() => handleImageLoad(i)}
              style={{ display: loaded[i] ? 'block' : 'none' }}
            />
          </Slide>
        ))}
      </SlideWrapper>
    </CarouselContainer>
  );
};

export default ImageCarousel;
