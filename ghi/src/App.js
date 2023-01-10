import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Main";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
