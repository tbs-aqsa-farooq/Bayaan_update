import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaBars,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";
import { useCart } from "../context/usecart";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    setShowContactForm,
    setShowCart,
    counter,
    setShowFavorites,
    newCounter,
  } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(loggedInUser);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
      setUser(loggedInUser);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const timeoutRef = useRef(null);

  function handleLogout() {
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("storage"));
    setUser(null);

    setMessage("Logged out successfully");
    setShowToast(true);

    timeoutRef.current = setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  function handleSearch(e) {
    const value = e.target.value;

    navigate(`/merchStore?search=${value}`);
  }
  function handleSearchSubmit(e) {
    e.preventDefault();

    setMenuOpen(false);
  }
  return (
    <nav className="bg-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl md:text-4xl font-bold">
            BAYAAN
          </Link>

          <div className="hidden lg:flex items-center gap-6 font-semibold">
            <div className="flex gap-6 items-center">
              <Link to="/" className="hover:text-gray-800">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-800">
                About
              </Link>
              <Link to="/merchStore" className="hover:text-gray-800">
                Store
              </Link>

              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-black px-4 py-2 rounded-xl hover:bg-white hover:text-black"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="bg-black px-4 py-2 rounded-xl hover:bg-white hover:text-black"
                >
                  Sign In / Sign Up
                </Link>
              )}
            </div>

            {showToast && (
              <div className="fixed bottom-20 right-5 bg-white text-gray-700 border border-gray-300 px-5 py-3 rounded-xl shadow-lg">
                {message}
              </div>
            )}

            <div className="flex items-center bg-white rounded-lg px-3 py-1 text-black max-w-45 ring-0">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white rounded-lg px-3 py-1 text-black w-full max-w-40"
              >
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                  className="focus:outline-none focus:ring-0 bg-transparent w-full"
                />

                <button type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFavorites(true)}
                className="relative bg-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600"
              >
                <FaHeart />
                <span className="absolute -top-2 -right-2 bg-white text-yellow-500 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold border">
                  {newCounter}
                </span>
              </button>

              <button
                onClick={() => setShowCart(true)}
                className="relative bg-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black"
              >
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-white text-yellow-500 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold border">
                  {counter}
                </span>
              </button>
            
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* DRAWER */}
              <motion.div
                className="
          fixed top-0 right-0 h-full
          w-[75%] sm:w-[60%]
          bg-yellow-500 text-white
          z-50 p-6 flex flex-col gap-6
        "
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="close-btn flex justify-end">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl text-white bg-black p-1 rounded-lg"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center bg-white rounded-lg px-3 py-1 text-black w-full max-w-40">
                    <form
                      onSubmit={handleSearchSubmit}
                      className="flex items-center bg-white rounded-lg px-3 py-1 text-black w-full max-w-40"
                    >
                      <input
                        type="text"
                        placeholder="Search"
                        onChange={handleSearch}
                        className="focus:outline-none focus:ring-0 bg-transparent w-full"
                      />

                      <button type="submit">
                        <FaSearch />
                      </button>
                    </form>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowFavorites(true)}
                      className="favorites-button relative bg-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600"
                    >
                      <FaHeart />
                      <span className="absolute -top-2 -right-1 bg-white text-yellow-500 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold border">
                        {newCounter}
                      </span>
                    </button>

                    <button
                      onClick={() => setShowCart(true)}
                      className="cart-button relative bg-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-yellow-500"
                    >
                      <FaShoppingCart />
                      <span className="absolute -top-2 -right-1 bg-white text-yellow-500 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold border">
                        {counter}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col text-gray-800 gap-4 font-semibold text-lg">
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-row  items-center justify-between bg-yellow-100 p-2 rounded-xl hover:bg-white"
                  >
                    Home
                    <svg
                      className="h-4 w-4 fill-current transform scale-125"
                      viewBox="0 0 20 20"
                    >
                      <path
                        transform="rotate(-90 10 10)"
                        d="..."
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-row  items-center justify-between bg-yellow-100 p-2 rounded-xl hover:bg-white"
                  >
                    About
                    <svg
                      className="h-4 w-4 fill-current transform scale-125"
                      viewBox="0 0 20 20"
                    >
                      <path
                        transform="rotate(-90 10 10)"
                        d="..."
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/merchStore"
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-row  items-center justify-between bg-yellow-100 p-2 rounded-xl hover:bg-white"
                  >
                    Store
                    <svg
                      className="h-4 w-4 fill-current transform scale-125"
                      viewBox="0 0 20 20"
                    >
                      <path
                        transform="rotate(-90 10 10)"
                        d="..."
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </Link>

                  <button
                    href="/contact"
                    onClick={() => {
                      setShowContactForm(true);
                      setMenuOpen(false);
                    }}
                    className="flex flex-row  items-center justify-between  bg-yellow-100 hover:bg-white p-2 rounded-xl"
                  >
                    Contact
                    <svg
                      className="h-4 w-4 fill-current transform scale-125"
                      viewBox="0 0 20 20"
                    >
                      <path
                        transform="rotate(-90 10 10)"
                        d="..."
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </button>

                  {user ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                      className="flex flex-row items-center justify-between bg-yellow-100 p-2 rounded-xl hover:bg-white"
                    >
                      Logout
                      <svg
                        className="h-4 w-4 fill-current transform scale-125"
                        viewBox="0 0 20 20"
                      >
                        <path
                          transform="rotate(-90 10 10)"
                          d="..."
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to="/auth"
                      onClick={() => setMenuOpen(false)}
                      className="flex flex-row items-center justify-between bg-yellow-100 p-2 rounded-xl hover:bg-white"
                    >
                      Sign In / Sign Up
                      <svg
                        className="h-4 w-4 fill-current transform scale-125"
                        viewBox="0 0 20 20"
                      >
                        <path
                          transform="rotate(-90 10 10)"
                          d="..."
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
