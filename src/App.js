import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>App</Route>
        <Route path="/sign-in" element={<SignIn/>}>App</Route>
        <Route path="/sign-up" element={<SignUp/>}>App</Route>
        <Route path="/about" element={<About/>}>App</Route>
        <Route path="/profile" element={<Profile/>}>App</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
