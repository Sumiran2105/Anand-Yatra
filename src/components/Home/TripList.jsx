import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import trips from "../../data/trips.json";
import categories from "../../data/tripCategories.json";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../../utils/wishlist";

export default function TripList() {
  const navigate = useNavigate();
  const [wishlistIds, setWishlistIds] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setWishlistIds(getWishlist().map((i) => String(i.id)));

    const updateHandler = () => {
      setWishlistIds(getWishlist().map((i) => String(i.id)));
    };

    window.addEventListener("wishlistUpdated", updateHandler);
    return () => window.removeEventListener("wishlistUpdated", updateHandler);
  }, []);

  // ⭐ Updated toggleWishlist with popup
  const toggleWishlist = (trip) => {
    const id = String(trip.id);

    if (wishlistIds.includes(id)) {
      removeFromWishlist(id);
      setWishlistIds(getWishlist().map((i) => String(i.id)));

      // ❌ Removed toast
      toast.custom(
        <div className="flex items-center gap-3 bg-white border rounded-xl shadow px-4 py-2">
          <span className="text-xl">💔</span>
          <p className="font-semibold text-gray-700">Removed from Wishlist</p>
        </div>,
        { duration: 1600 }
      );
    } else {
      addToWishlist({
        id,
        image: trip.image,
        title: trip.title,
        location: trip.destination,
        price: trip.price,
      });

      setWishlistIds(getWishlist().map((i) => String(i.id)));

      // ❤️ Added toast
      toast.custom(
        <div className="flex items-center gap-3 bg-white border rounded-xl shadow px-4 py-2">
          <span className="text-xl">💚</span>
          <p className="font-semibold text-gray-700">Saved to Wishlist</p>
        </div>,
        { duration: 1600 }
      );
    }
  };

  const filteredTrips =
    activeCategory === "all"
      ? Object.values(trips)
      : Object.values(trips).filter(
        (t) => categories[t.id] === activeCategory
      );

  const handleView = (trip) => {
    navigate(`/trip/${trip.id}?persons=1`);
  };

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "beach", label: "Beaches" },
    { id: "hill", label: "Hill Stations" },
    { id: "spiritual", label: "Spiritual" },
    { id: "adventure", label: "Adventure" },
  ];

  return (
    <div className="mt-12">
      {/* 🌈 GRADIENT TITLE - Updated with header font styling */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 text-center mb-12">
        Popular Trips ✈️
      </h2>

      <br />
      <br />
      
      {/* ⭐ FILTER BUTTONS - Updated with header font styling */}
      <div className="flex gap-4 center overflow-x-auto pb-4">
        {filterButtons.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 shadow 
              ${activeCategory === cat.id
                ? "bg-blue-800 text-white"
                : "bg-white text-blue-800 hover:bg-blue-50 border border-gray-200"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* NO DATA - Updated font */}
      {filteredTrips.length === 0 && (
        <p className="text-center text-gray-500 mt-8 text-lg font-semibold">
          No trips found 😳
        </p>
      )}

      {/* TRIP CARDS - Updated fonts throughout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {filteredTrips.map((trip) => {
          const isWish = wishlistIds.includes(String(trip.id));

          return (
            <div
              key={trip.id}
              className="relative bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* ❤️ Wishlist Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(trip);
                }}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:shadow-md transition-all duration-200"
              >
                <Heart
                  className={`w-6 h-6 ${isWish ? "text-red-500 fill-red-500" : "text-gray-600"
                    }`}
                />
              </button>

              <img
                src={trip.image}
                alt={trip.title}
                className="h-52 w-full object-cover cursor-pointer rounded-t-2xl"
                onClick={() => handleView(trip)}
              />

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-blue-800">{trip.title}</h3>
                <p className="text-gray-600 text-sm font-semibold mt-1">{trip.destination}</p>

                <p className="text-green-700 text-xl font-bold mt-2">
                  ₹{trip.price.toLocaleString()}
                </p>

                <p className="text-sm text-gray-600 font-semibold mt-1">
                  {trip.days} Days • {trip.nights} Nights
                </p>

                <button
                  onClick={() => handleView(trip)}
                  className="mt-4 w-full py-2.5 bg-blue-800 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}