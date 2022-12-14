import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Forum from "./pages/Forum";
import Authentication from "./pages/Authentication";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import { getCurrentUser, setCurrentUser, logout } from "./data/User";
import Errorpage from "./pages/Errorpage";

function App() {
  const [user, setUser] = useState(getCurrentUser());
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userAuthenticate, setAuthenticate] = useState();

  const verifyUser = (userInfo) => {
    setAuthenticate(userInfo);
  };

  const loginUser = (email) => {
    setCurrentUser(email);
    setUser(getCurrentUser());
    setLoggedIn(true);
  };

  const logoutUser = () => {
    console.log(user);
    logout();
    setUser(null);
    setLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <Header user={user} logout={logoutUser} />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="login"
            element={<Login loginUser={loginUser} verifyUser={verifyUser} />}
          />
          <Route path="signup" element={<SignUp loginUser={loginUser}/>} />
          <Route path="profile" element={<Profile logout={logoutUser} />} />
          <Route
            path="forum"
            element={<Forum user={user} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="authenticate"
            element={
              <Authentication user={userAuthenticate} loginUser={loginUser} />
            }
          />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
