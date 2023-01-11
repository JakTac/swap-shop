import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/504742864/photo/stylish-business-clothing-for-businessman.jpg?s=612x612&w=0&k=20&c=AsGrhEMNkmpwqaJPBSACPthMuBsmsDIecRkdFXKSnl0="
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Mens Clothing</h3>
          &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-light">
          <NavLink
            style={{ color: "black" }}
            className="nav-link"
            aria-current="page"
            to="..."
          >
            Shop
          </NavLink>
        </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Womens Clothing</h3>
          &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-light">
          <NavLink
            style={{ color: "black" }}
            className="nav-link"
            aria-current="page"
            to="..."
          >
            Shop
          </NavLink>
        </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Jewelry</h3>
          &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-light">
          <NavLink
            style={{ color: "black" }}
            className="nav-link"
            aria-current="page"
            to="..."
          >
            Shop
          </NavLink>
        </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://www.fcgov.com/recycling-item-images/img/electronics.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Electronics</h3>
          &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-light">
          <NavLink
            style={{ color: "black" }}
            className="nav-link"
            aria-current="page"
            to="..."
          >
            Shop
          </NavLink>
        </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
// import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Cards from "./Cards";

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <Cards />
//         <Carousel.Caption>
//           <h3>First Slide Label</h3>
//           <p>Hi im a slide</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Cards />
//         <Carousel.Caption>
//           <h3>2nd Slide Label</h3>
//           <p>Hi im a slide</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Cards />
//         <Carousel.Caption>
//           <h3>third Slide Label</h3>
//           <p>Hi im a slide</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Cards />
//         <Carousel.Caption>
//           <h3>4th Slide Label</h3>
//           <p>Hi im a slide</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ControlledCarousel;
