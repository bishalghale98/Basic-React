import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("https://learning-mern2-0.onrender.com/book");
    if (response?.data) {
      setBooks(response.data.data);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
          {/* Page Header */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-3">
                All Books Collection
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                Browse our complete library of books. Filter by genre, author,
                or popularity.
              </p>
            </div>

            <Link
              to={"/add-books"}
              className="whitespace-nowrap bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Books
            </Link>
          </div>

          {/* Filter Controls - Responsive Row */}
          {/* <div className="flex flex-col sm:flex-row gap-4 mb-8 items-stretch">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <select className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600">
                <option>All Genres</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Science Fiction</option>
              </select>
              <select className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600">
                <option>Sort By</option>
                <option>Newest</option>
                <option>Popular</option>
                <option>Rating</option>
              </select>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                Apply Filters
              </button>
            </div>
          </div> */}

          {/* Books Grid - Responsive Columns */}
          {books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <Card book={book} key={book._id} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          )}

          {/* Pagination - Centered on mobile, right-aligned on larger screens */}
          {/* <div className="mt-12 flex justify-center md:justify-end">
            <nav className="flex items-center gap-2">
              <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                Previous
              </button>
              <button className="px-3 py-1 rounded bg-indigo-600 text-white">
                1
              </button>
              <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                2
              </button>
              <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                3
              </button>
              <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                Next
              </button>
            </nav>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AllBooks;
