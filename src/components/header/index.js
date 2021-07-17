import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Banner from '../../assets/images/Banner.png';
import Banner2 from '../../assets/images/Banner2.jpg';


export default class header extends React.Component {
  render() {
    return (
      <Splide>
        <SplideSlide>
          <img src={Banner} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={Banner2} alt="Image 2" />
        </SplideSlide>
      </Splide>
    );
  }
}
