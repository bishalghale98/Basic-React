import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  const {
    authorName,
    bookName,
    bookPrice,
    imagePath,
    isbnNumber,
    publication,
    publishedAt,
  } = book;
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        {/* Author/Publisher Section */}
        <div className="flex justify-between items-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 p-6 border-b border-gray-100 dark:border-gray-600">
          <div>
            <span className="text-gray-500 dark:text-gray-300 text-sm font-medium uppercase tracking-wider block">
              Author
            </span>
            <h5 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-1">
              {authorName}
            </h5>
          </div>
          <div className="text-right">
            <span className="text-gray-500 dark:text-gray-300 text-sm font-medium uppercase tracking-wider block">
              Published by
            </span>
            <h5 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-1">
              {publication}
            </h5>
          </div>
        </div>

        {/* Book Cover */}
        <Link to={`./${book._id}`} className="block group">
          <img
            className="w-full h-64 object-contain p-6 transition-transform duration-300 group-hover:scale-105"
            src={
              imagePath
                ? imagePath
                : "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
            }
            alt="Book Cover"
          />
        </Link>

        {/* Book Details */}
        <div className="px-6 pb-6">
          <div className="mb-4">
            <Link to={`./${book._id}`}>
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {bookName}
              </h5>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <div>
              {/* <span className="text-gray-500 dark:text-gray-400 text-sm line-through">$29.99</span> */}
              <span className="text-3xl font-bold text-gray-900 dark:text-white ml-2">
                Rs. {bookPrice}
              </span>
            </div>
            <Link
              to={`./${book._id}`}
              className="text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Read Sample
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
