import React from 'react';
import SwiperComponent from './Swiper/SwiperComponent';

const SelectWithRandomOptions = () => {
    // Let's create a random array of numbers for our select component.
  const options = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000));

  return (
    <>
        <SwiperComponent options={options} primaryColor={"#000"} secondaryColor={"000"} subtitle={"€/Month"} keyboardEnabled/>
    </>
  );
};

export default SelectWithRandomOptions;