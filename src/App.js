import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from "./pages/Dashboard"; 
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import StickyWall from "./pages/StickyWall";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li><Link to="/">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stickywall" element={<StickyWall />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
