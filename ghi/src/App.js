import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Main";
// import WomensPage from "./Womens";
// import SearchBar from "./SearchBar/SearchBar";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Nav />
      {/* <SearchBar /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      {/* <div className="container">
        <Routes>
          <Route path="/womenspage" element={<WomensPage />} />
        </Routes>
      </div> */}
    </BrowserRouter>
  );
}
export default App;
