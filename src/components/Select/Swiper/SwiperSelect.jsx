import { useEffect } from 'react';
import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSwiperWrapper } from './Styles/SwiperSelect';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const SwiperSelect = (props) => {

    const { options, initialVal, handleSlideChange, handleSlideSelect, subtitle, primaryColor, secondaryColor, backgroundColor, keyboardEnabled} = props;

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
                    spaceBetween: 10,
                  },
                  "@1.50": {
                    slidesPerView: 6,
                    spaceBetween: 5,
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