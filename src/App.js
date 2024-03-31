// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import QuizCatalog from './components/QuizCatalog';
import QuizPageSingle from './components/QuizPageSingle';
import ContactPage from './components/ContactPage';
import QuizPageJava from './components/QuizPageJava';
import QuizPageHtml from './components/QuizPageHtml'; 
import QuizPageCss from './components/QuizPageCss'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quizzes" element={<QuizCatalog />} />
        <Route path="/quizzes/start" element={<QuizPageSingle />} />
        <Route path="/quizzes/start/javascript" element={<QuizPageSingle />} />
        <Route path="/quizzes/start/basic-java" element={<QuizPageJava />} />
        <Route path="/quizzes/start/html" element={<QuizPageHtml />} />
        <Route path="/quizzes/start/css" element={<QuizPageCss />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
