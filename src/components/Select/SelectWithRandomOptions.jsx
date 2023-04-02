import React, {useState} from 'react';
import SwiperComponent from './Swiper/SwiperComponent';

const SelectWithRandomOptions = () => {
    // Let's create a random array of numbers for our select component.
  const options = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000));

  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectValue = (val) => {
    setSelectedValue(val);
  }

  return (
    <>
        <SwiperComponent 
          options={options} 
          value={selectedValue}
          backgroundColor={"#fff"}
          primaryColor={"#474747"} 
          secondaryColor={"#00817a"} 
          subtitle={"€/Month"} 
          keyboardEnabled
          onSelectValue={handleSelectValue}
        />
    </>
  );
};

export default SelectWithRandomOptions;