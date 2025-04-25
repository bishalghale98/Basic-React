import axios from "axios";
import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const SingleBooks = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [book, setBook] = useState({});

  const fetchBook = async () => {
    const response = await axios.get(
      `https://learning-mern2-0.onrender.com/book/${id}`
    );
    if (response?.data) {
      setBook(response.data.data);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const {
    authorName,
    bookName,
    bookPrice,
    imagePath,
    isbnNumber,
    publication,
    publishedAt,
  } = book;

  //delete
  const deleteBook = async () => {
    const response = await axios.delete(
      `https://learning-mern2-0.onrender.com/book/${id}`
    );
    if (response.status === 200) {
      alert("Book Delete Successfully");
      navigate(-1);
    } else {
      alert("Error");
    }
  };

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={handleBack}
              className="inline-block mb-4 ml-4 mt-4 px-4 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-800 dark:text-white font-medium rounded-lg transition-colors duration-300"
            >
              ← Back
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Book Cover Image */}
              <div className="flex items-center justify-center p-6 sm:p-8 bg-gray-50 dark:bg-gray-700">
                <img
                  src={imagePath}
                  alt={bookName}
                  className="w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Book Details */}
              <div className="p-6 sm:p-8 md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {publication}
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                      {bookName}
                    </h1>
                    <h2 className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                      by{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        {authorName}
                      </span>
                    </h2>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={deleteBook}
                      className="w-full sm:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium rounded-lg transition duration-300 text-sm"
                    >
                      Delete Book
                    </button>
                    <Link
                      to={`/edit-book/${id}`}
                      className="w-full sm:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium rounded-lg transition duration-300 text-sm text-center"
                    >
                      Edit Book
                    </Link>
                  </div>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      ISBN
                    </h3>
                    <p className="text-gray-900 dark:text-white">
                      {isbnNumber}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Published
                    </h3>
                    <p className="text-gray-900 dark:text-white">
                      {publishedAt}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Publisher
                    </h3>
                    <p className="text-gray-900 dark:text-white">
                      {publication}
                    </p>
                  </div>
                </div>

                {/* Price & Buttons */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      Rs. {bookPrice}
                    </span>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300">
                        Add to Cart
                      </button>
                      <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
                        Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                No matter your goals, Atomic Habits offers a proven framework
                for improving—every day. James Clear, one of the world's leading
                experts on habit formation, reveals practical strategies that
                will teach you exactly how to form good habits, break bad ones,
                and master the tiny behaviors that lead to remarkable results.
                If you're having trouble changing your habits, the problem isn't
                you. The problem is your system...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBooks;
