import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Cars from './pages/Cars';
import Team from './pages/Team';
import Achievments from './pages/Achievments';
import Sponsars from './pages/Sponsars';
import Competitions from './pages/Competitions';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import './App.css'; // Assuming you have some global styles




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cars" element={<Cars />} /> */}
          <Route path="/team" element={<Team />} />
          <Route path="/achievements" element={<Achievments />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sponsors" element={<Sponsars />} />
          <Route path="/competitions" element={<Competitions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;