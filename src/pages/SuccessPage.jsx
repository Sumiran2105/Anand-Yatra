import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";

export default function SuccessPage() {
  const { state } = useLocation();

  // Correct state validation
  if (!state || !state.trip || !state.form || state.total === undefined) {
    return (
      <>
        <Header />
        <div className="max-w-3xl mx-auto pt-32 p-8 text-center text-xl">
          No booking data found.
        </div>
      </>
    );
  }

  const { trip, form, total, persons } = state;

  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto pt-32 p-8 text-center">

        {/* Success Icon */}
        <div className="inline-block bg-green-100 p-5 rounded-full shadow mb-6">
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
            <path 
              d="M20 6L9 17l-5-5"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold 
                       bg-gradient-to-r from-blue-600 to-yellow-500 
                       bg-clip-text text-transparent">
          Booking Confirmed!
        </h2>

        {/* Trip Title */}
        <p className="text-lg mt-3 text-gray-700 font-medium">
          {trip.title}
        </p>

        {/* Destination (optional) */}
        {trip.destination && (
          <p className="text-gray-600 mt-1">{trip.destination}</p>
        )}

        {/* Traveller Info */}
        <p className="mt-4 text-gray-700">
          Traveller: <span className="font-semibold">{form.name}</span>  
          &nbsp;•&nbsp; {persons} pax
        </p>

        {/* Total Amount */}
        <p className="mt-3 text-2xl font-bold text-green-600">
          Paid: ₹{total.toLocaleString()}
        </p>

        {/* Back to Home */}
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 rounded-xl 
                     bg-gradient-to-r from-blue-500 to-blue-700
                     text-white font-semibold shadow-lg
                     hover:scale-[1.05] hover:shadow-xl transition-all"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
