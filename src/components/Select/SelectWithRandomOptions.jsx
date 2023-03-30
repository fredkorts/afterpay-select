import React from 'react';
import SwiperSelect from './Swiper/SwiperSelect';

const SelectWithRandomOptions = () => {
    // Let's create a random array of numbers for our select component.
  const options = Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000));

  return (
    <SwiperSelect options={options}/>
  );
};

export default SelectWithRandomOptions;