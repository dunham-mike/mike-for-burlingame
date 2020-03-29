import React from 'react';
import { Fade } from 'react-slideshow-image';

import Image1 from '../images/1-library.jpg';
import Image2 from '../images/2-group.jpg';
import Image3 from '../images/3-twins.jpg';
import Image4 from '../images/4-c.jpg';
import Image5 from '../images/5-e.jpg';
import Image6 from '../images/6-v.jpg';

import styled from 'styled-components';

const EachSlide = styled.div`
  object-fit: cover;
  height: 80vh;
`

const properties = {
  duration: 4000,
  transitionDuration: 750,
  infinite: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...properties}>
          <EachSlide className="each-slide">
            <img src={Image1} style={{width: '100%'}} />
          </EachSlide>
          <EachSlide className="each-slide">
            <img src={Image2} style={{width: '100%'}} />
          </EachSlide>
          <EachSlide className="each-slide">
            <img src={Image3} style={{width: '100%'}} />
          </EachSlide>
          <EachSlide className="each-slide">
            <img src={Image4} style={{width: '100%'}} />
          </EachSlide>
          <EachSlide className="each-slide">
            <img src={Image5} style={{width: '100%'}} />
          </EachSlide>
          <EachSlide className="each-slide">
            <img src={Image6} style={{width: '100%'}} />
          </EachSlide>
        </Fade>
      </div>
    )
}

export default Slideshow;