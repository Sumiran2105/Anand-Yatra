import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../auth/AuthContext";
 
export default function SignIn() {
  const { signIn } = useAuth();
 
  const navigate = useNavigate();
  const location = useLocation();
 
  // ⭐ Read redirect URL from query
  const params = new URLSearchParams(location.search);
  const redirectTo = params.get("redirect") || "/";
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
 
  function showToast(type, message) {
    setToast({ type, message });
    setTimeout(() => setToast(null), 2500);
  }
 
  async function handleSubmit(e) {
    e.preventDefault();
 
    const ok = await signIn(email, password);
 
    if (!ok) {
      showToast("error", "Invalid email or password ❌");
    } else {
      showToast("success", "Login Successful 🎉");
 
      // ⭐ Redirect Back After Successful Login
      setTimeout(() => navigate(redirectTo), 800);
    }
  }
 
  return (
    <div className="min-h-screen flex items-start justify-center pt-5 bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-10 px-6">
 
      {/* 🚀 Beautiful Popup Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className={`fixed top-6 mx-auto left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl shadow-xl text-white font-semibold
              ${toast.type === "success" ? "bg-green-600" : "bg-red-500"}
            `}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* LOGIN CARD */}
     <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  className="w-full max-w-md bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/40"
>
  <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r
                 from-blue-800 to-blue-800 bg-clip-text text-transparent drop-shadow">
    Welcome Back
  </h2>
 
  <p className="text-center text-gray-600 mt-1 text-sm">
    Sign in to continue your journey ✨
  </p>
 
  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
 
    {/* Email */}
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1 text-sm">Email</label>
      <input
        type="email"
        placeholder="example@mail.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-sm"
      />
    </div>
 
    {/* Password */}
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1 text-sm">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2.5 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition text-sm"
      />
    </div>
 
    <button
      className="w-full bg-gradient-to-r from-blue-800 to-blue-800
                 text-white py-2.5 rounded-xl font-semibold shadow-md
                 hover:opacity-90 transition text-sm"
    >
      Sign In
    </button>
  </form>
 
  <p className="text-center mt-4 text-gray-700 text-sm">
    Don’t have an account?{" "}
    <Link className="text-blue-600 font-semibold hover:underline" to="/signup">
      Create Account
    </Link>
  </p>
</motion.div>
 
    </div>
  );
}
 