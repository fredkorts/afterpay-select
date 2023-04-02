import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import SwiperCard from './SwiperCard';
import SwiperSelect from './SwiperSelect';

const SwiperComponent = (props) => {

    const {options, value, primaryColor, secondaryColor, subtitle, keyboardEnabled, backgroundColor, onSelectValue} = props;

    const [open, setOpen] = useState(false);
    const [initialVal, setInitialVal] = useState(0);

    useEffect(() => {
      onSelectValue(options[0]);
    }, []);

    const handleSlideChange = (swiper) => {
      onSelectValue(options[swiper.activeIndex]);
      setInitialVal(swiper.activeIndex);
    }

    const handleSlideSelect = (option) => {
      onSelectValue(option);
      setOpen(true);
    }

    const handleOpenSelect = () => {
      setOpen(false);
    }

    return (
      <>
        { open ? 
          <SwiperCard 
            value={value} 
            handleTrigger={handleOpenSelect}
            subtitle={subtitle}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundColor={backgroundColor}
          /> 
          : 
          <SwiperSelect 
            options={options}  
            initialVal={initialVal} 
            handleSlideChange={handleSlideChange} 
            handleSlideSelect={handleSlideSelect} 
            handleOpenSelect={handleOpenSelect}
            subtitle={subtitle}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundColor={backgroundColor}
            keyboardEnabled={keyboardEnabled}
          /> 
        }
      </>
    );
  }

export default SwiperComponent;