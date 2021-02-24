import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
ß
export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="/foto1.png" />
      <p className="legend">Legend 1</p>
    </div>    
    <div>
      <img alt="" src="/foto1.png" />
      <p className="legend">Legend 1</p>
    </div>    
    <div>
      <img alt="" src="/foto1.png" />
      <p className="legend">Legend 1</p>
    </div>ß
  </Carousel>
);
