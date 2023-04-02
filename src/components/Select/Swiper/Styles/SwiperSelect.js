import styled from 'styled-components';

export const StyledSwiperWrapper = styled.div`

    .container {
      width: 100%;
      background-color: ${(props) => props.backgroundColor || '#fff'};
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
        background: linear-gradient(90deg,${(props) => props.backgroundColor || '#fff'},hsla(0,0%,100%,0));
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
        background: linear-gradient(270deg,${(props) => props.backgroundColor || '#fff'},hsla(0,0%,100%,0));
    }

    .swiper-wrapper {
      display: flex;
      align-items: center;
    }

    .swiper-slide {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        color: ${(props) => props.primaryColor || '#000'};
    }

    .swiper-slide-active {
        font-size: 2.5rem;
        color: ${(props) => props.secondaryColor || '#000'};
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: ${(props) => props.secondaryColor || '#000'};
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
      color: ${(props) => props.primaryColor || '#000'};
    }
`;