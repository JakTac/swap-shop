import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./Main";
import { AuthProvider, useToken } from "./Accounts/Token";
import LoginComponent from "./Accounts/Login";
import Signup from "./Accounts/Signup";
import CreateListing from "./Listings/CreateListing";
import Jewelry from "./Listings/JewelryCategory";
import Nav from "./Nav";
import "./App.css";

function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null;
}

function App() {
  const [token, login, logout, signup, update] = useToken();

  return (
    <AuthProvider>
      <GetToken />
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login/" element={<LoginComponent login={login} token={token} />} />
          <Route path="/signup/" element={<Signup signup={signup} />} />
          <Route path="/createlisting/" element={<CreateListing />} />
          <Route path="/jewelry/" element={<Jewelry />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
export default App;
