import React from 'react'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import even1 from './images2/even1.jpg';
import even2 from './images2/even2.jpg';
import even3 from './images2/even3.jpg';
import even4 from './images2/even4.jpg';
import even5 from './images2/even5.jpg';
import even6 from './images2/even6.jpg';
import even7 from './images2/even7.jpg';
import even8 from './images2/even8.jpg';

const slideImages = [
    'images2/even1.jpg',
    'images2/even2.jpg',
    'images2/even3.jpg',
    'images2/even4.jpg',
    'images2/even5.jpg',
    'images2/even6.jpg',
    'images2/even7.jpg',
    'images2/even8.jpg',
   
  ];
  
  const Slide4 = ()=> {
      return (
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <img src={even1 } alt="img1" />
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={even2 } alt="img2" />
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={even3 } alt="img3" />
              </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <img src={even4 } alt="img1" />
            </div>
          </div>
          <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <img src={even5 } alt="img1" />
          </div>
        </div>
        <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          <img src={even6 } alt="img1" />
        </div>
      </div>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
        <img src={even7 } alt="img1" />
      </div>
    </div>
    <div className="each-slide">
    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
      <img src={even8 } alt="img1" />
    </div>
  </div>
 
</Slide>
 </div>
      );
  }

export default Slide4;
