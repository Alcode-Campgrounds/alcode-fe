import About from "./views/about/About";
import CampMap from "./views/campmap/CampMap";
import Home from "./views/home/Home";
import SignUp from "./views/login/SignUp";
import Profile from "./views/profile/Profile";
import CampFinder from "./views/search/CampFinder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import ProtectedRoutes from "./components/PrivateRoute/ProtectedRoutes";

import "./styles/style.css";

import CampDetail from "./views/campdetail/CampDetail";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignUp hasUser />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<CampFinder />} />
          </Route>
          <Route path="/campmap/:state" element={<CampMap />} />
          <Route path="/camps/:id" element={<CampDetail />} />
        </Routes>
      </Router>
    </>
  );
}
