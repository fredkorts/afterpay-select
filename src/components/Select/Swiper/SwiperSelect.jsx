import styled from 'styled-components';
import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const SwiperSelect = (props) => {

    const { options, initialVal, handleSlideChange, handleSlideSelect, subtitle, primaryColor, secondaryColor} = props;

    const StyledSwiperWrapper = styled.div`

    .container {
      width: 100%;
    }

    .swiper:before {
        content: "";
        display: block;
        position: absolute;
        width: 25%;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 3;
        pointer-events: none;
        max-width: 150px;
        background: linear-gradient(90deg,#fff,hsla(0,0%,100%,0));
    }

    .swiper:after {
        content: "";
        display: block;
        position: absolute;
        width: 25%;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        pointer-events: none;
        max-width: 150px;
        background: linear-gradient(270deg,#fff,hsla(0,0%,100%,0));
    }

    .swiper-wrapper {
      display: flex;
      align-items: center;
    }

    .swiper-slide {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        color: ${primaryColor};
    }

    .swiper-slide-active {
        font-size: 2.5rem;
        color: #005e51;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #005e51;
    }

    .swiper-button-prev:before,
    .swiper-button-prev:after,
    .swiper-button-next:before,
    .swiper-button-next:after {
      font-size: 32px;
    }


    .unit-label {
      font-weight: bold;
      font-family: Montserrat, sans-serif;
      font-size: 1.2rem;
      color: ${primaryColor};
    }
`;

    return (
        <StyledSwiperWrapper>
          <div className="container">
            <Swiper
                modules={[Keyboard, Navigation]}
                initialSlide = {initialVal}
                keyboard={{
                    enabled: true,
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
                on
            >
              {options.map((option) => (
                <SwiperSlide key={option} onClick={() => handleSlideSelect(option)}>
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