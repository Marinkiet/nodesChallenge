import React ,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Dashboard from "./pages/Dashboard"; 
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import StickyWall from "./pages/StickyWall";
// import TodayPage from "./pages/Today";
// import ProtectedRoute from "./components/ProtectedRoute";

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token'); // Get token from local storage
  return token ? children : <Navigate to="/" />; // If no token, redirect to signin
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />        
        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard /> {/* Dashboard is only accessible if logged in */}
            </PrivateRoute>
          }
        />
          <Route
          path="/stickywall"
          element={
            <PrivateRoute>
              <StickyWall /> {/* Stickywall is only accessible if logged in */}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    // <Router>
    //   <div>
    //     {/* <nav>
    //       <ul>
    //         <li><Link to="/">Signin</Link></li>
    //         <li><Link to="/signup">Signup</Link></li>
    //         <li><Link to="/dashboard">Dashboard</Link></li>
    //       </ul>
    //     </nav> */}

    //     <Routes>
    //       <Route path="/" element={<Signin />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    //       <Route path="/stickywall" element={<StickyWall />} />
    //       <Route path="/today" element={<TodayPage />} />
    //     </Routes>
    //   </div>
    // </Router>
  )
}

export default App;
