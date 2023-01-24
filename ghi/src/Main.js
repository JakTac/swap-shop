import Carouselslides from "./Carousel";
import CreatedBy from "./Components/CreatedBy";
import Cards from "./MainPage/Cards";
import Cards2 from "./MainPage/Cards2";
import "./App.css";

const MainPage = () => {
  return (
    <div>
      <Carouselslides />
      <Cards />
      <Cards2 />
      <CreatedBy />
    </div>
  );
};
export default MainPage;
