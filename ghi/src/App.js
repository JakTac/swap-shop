import { Routes, Route } from "react-router-dom";
import React, {useState, useEffect } from "react";
import MainPage from "./Main";
import { AuthProvider, useToken } from "./Accounts/Token";
import LoginComponent from "./Accounts/Login";
import Signup from "./Accounts/Signup";
import CreateListing from "./Listings/CreateListing";
import Nav from "./Nav";
import "./App.css";

function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null;
}

function App() {
  const {token, login, logout, signup} = useToken();
  const [test, setTest] = useState(false)
  if (token) {
    setTest(true)
  }

  return (
    <AuthProvider>
      <GetToken />
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login/" element={<LoginComponent login={login} />} />
          <Route path="/signup/" element={<Signup signup={signup} />} />
          <Route path="/createlisting/" element={<CreateListing />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
export default App;
