import Carouselslides from "./Carousel";
import Newsletter from "./Components/Newsletter";
import Cards from "./MainPage/Cards";
import "./App.css";


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
