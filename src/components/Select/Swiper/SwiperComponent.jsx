import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import SwiperCard from './SwiperCard';
import SwiperSelect from './SwiperSelect';

const SwiperComponent = (props) => {

    const [value, setValue] = useState();
    const [open, setOpen] = useState(false);
    const [initialVal, setInitialVal] = useState(0);

    useEffect(() => {
      setValue(props.options[0]) // This will log the updated value
    }, []);

    const handleSlideChange = (swiper) => {
      setValue(props.options[swiper.activeIndex])
      setInitialVal(swiper.activeIndex);
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
      { open ? <SwiperCard value={value} handleTrigger={handleOpenSelect}/> : <SwiperSelect props={props}  initialVal={initialVal} handleSlideChange={handleSlideChange} handleSlideSelect={handleSlideSelect} handleOpenSelect={handleOpenSelect}/> }
      </>
    );
  }

export default SwiperComponent;