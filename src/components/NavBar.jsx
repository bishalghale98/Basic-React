import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo/Brand */}
        <NavLink
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse group"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-800 dark:text-white transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <span className="text-blue-600 dark:text-blue-400">Bishal</span>{" "}
            Store
          </span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md md:p-0 transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 md:bg-transparent md:text-blue-600 md:dark:text-blue-400 md:border-b-2 md:border-blue-600 dark:bg-gray-700 md:dark:bg-transparent"
                      : "text-gray-900 hover:text-blue-700 md:hover:text-blue-600 dark:text-white dark:hover:text-blue-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  }`
                }
                aria-current="page"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md md:p-0 transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 md:bg-transparent md:text-blue-600 md:dark:text-blue-400 md:border-b-2 md:border-blue-600 dark:bg-gray-700 md:dark:bg-transparent"
                      : "text-gray-900 hover:text-blue-700 md:hover:text-blue-600 dark:text-white dark:hover:text-blue-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-books"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md md:p-0 transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 md:bg-transparent md:text-blue-600 md:dark:text-blue-400 md:border-b-2 md:border-blue-600 dark:bg-gray-700 md:dark:bg-transparent"
                      : "text-gray-900 hover:text-blue-700 md:hover:text-blue-600 dark:text-white dark:hover:text-blue-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-books"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md md:p-0 transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 md:bg-transparent md:text-blue-600 md:dark:text-blue-400 md:border-b-2 md:border-blue-600 dark:bg-gray-700 md:dark:bg-transparent"
                      : "text-gray-900 hover:text-blue-700 md:hover:text-blue-600 dark:text-white dark:hover:text-blue-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Add Book
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
