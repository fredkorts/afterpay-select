import styled from 'styled-components';
import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

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
        color: #474747;
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
      color: #474747;
    }
`;

const StyledSwiperCard = styled.div`
    min-width: 300px;
    width: 100%;
    height: 85px;
    padding: 6px 0 6px 12px;
    text-align: left;
    border-left: 6px solid #00817a;
    box-shadow: 0 0 12px 0 #bbb;
    border-radius: 6px;

    .selectedOption {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .options {
      display: flex;
      justify-content: space-between;
      padding-right: 0.5rem;

      button {
        padding: 0;
        background: #fff;
        color: #00817a;
        font-size: 0.875rem;
      }
    }
`;

const SwiperSelect = (props) => {

    const [value, setValue] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
      setValue(props.options[0]) // This will log the updated value
    }, []);

    const handleSlideChange = (swiper) => {
      setValue(props.options[swiper.activeIndex])
    }

    const handleSlideSelect = (option) => {
      setValue(option);
      setOpen(true);
    }

    const handleOpenSelect = () => {
      setOpen(false);
    }

    return (
      <>
      { open ?         
        <StyledSwiperCard>
          <div className="selectedOption">{value}</div>
          <div className="options">
            <div className="unit-label">€/Month</div>
            <div className="button">
              <button onClick={() => {handleOpenSelect()}}>EDIT</button>
            </div>
          </div>
        </StyledSwiperCard>
      :  
        <StyledSwiperWrapper>
          <div className="container">
            <Swiper
                modules={[Keyboard, Navigation]}
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
              {props.options.map((option) => (
                <SwiperSlide onClick={(swiper) => handleSlideSelect(option)}>
                  {option}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="unit-label">€/Month</div>
          </div>
        </StyledSwiperWrapper>
      }
      </>
    );
  }

export default SwiperSelect;