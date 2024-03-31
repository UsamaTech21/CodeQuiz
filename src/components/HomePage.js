// src/components/HomePage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QuizCatalog from './QuizCatalog';
import techRehnumaImage from '../images/techRehnuma.jpeg'; // replace with the actual path

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const quizzes = [
    // Add your quiz data here
  ];

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);

    // Filter quizzes based on title
    const filteredQuizzes = quizzes.filter((quiz) => quiz.title.toLowerCase().includes(searchText.toLowerCase()));
    setSearchResults(filteredQuizzes);
  };

  const handleSearchButtonClick = () => {
    // Redirect to search results only if there are matching quizzes
    if (searchResults.length > 0) {
      // Redirect to quizzes page with search query
      navigate(`/quizzes?search=${searchTerm}`);
    }
  };

  return (
    <>
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${techRehnumaImage})`, height: '400px' }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-85 p-8 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-500">Welcome to QuizApp</h1>
          <p className="text-lg mb-8">
            This is the best platform for students to enhance their knowledge. Take quizzes and test your skills. We provide
            certificates to intelligent students who complete the quizzes successfully. Job opportunities are also available
            for top performers!
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">Search Quizzes</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={handleSearch}
                className="p-2 border rounded-l-md w-full text-black"
              />
              <button
                onClick={handleSearchButtonClick}
                className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Quizzes</h2>
          {searchResults.length > 0 ? (
            <QuizCatalog quizzes={searchResults} />
          ) : (
            <QuizCatalog />
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <div className="text-lg mb-8">
            <div>
              QuizApp is a platform designed to help students improve their knowledge and skills. Our quizzes cover a wide
              range of topics, providing an engaging and interactive learning experience.
            </div>
            <div className="mt-2">
              We believe in recognizing and rewarding intelligence. Upon successful completion of quizzes, students can earn
              certificates. Moreover, top performers may even find exciting job opportunities.
            </div>
            <div className="mt-2">
              QuizApp is founded by Usama, the creator of the TechRehnuma YouTube channel. For any inquiries or support,
              please refer to our{' '}
              <Link to="/policy" className="text-blue-500 hover:underline">
                Policy
              </Link>{' '}
              <br />
              <br /><hr />
              page. You can also reach out to us at <p className=' font-bold'>Techrehnuma@gmai.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
