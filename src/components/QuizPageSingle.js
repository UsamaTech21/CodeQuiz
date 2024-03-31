// src/components/QuizPageSingle.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import questions from '../questions';

const QuizPageSingle = () => {
  const { quizIndex } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(quizIndex ? parseInt(quizIndex, 10) : 0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let countdown;
    if (!showResults && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timer, showResults]);

  const handleAnswer = (selectedOption) => {
    clearInterval(timer);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    clearInterval(timer);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(30);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const correctAnswers = questions.filter((question, index) => question.correctAnswer === userAnswers[index]);
    const score = (correctAnswers.length / questions.length) * 100;
    return score;
  };

  const showResultsPage = () => {
    clearInterval(timer);
    setShowResults(true);
  };

  const retryQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questions.length).fill(''));
    setTimer(30);
    setShowResults(false);
  };

  const getCertificateMessage = () => {
    const score = calculateScore();
    return score > 80 ? (
      <p>Congratulations! You did a great job! Get your certificate by contacting us at techrehnuma@gmail.com.</p>
    ) : (
      <p>Keep practicing to improve your score!</p>
    );
  };

  const getScoreMessage = () => {
    const score = calculateScore();
    return score < 40 ? (
      <p>You need to work harder and be more serious about your preparation.</p>
    ) : (
      <p>Great effort! Keep it up!</p>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        {showResults ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
            <ul className="list-disc pl-6">
              {questions.map((question, index) => (
                <li
                  key={index}
                  className={`mb-2 ${
                    userAnswers[index] === question.correctAnswer
                      ? 'bg-green-200'
                      : userAnswers[index]
                      ? 'bg-red-200'
                      : 'bg-gray-200'
                  }`}
                >
                  {question.question}
                </li>
              ))}
            </ul>
            <p>Your Score: {calculateScore()}%</p>
            {calculateScore() > 80 && getCertificateMessage()}
            {getScoreMessage()}
            <button onClick={retryQuiz} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Retry Quiz
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-4">JavaScript Quiz</h1>
            <div className="bg-gray-200 p-4 rounded-md mb-4">
              <p style={{ fontSize: '1.25rem' }}>{questions[currentQuestionIndex]?.question}</p>
            </div>
            <ul className="list-disc pl-6">
              {questions[currentQuestionIndex]?.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`cursor-pointer mb-2 ${
                    userAnswers[currentQuestionIndex] === option
                      ? 'bg-blue-200'
                      : timer === 0
                      ? 'bg-red-200'
                      : 'hover:bg-gray-300'
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              {timer > 0 && (
                <p className="text-gray-600">Time remaining: {timer} seconds</p>
              )}
              <button onClick={handleNextQuestion} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPageSingle;
