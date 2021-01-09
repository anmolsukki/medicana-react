import React from 'react';

export default function Slider() {
  return (
    <div id="hero">
      <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
        <div className="item" style={{ backgroundImage: 'url(/assets/images/slider1.jpg)' }}></div>
        <div className="item" style={{ backgroundImage: 'url(/assets/images/slider2.jpg)' }}></div>
        <div className="item" style={{ backgroundImage: 'url(/assets/images/slider3.jpg)' }}></div>
      </div>
    </div>
  );
}
