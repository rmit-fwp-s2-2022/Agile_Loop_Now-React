import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Forum from "./pages/Forum";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import { getCurrentUser, setCurrentUser, logout } from "./data/User";
import Errorpage from "./pages/Errorpage";

function App() {
  const [user] = useState(getCurrentUser());
  const [isLoggedIn, setLoggedIn ] = useState(false);

  const loginUser = (email) => {
    setCurrentUser(email);
    setLoggedIn(true);
  }

  const logoutUser = () => {
    logout();
    setLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <Header user={user} logout={logoutUser} />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login loginUser={loginUser} />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="forum" element={<Forum user={user} isLoggedIn={isLoggedIn}/>} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
