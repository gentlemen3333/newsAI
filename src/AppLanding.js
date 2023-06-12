// import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import App from "./App";
import Login from "./pages/Login";

import React, { useEffect } from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRoute from "./components/UserRoute";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/action";
// import AppLanding from "./AppLanding";
import About from "./pages/About";
import Contact from "./pages/Contact";
//Pages

import HomeLanding from "./pages/HomeLanding";
// import SignUp from "./pages/SignupPage";
// import Pricing from "./pages/PricingPage";
import Footer from "./components/Footer/Footer";

function AppLanding() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<UserRoute />}>
          <Route exact path="/home" element={<Home />} />
        </Route>

        <Route exact path="/register" element={<Register />} />
        {/* <Route path="/contact" element={<Pricing />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppLanding;
