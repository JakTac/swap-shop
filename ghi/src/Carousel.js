import React from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Styling.css"

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/men-clothes-concept-vintage-style-flat-lay-light-grey-background-included-wingtips-dress-shoes-hand-watch-pen-necktie-jeans-sunglasses-stylish-men-top-view_34048-1555.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption>
        <div style={{ color: "black" }}>
          <h3>Mens Clothing</h3>
        </div>
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
          src="https://img.freepik.com/premium-photo/women-s-aesthetic-minimal-fashion-pastel-clothes-made-washed-linen-stylish-female-blouses-dresses-pants-shirts-hanger-white-background-fashion-blog-website-social-media_408798-9303.jpg?w=1480"
          alt="Third slide"
        />
        <Carousel.Caption>
        <div style={{ color: "black" }}>
          <h3>Womens Clothing</h3>
        </div>
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
          src="https://www.jeansandateacup.com/wp-content/uploads/2018/09/Minimalist-Jewelry-on-Vintage-Tray-800x533.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <div style={{ color: "black" }}>
          <h3>Jewelry</h3>
          </div>
          &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-light">
            <NavLink
              style={{ color: "black" }}
              className="nav-link"
              aria-current="page"
              to="/jewelry/"
            >
              Shop
            </NavLink>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
