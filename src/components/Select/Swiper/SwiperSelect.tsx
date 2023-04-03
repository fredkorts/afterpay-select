import React from 'react';
import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSwiperWrapper } from './Styles/SwiperSelect';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

interface SwiperSelectProps {
  options: number[];
  initialVal: number;
  handleSlideChange: (swiper: any) => void;
  handleSlideSelect: (option: number) => void;
  subtitle: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  keyboardEnabled: boolean;
}

const SwiperSelect: React.FC<SwiperSelectProps> = (props) => {

    const { 
      options, 
      initialVal, 
      handleSlideChange, 
      handleSlideSelect, 
      subtitle, 
      primaryColor, 
      secondaryColor, 
      backgroundColor, 
      keyboardEnabled
    } = props;

    return (
        <StyledSwiperWrapper
          backgroundColor={backgroundColor}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        >
          <div className="container">
            <Swiper
                modules={[Keyboard, Navigation]}
                initialSlide = {initialVal}
                keyboard={{
                    enabled: (keyboardEnabled || false),
                  }}
                navigation
                spaceBetween={20}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  "@1.50": {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
                centeredSlides={true}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
              {options.map((option, index) => (
                <SwiperSlide key={index} onClick={() => handleSlideSelect(option)}>
                  {option}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="unit-label">{subtitle}</div>
          </div>
        </StyledSwiperWrapper>
    );
  }

export default SwiperSelect;