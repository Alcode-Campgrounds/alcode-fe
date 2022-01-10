import About from './views/about/About';
import CampList from './views/camplist/CampList';
import Contact from './views/contact/Contact';
import Home from './views/home/Home';
import SignIn from './views/login/SignIn';
import SignUp from './views/login/SignUp';
import Profile from './views/profile/Profile';
import CampFinder from './views/search/CampFinder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import './App.css'



export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<CampFinder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/campgrounds" element={<CampList />} />
      </Routes>
    </Router>

  </>
  )
}
