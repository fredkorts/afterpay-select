import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

function SwiperSelect(props) {

    return (
      <div className="custom-select-wrapper">
        <div class="active-selection">Current Choice!</div>
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
      </div>
    );
  }

export default SwiperSelect;