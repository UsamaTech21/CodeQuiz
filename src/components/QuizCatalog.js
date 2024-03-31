// src/components/QuizCatalog.js
import React from 'react';
import { Link } from 'react-router-dom';
import questions from '../questions';
import javaQuestions from '../javaQuestions'; 
import htmlQuestions from '../htmlQuestions'; 
import cssQuestions from '../cssQuestions'; 

import javascriptImage from '../images/javascript.jpg';
import javaImage from '../images/java.jpeg';
import htmlImage from '../images/html.jpeg';
import cssImage from '../images/CSS.jpeg';

const quizList = [
  {
    title: 'JavaScript Bigger Quiz',
    imageSrc: javascriptImage,
    path: '/quizzes/start/javascript',
  },
  {
    title: 'Basic Java Quiz',
    imageSrc: javaImage,
    path: '/quizzes/start/basic-java',
  },
  {
    title: 'HTML Quiz',
    imageSrc: htmlImage,
    path: '/quizzes/start/html',
  },
  {
    title: 'CSS Quiz',
    imageSrc: cssImage,
    path: '/quizzes/start/css',
  },
];

const QuizCatalog = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {quizList.map((quiz, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">{quiz.title}</h3>
            <img src={quiz.imageSrc} alt={quiz.title} className="mb-2 w-full h-40 object-cover" />
            <Link to={quiz.path}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                Start Quiz
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCatalog;
