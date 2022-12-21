import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/contact" exact element={<ContactUs />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route
          path="/"
          exact
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
