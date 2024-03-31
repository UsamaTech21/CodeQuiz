// src/components/QuizPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import QuizCatalog from './QuizCatalog';

const QuizPage = () => {
  return (
    <div className="container mx-auto p-4">
      <QuizCatalog />
    </div>
  );
};

export default QuizPage;
