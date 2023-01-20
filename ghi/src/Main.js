// import ControlledCarousel from "./Carousel";
import Carouselslides from "./Carousel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import "./App.css";

// function MainPage() {
//   return <ControlledCarousel />;
//   // return <Newsletter />
// }

// export default MainPage;

const MainPage = () => {
  return (
    <div>
      <Carouselslides />
      <Newsletter />
    </div>
  );
};
export default MainPage;
