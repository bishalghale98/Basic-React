import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const [threeBooks, setThreeBooks] = useState([]);

  const fetchThreeBooks = async () => {
    const result = await axios.get("http://127.0.0.1:3000/book");
    const limitedBooks = result.data.data.slice(0, 3);
    if (result?.data) {
      setThreeBooks(limitedBooks);
    }
  };

  useEffect(() => {
    fetchThreeBooks();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
          {/* Hero Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
              Welcome to Our Library
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover your next favorite book from our curated collection
            </p>
          </div>

          {/* Featured Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <svg
                className="w-8 h-8 text-indigo-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Featured Books
            </h2>

            {threeBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {threeBooks.length > 0 &&
                  threeBooks.map((book) => {
                    return <Card book={book} key={book._id} />;
                  })}
              </div>
            ) : (
              <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Additional Content */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-8 rounded-2xl shadow-md flex-1">
              <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">
                Weekly Recommendations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our team picks the best new releases every week just for you.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                View List
              </button>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-2xl shadow-md flex-1">
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Connect with other book lovers and share your reading
                experiences.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
