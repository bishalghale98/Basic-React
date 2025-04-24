import React, { useEffect } from "react";
import axios from "axios";

const AddBook = () => {
  // const newBook = async (params) => {
  //   const {
  //     authorName,
  //     bookName,
  //     bookPrice,
  //     imagePath,
  //     isbnNumber,
  //     publication,
  //     publishedAt,
  //   } = axios.post("http://127.0.0.1:3000/book");
  //   console.log(response);
  // };

  // useEffect(() => {
  //   newBook();
  // }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
          <form
            action="submit"
            method="post"
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Add New Book
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Author Name */}
              <div className="space-y-2">
                <label
                  htmlFor="authorName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  id="authorName"
                  name="authorName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter author name"
                />
              </div>

              {/* Book Name */}
              <div className="space-y-2">
                <label
                  htmlFor="bookName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Book Name
                </label>
                <input
                  type="text"
                  id="bookName"
                  name="bookName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter book name"
                />
              </div>

              {/* Book Price */}
              <div className="space-y-2">
                <label
                  htmlFor="bookPrice"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Book Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
                    Rs.
                  </span>
                  <input
                    type="number"
                    id="bookPrice"
                    name="bookPrice"
                    step="0.01"
                    min="0"
                    required
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* ISBN Number */}
              <div className="space-y-2">
                <label
                  htmlFor="isbnNumber"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  ISBN Number
                </label>
                <input
                  type="number"
                  id="isbnNumber"
                  name="isbnNumber"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter ISBN number"
                />
              </div>

              {/* Publication */}
              <div className="space-y-2">
                <label
                  htmlFor="publication"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Publication
                </label>
                <input
                  type="text"
                  id="publication"
                  name="publication"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter publication name"
                />
              </div>

              {/* Published At */}
              <div className="space-y-2">
                <label
                  htmlFor="publishedAt"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Published Date
                </label>
                <input
                  type="date"
                  id="publishedAt"
                  name="publishedAt"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Image Path */}
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="imagePath"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Book Cover Image
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-md cursor-pointer">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <p className="py-1 text-sm text-gray-600 dark:text-gray-400">
                        Upload an image
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, JPEG up to 2MB
                      </p>
                    </div>
                    <input
                      type="file"
                      id="imagePath"
                      name="imagePath"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
                >
                  Add Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
