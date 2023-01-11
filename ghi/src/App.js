import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import MainPage from "./Main";
import { Login } from "./Accounts/Login";
import { Signup } from "./Accounts/Signup";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
