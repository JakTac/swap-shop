// import ControlledCarousel from "./Carousel";
import Carouselslides from "./Carousel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import Cards from "./MainPage/Cards";
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
      <Cards />
      <Newsletter />
    </div>
  );
};
export default MainPage;
