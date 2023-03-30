import styled from 'styled-components';
import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const StyledSwiperWrapper = styled.div`

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

    .swiper-slide {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        color: #474747;
    }

    .swiper-slide-active {
        font-size: 2.5rem;
        color: #005e51;
    }
`;

const SwiperSelect = (props) => {

    return (
      <StyledSwiperWrapper className="custom-select-wrapper">
        <Swiper
            modules={[Keyboard, Navigation]}
            keyboard={{
                enabled: true,
              }}
            navigation
            spaceBetween={5}
            slidesPerView={6}
            centeredSlides={true}
            onSlideChange={(swiper) => console.log(swiper)}
        >
          {props.options.map((option) => (
            <SwiperSlide>
              {option}
            </SwiperSlide>
          ))}
        </Swiper>
        <div class="unit-label">€/Month</div>
      </StyledSwiperWrapper>
    );
  }

export default SwiperSelect;