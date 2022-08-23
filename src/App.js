import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { getCurrentUser } from "./data/User"

function App() {

  const[user] = useState(getCurrentUser());


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="profile" element={<Profile user={user}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
