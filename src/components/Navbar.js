// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Coding Quiz App
      </Link>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/quizzes" className="mr-4">
          Quizzes
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
