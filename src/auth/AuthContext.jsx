import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  // Load user from localStorage
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // Save user on every change
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // SIGN UP
  function signUp(name, email, password) {
    const newUser = { 
      name, 
      email, 
      password,
      avatar: `https://i.pravatar.cc/150?u=${email}`
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);

    navigate("/profile");
  }

  // SIGN IN
  function signIn(email, password) {
    const saved = localStorage.getItem("user");
    if (!saved) return false;

    const stored = JSON.parse(saved);

    if (stored.email === email && stored.password === password) {
      setUser(stored);
      navigate("/profile");
      return true;
    }

    return false;
  }

  // SIGN OUT
  function signOut() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
