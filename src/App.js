import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Header />} />
        {/* <Route path="login" element={<Login/>}/> */}
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
