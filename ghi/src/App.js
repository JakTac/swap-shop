import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./Main";
import { AuthProvider, useToken } from "./Accounts/Token";
import LoginComponent from "./Accounts/Login";
import Signup from "./Accounts/Signup";
import CreateListing from "./Listings/CreateListing";
import Jewelry from "./Listings/JewelryCategory";
import Mens from "./Listings/MensCategory";
import WomensPage from "./Listings/WomensPage";
import SaleHistory from "./Accounts/SaleHistory";
import ProfilePage from "./Accounts/ProfilePage";
import TermsandConditions from "./Components/TermsAndConditions";
import Nav from "./Nav";
import "./App.css";

function GetToken() {
  useToken();
  return null;
}

function App() {
  const { login, signup } = useToken();

  return (
    <AuthProvider>
      <GetToken />
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login/" element={<LoginComponent login={login} />} />
        <Route path="/signup/" element={<Signup signup={signup} />} />
        <Route path="/createlisting/" element={<CreateListing />} />
        <Route path="/jewelry/" element={<Jewelry />} />
        <Route path="/mens/" element={<Mens />} />
        <Route path="/womens/" element={<WomensPage />} />
        <Route path="/salehistory" element={<SaleHistory />} />
        <Route path="/mylistings/" element={<ProfilePage />} />
        <Route path="/termsandconditions/" element={<TermsandConditions />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;
