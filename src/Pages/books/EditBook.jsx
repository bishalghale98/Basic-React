import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [bookData, setBookData] = useState({
    authorName: "",
    bookName: "",
    bookPrice: "",
    isbnNumber: "",
    publication: "",
    publishedAt: "",
    image: null,
    imagePath: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchBook = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://127.0.0.1:3000/book/${id}`);

      if (!response?.data?.data) {
        throw new Error("Book not found");
      }

      const { publishedAt, ...rest } = response.data.data;
      setBookData({
        ...rest,
        publishedAt: publishedAt || "",
        imagePath: response.data.data.imagePath || "",
      });
    } catch (err) {
      setError(err.message || "Failed to fetch book");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      setBookData({
        ...bookData,
        image: e.target.files[0],
        imagePath: "", // Clear existing path when new image is selected
      });
    }
  };

  const handleRemoveImage = () => {
    setBookData({ ...bookData, image: null, imagePath: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Append all fields except imagePath
      Object.entries(bookData).forEach(([key, value]) => {
        if (key === "imagePath") return;
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });

      const response = await axios.patch(
        `http://127.0.0.1:3000/book/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        navigate(`/all-books/${id}`, {
          state: { success: "Book updated successfully!" },
        });
      } else {
        throw new Error(response.data.message || "Failed to update book");
      }
    } catch (err) {
      setError(err.message || "Error updating book");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-red-500 mb-4">Error</h2>
          <p className="mb-4 dark:text-gray-300">{error}</p>
          <button
            onClick={() => navigate("/books")}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Back to Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Edit Book
            </h2>
            <button
              type="button"
              onClick={handleGoBack}
              className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </button>
          </div>

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
                minLength={2}
                value={bookData.authorName}
                onChange={handleChange}
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
                minLength={2}
                value={bookData.bookName}
                onChange={handleChange}
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
                  value={bookData.bookPrice}
                  onChange={handleChange}
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
                type="text"
                id="isbnNumber"
                name="isbnNumber"
                required
                value={bookData.isbnNumber}
                onChange={handleChange}
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
                minLength={2}
                value={bookData.publication}
                onChange={handleChange}
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
                max={new Date().toISOString().split("T")[0]} // Can't be in the future
                value={bookData.publishedAt}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Book Cover Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-md cursor-pointer">
                  {bookData.imagePath || bookData.image ? (
                    <div className="p-4 flex flex-col items-center">
                      <div className="relative w-full max-w-xs h-48 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                        <img
                          src={
                            bookData.image
                              ? URL.createObjectURL(bookData.image)
                              : bookData.imagePath
                          }
                          alt="Book cover preview"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {bookData.image?.name || "Current image"}
                      </p>
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="mt-2 text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
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
                        Click to upload an image
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF up to 2MB
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="md:col-span-2 flex justify-between gap-4 pt-4">
              <button
                type="button"
                onClick={handleGoBack}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </span>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
