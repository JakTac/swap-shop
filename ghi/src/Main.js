import ControlledCarousel from "./Carousel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

// function MainPage() {
//   return <ControlledCarousel />;
//   // return <Newsletter />
// }

// export default MainPage;

const MainPage = () => {
  return (
    <div>
      <ControlledCarousel />
      <Newsletter />
      <Footer />
    </div>
  )
}
export default MainPage;
