import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { carouselItems } from "./CarouselItems";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 50vw;
`;

const DescContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 300px;
  padding-bottom: 100px;
  margin-left: 50px;
`;

const Title = styled.h1`
  font-size: 80px;
`;

const Body = styled.p`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 20px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Carouselslides = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {carouselItems?.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <DescContainer>
              <Title>{item.title}</Title>
              <Body>{item.body}</Body>
              <Button>
                <NavLink
                  style={{ color: "black" }}
                  className="nav-link"
                  aria-current="page"
                  to={item.to}
                >
                  SHOP NOW!
                </NavLink>
              </Button>
            </DescContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Carouselslides;

// import React from "react";
// import { Carousel } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import "./Styling.css"

// const CarouselContainer = () => {
//   return (
//     <Carousel fade={true} pause={false}>
//       <Carousel.Item interval={3000}>
//         <img
//           className="d-block w-100"
//           src="https://img.freepik.com/premium-photo/men-clothes-concept-vintage-style-flat-lay-light-grey-background-included-wingtips-dress-shoes-hand-watch-pen-necktie-jeans-sunglasses-stylish-men-top-view_34048-1555.jpg?w=2000"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//         <div style={{ color: "black" }}>
//           <h3>Mens Clothing</h3>
//         </div>
//           &nbsp;&nbsp;&nbsp;
//           <button type="button" className="btn btn-light">
//             <NavLink
//               style={{ color: "black" }}
//               className="nav-link"
//               aria-current="page"
//               to="..."
//             >
//               Shop
//             </NavLink>
//           </button>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={3000}>
//         <img
//           className="d-block w-100"
//           src="https://img.freepik.com/premium-photo/women-s-aesthetic-minimal-fashion-pastel-clothes-made-washed-linen-stylish-female-blouses-dresses-pants-shirts-hanger-white-background-fashion-blog-website-social-media_408798-9303.jpg?w=1480"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//         <div style={{ color: "black" }}>
//           <h3>Womens Clothing</h3>
//         </div>
//           &nbsp;&nbsp;&nbsp;
//           <button type="button" className="btn btn-light">
//             <NavLink
//               style={{ color: "black" }}
//               className="nav-link"
//               aria-current="page"
//               to="..."
//             >
//               Shop
//             </NavLink>
//           </button>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={3000}>
//         <img
//           className="d-block w-100"
//           src="https://www.jeansandateacup.com/wp-content/uploads/2018/09/Minimalist-Jewelry-on-Vintage-Tray-800x533.jpg"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//         <div style={{ color: "black" }}>
//           <h3>Jewelry</h3>
//           </div>
//           &nbsp;&nbsp;&nbsp;
//           <button type="button" className="btn btn-light">
//             <NavLink
//               style={{ color: "black" }}
//               className="nav-link"
//               aria-current="page"
//               to="/jewelry/"
//             >
//               Shop
//             </NavLink>
//           </button>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default CarouselContainer;
