import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Cards from "./Cards";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Cards />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Hi im a slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
        <Carousel.Caption>
          <h3>2nd Slide Label</h3>
          <p>Hi im a slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
        <Carousel.Caption>
          <h3>third Slide Label</h3>
          <p>Hi im a slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
        <Carousel.Caption>
          <h3>4th Slide Label</h3>
          <p>Hi im a slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
