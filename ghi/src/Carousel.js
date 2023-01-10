import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* INSERT API HERE? */}
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Hi im a slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* INSERT API HERE? */}
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Hi im a slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* INSERT API HERE? */}
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="Third Slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Hi im a slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* INSERT API HERE? */}
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="fourth Slide"
        />
        <Carousel.Caption>
          <h3>fourth Slide Label</h3>
          <p>Hi im a slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
