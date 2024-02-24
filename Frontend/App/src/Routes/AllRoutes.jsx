
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Login from '../components/LoginPage';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Combinations from '../components/Combinations';
import Modal from '../components/Modal';

function AllRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage formSubmitted={formSubmitted} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setFormSubmitted={setFormSubmitted} />}
        />
        <Route
          path="/modal"
          element={
            isLoggedIn ? (
              <Modal />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} setFormSubmitted={setFormSubmitted} />
            )
          }
        />
        {(isLoggedIn || formSubmitted) && (
          <>
            <Route path="/categories" element={<Categories />} />
            <Route path="/combinations" element={<Combinations />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default AllRoutes;
