import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Login from './components/login'; // Import Login component
import { Toaster } from "react-hot-toast";
import AuthProvider from './context/AuthProvider'; // Import AuthProvider


function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> {/* Define the login route */}
        </Routes>
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
