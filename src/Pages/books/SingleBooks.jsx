import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBooks = () => {
  const { id } = useParams();

  const [book, setBook] = useState({});

  const fetchBook = async (params) => {
    const response = await axios.get(`http://127.0.0.1:3000/book/${id}`);
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

  console.log(book);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Book Cover Image */}
              <div className="md:col-span-1 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-700">
                <img
                  src={imagePath}
                  alt="Atomic Habits"
                  className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Book Details */}
              <div className="md:col-span-2 p-8">
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {publication}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {bookName}
                  </h1>
                  <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                    by{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      {authorName}
                    </span>
                  </h2>
                </div>

                {/* Book Metadata */}
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
                  {/* <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Format
                    </h3>
                    <p className="text-gray-900 dark:text-white">Hardcover</p>
                  </div> */}
                </div>

                {/* Price and Action Buttons */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        Rs. {bookPrice}
                      </span>
                      {/* <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">
                        $18.99
                      </span>
                      <span className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">
                        21% off
                      </span> */}
                    </div>
                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        Add to Cart
                      </button>
                      <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                        Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Description */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                No matter your goals, Atomic Habits offers a proven framework
                for improving—every day. James Clear, one of the world's leading
                experts on habit formation, reveals practical strategies that
                will teach you exactly how to form good habits, break bad ones,
                and master the tiny behaviors that lead to remarkable results.
                If you're having trouble changing your habits, the problem isn't
                you. The problem is your system. Bad habits repeat themselves
                again and again not because you don't want to change, but
                because you have the wrong system for change. You do not rise to
                the level of your goals. You fall to the level of your systems.
                Here, you'll get a proven system that can take you to new
                heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBooks;
