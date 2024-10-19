import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/signup';
import Login from './components/login'; // Import Login component

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> {/* Define the login route */}
        </Routes>
      </div>
    </>
  );
}

export default App;
