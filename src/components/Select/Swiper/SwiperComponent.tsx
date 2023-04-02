import React from 'react';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import SwiperCard from './SwiperCard';
import SwiperSelect from './SwiperSelect';

interface SwiperComponentProps {
  options: number[];
  value: number | null;
  primaryColor: string;
  secondaryColor: string;
  subtitle: string;
  keyboardEnabled: boolean;
  backgroundColor: string;
  onSelectValue: (val: number) => void;
}

const SwiperComponent: React.FC<SwiperComponentProps> = (props) => {

    const {
      options, 
      value, 
      primaryColor, 
      secondaryColor, 
      subtitle, 
      keyboardEnabled, 
      backgroundColor, 
      onSelectValue
    } = props;

    const [open, setOpen] = useState<boolean>(false);
    const [initialVal, setInitialVal] = useState<number>(0);

    useEffect(() => {
      onSelectValue(options[0]);
    }, []);

    const handleSlideChange = (swiper: any) => {
      onSelectValue(options[swiper.activeIndex]);
      setInitialVal(swiper.activeIndex);
    }

    const handleSlideSelect = (option: number) => {
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