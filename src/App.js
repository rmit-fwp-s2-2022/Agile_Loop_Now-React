import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";


function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
