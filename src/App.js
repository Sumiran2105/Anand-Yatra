import React from "react";
import { Routes, Route,  } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";
import BookingForm from "./pages/BookingForm";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import Profile from "./pages/Profile";
import MyBookings from "./pages/MyBookings";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Auth
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";

// Destinations
import Destinations from "./components/Destinations";
import CategoryPlaces from "./components/CategoryPlaces";
import PlaceDetails from "./components/PlaceDetails";
import { Scroll } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
        <ScrollToTop />
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trip/:id" element={<TripDetails />} />
            <Route path="/booking/:id" element={<BookingForm />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/success" element={<SuccessPage />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/my-bookings" element={<MyBookings />} />

            {/* Destinations */}
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/category/:categoryId" element={<CategoryPlaces />} />
            <Route
              path="/category/:categoryId/:placeId"
              element={<PlaceDetails />}
            />

            {/* Auth */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* NEW PAGES */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      
    </>
  );
}

export default App;