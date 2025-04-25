import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
              About Our Book Community
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the story behind our passion for literature and the team
              that makes it all possible.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="h-64 md:h-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-white"
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
              </div>

              {/* Text Content */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Founded in 2020, our book community began as a small group of
                  literature enthusiasts who wanted to create a space where
                  readers could discover hidden gems and share their passion for
                  books.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Today, we've grown into a vibrant platform with thousands of
                  members, offering curated recommendations, author spotlights,
                  and a welcoming community for book lovers worldwide.
                </p>

                {/* Add Book Button - Positioned at bottom right */}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-indigo-100 dark:bg-gray-700 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-indigo-500 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Sarah Johnson
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">
                    Founder & CEO
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Book curator with 15+ years in publishing
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-blue-100 dark:bg-gray-700 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-blue-500 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Michael Chen
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    Tech Lead
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building the future of book discovery
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-purple-100 dark:bg-gray-700 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-purple-500 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Emma Rodriguez
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-2">
                    Community Manager
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connecting readers and authors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-indigo-600 dark:bg-indigo-800 rounded-2xl p-8 md:p-12 text-center text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto">
              "To inspire a lifelong love of reading by connecting people with
              books that matter, fostering meaningful conversations, and
              building a global community of passionate readers."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
