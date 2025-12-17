import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../auth/AuthContext";
 
export default function SignUp() {
  const { signUp } = useAuth();
 
  const navigate = useNavigate();
  const location = useLocation();
 
  // ⭐ Read redirect URL from param
  const params = new URLSearchParams(location.search);
  const redirectTo = params.get("redirect") || "/";
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [toast, setToast] = useState(null);
 
  function showToast(type, message) {
    setToast({ type, message });
    setTimeout(() => setToast(null), 2500);
  }
 
  async function handleSubmit(e) {
    e.preventDefault();
 
    if (name.length < 2) {
      showToast("error", "Name must be at least 2 characters ❌");
      return;
    }
 
    if (password.length < 6) {
      showToast("error", "Password must be at least 6 characters ❌");
      return;
    }
 
    await signUp(name, email, password);
    showToast("success", "Account Created Successfully 🎉");
 
    // ⭐ Redirect Back After Signup
    setTimeout(() => navigate(redirectTo), 800);
  }
 
  return (
    <div className="min-h-screen flex items-start justify-center pt-10 px-5
        bg-gradient-to-br from-blue-50 via-white to-yellow-50">
 
      {/* 🔔 Toast Popup */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className={`fixed top-6 mx-auto left-1/2 -translate-x-1/2 px-5 py-3
              rounded-xl shadow-xl text-white font-semibold
              ${toast.type === "success" ? "bg-green-600" : "bg-red-500"}`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
 
      {/*Signup Card */}
     <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  className="w-full max-w-md bg-white/80 backdrop-blur-xl p-5 rounded-2xl
             shadow-xl border border-white/40"
>
  <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r
                 from-blue-800 to-blue-800 bg-clip-text text-transparent drop-shadow">
    Create Account
  </h2>
 
  <p className="text-center text-gray-600 mt-1 text-sm">
    Start your travel journey with us ✈️✨
  </p>
 
  {/* FORM */}
  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
 
    {/* Full Name */}
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1 text-sm">Full Name</label>
      <input
        type="text"
        placeholder="Your full name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2.5 border rounded-xl focus:ring-2
                   focus:ring-orange-400 outline-none transition text-sm"
      />
    </div>
 
    {/* Email */}
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1 text-sm">Email</label>
      <input
        type="email"
        placeholder="example@mail.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2.5 border rounded-xl focus:ring-2
                   focus:ring-blue-500 outline-none transition text-sm"
      />
    </div>
 
    {/* Password */}
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1 text-sm">Password</label>
      <input
        type="password"
        placeholder="Min 6 characters"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2.5 border rounded-xl focus:ring-2
                   focus:ring-yellow-500 outline-none transition text-sm"
      />
    </div>
 
    <button
      className="w-full bg-gradient-to-r from-blue-800 to-blue-800
                 text-white py-2.5 rounded-xl font-bold shadow-md
                 hover:opacity-90 transition-all text-sm"
    >
      Sign Up
    </button>
  </form>
 
  <p className="text-center mt-4 text-gray-700 text-sm">
    Already have an account?{" "}
    <Link
      className="text-blue-600 font-semibold hover:underline"
      to={`/signin?redirect=${redirectTo}`}
    >
      Sign In
    </Link>
  </p>
</motion.div>
 
    </div>
  );
}
 