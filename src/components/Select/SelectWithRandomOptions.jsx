import React from 'react';
import SwiperComponent from './Swiper/SwiperComponent';

const SelectWithRandomOptions = () => {
    // Let's create a random array of numbers for our select component.
  const options = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000));

  return (
    <>
        <SwiperComponent 
          options={options} 
          primaryColor={"#474747"} 
          secondaryColor={"#00817a"} 
          subtitle={"€/Month"} 
          keyboardEnabled
        />
    </>
  );
};

export default SelectWithRandomOptions;