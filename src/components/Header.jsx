// Updated Header 2 styled like Header 1
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // 👈 useLocation added
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../auth/AuthContext";
import toast from "react-hot-toast";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // 👈 current route info

  // 🔹 Helper to style desktop nav items
  const navLinkClasses = (path) => {
    const base =
      "px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200";
    const isActive = location.pathname === path;

    if (isActive) {
      return (
        base +
        " bg-blue-50 text-blue-700 shadow-sm" // active state
      );
    }
    return (
      base +
      " text-blue-800 hover:bg-blue-50 hover:text-blue-700" // normal/hover
    );
  };

  // 🔹 Helper to style mobile nav items
  const mobileLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return (
      "block text-lg px-2 py-2 rounded-lg " +
      (isActive
        ? "bg-blue-50 text-blue-800 font-semibold"
        : "text-gray-800 hover:bg-gray-50")
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
            <img
              src="/assets/founder.jpg"
              alt="Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="/assets/Anandlogo.png"
              alt="Logo"
              className="w-8 h-10 md:w-10 md:h-12 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-blue-800">
                <span className="text-orange-500">ANAND </span>YATRA
              </h1>
              <p className="text-xs text-gray-600 italic mt-1">
                "Dharmo Rakshati Rakshitah"
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-3">
          <Link to="/" className={navLinkClasses("/")}>
            Home
          </Link>
          <Link
            to="/destinations"
            className={navLinkClasses("/destinations")}
          >
            Destinations
          </Link>
          <Link to="/trips" className={navLinkClasses("/trips")}>
            Packages
          </Link>
          <Link to="/about" className={navLinkClasses("/about")}>
            About
          </Link>
          <Link to="/contact" className={navLinkClasses("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/signup"
                className="bg-green-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-green-700 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="bg-green-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-green-700 transition"
              >
                Sign In
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="flex items-center gap-2">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border shadow"
                />
                <span className="font-semibold text-blue-900">
                  {user.name}
                </span>
              </Link>

              <button
                onClick={() => {
                  toast.success("Logged out successfully ✨");
                  signOut();
                  setTimeout(() => navigate("/"), 500);
                }}
                className="px-6 py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 shadow"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-3xl text-blue-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4">
          {user && (
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b pb-3"
            >
              <img
                src={user.avatar}
                className="w-10 h-10 rounded-full shadow"
                alt="avatar"
              />
              <span className="font-semibold text-blue-900 text-lg">
                {user.name}
              </span>
            </Link>
          )}

          <Link
            onClick={() => setOpen(false)}
            to="/"
            className={mobileLinkClasses("/")}
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/destinations"
            className={mobileLinkClasses("/destinations")}
          >
            Destinations
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/trips"
            className={mobileLinkClasses("/trips")}
          >
            Trips
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/about"
            className={mobileLinkClasses("/about")}
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className={mobileLinkClasses("/contact")}
          >
            Contact
          </Link>

          {!user ? (
            <>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="block text-lg bg-green-600 text-white text-center py-2 rounded-lg shadow"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="block text-lg bg-green-600 text-white text-center py-2 rounded-lg shadow"
              >
                Sign In
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                toast.success("Logged out successfully ✨");
                signOut();
                setOpen(false);
                navigate("/");
              }}
              className="text-red-600 font-semibold text-lg"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
