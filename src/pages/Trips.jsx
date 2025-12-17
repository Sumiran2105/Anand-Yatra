import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import trips from "../data/trips.json";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../utils/wishlist";

export default function Trips() {
  const navigate = useNavigate();
  const { search } = useLocation();

  // --- PERSON FILTER ---
  const query = new URLSearchParams(search);
  const persons = Number(query.get("persons")) || 1;

  const handlePersonsChange = (e) => {
    const value = e.target.value;
    query.set("persons", value);
    navigate(`/trips?${query.toString()}`);
  };

  // --- WISHLIST STATE ---
  const [wishlistIds, setWishlistIds] = useState([]);

  useEffect(() => {
    const saved = getWishlist().map((i) => String(i.id));
    setWishlistIds(saved);
  }, []);

  const toggleWishlist = (trip) => {
    const id = String(trip.id);

    if (wishlistIds.includes(id)) {
      removeFromWishlist(id);
      setWishlistIds(wishlistIds.filter((x) => x !== id));
      toast.error("Removed from Wishlist 💔");
    } else {
      addToWishlist({
        id,
        image: trip.image,
        title: trip.title,
        location: trip.destination,
        price: trip.price,
      });
      setWishlistIds([...wishlistIds, id]);
      toast.success("Added to Wishlist ❤️");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Popular <span className="text-amber-300">Packages</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-semibold px-2">
            Handpicked holiday packages with instant pricing for your group size
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 pb-16 sm:pb-20">
        {/* SECTION HEADER */}
        <div className="text-center mt-8 sm:mt-12 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 sm:mb-6">
            Our Best Packages
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-semibold leading-relaxed px-2 sm:px-0">
            Discover our carefully curated collection of unforgettable journeys.
            Each package includes comfortable accommodations, guided experiences,
            and all essential amenities to make your trip truly memorable.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-col mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <label className="text-sm text-gray-700 font-semibold whitespace-nowrap">
              Travelers:
            </label>

            <div className="flex items-center gap-3 sm:gap-4">
              <select
                value={persons}
                onChange={handlePersonsChange}
                className="px-3 sm:px-4 py-2 rounded-lg shadow-md bg-white text-gray-700 font-semibold text-sm sm:text-base border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 w-full sm:w-auto"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Person{i + 1 > 1 ? "s" : ""}
                  </option>
                ))}
              </select>

              <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">
                For {persons} traveler{persons > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* TRIP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Object.values(trips).map((trip) => {
            const totalPrice = trip.price * persons;
            const originalTotal = trip.originalPrice
              ? trip.originalPrice * persons
              : null;

            const discount =
              trip.originalPrice && trip.originalPrice > trip.price
                ? Math.round(
                    ((trip.originalPrice - trip.price) /
                      trip.originalPrice) *
                      100
                  )
                : 0;

            const savedAmount = originalTotal
              ? originalTotal - totalPrice
              : 0;

            const isWish = wishlistIds.includes(String(trip.id));

            return (
              <div key={trip.id} className="relative">
                {/* Wishlist */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(trip);
                  }}
                  className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20 bg-white p-1.5 sm:p-2 rounded-full shadow hover:scale-110 transition-all duration-200"
                >
                  <Heart
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      isWish
                        ? "text-red-500 fill-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>

                <Link to={`/trip/${trip.id}?persons=${persons}`}>
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
                    {/* IMAGE */}
                    <div className="h-40 sm:h-48 md:h-52 w-full relative">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />

                      {discount > 0 && (
                        <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-green-600 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold shadow">
                          {discount}% OFF
                        </span>
                      )}

                      {savedAmount > 0 && (
                        <span className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-green-500/90 text-white px-2 py-1 text-xs rounded-lg font-semibold shadow">
                          SAVE ₹{savedAmount.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-800 line-clamp-2">
                        {trip.title}
                      </h3>

                      <p className="mt-1 text-gray-600 text-xs sm:text-sm font-semibold">
                        {trip.destination}
                      </p>

                      {/* PRICE */}
                      <div className="mt-3 sm:mt-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xl sm:text-2xl font-bold text-green-700">
                            ₹{totalPrice.toLocaleString()}
                          </span>

                          {originalTotal && (
                            <span className="text-gray-400 line-through text-base sm:text-lg">
                              ₹{originalTotal.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {persons > 1 && (
                          <p className="text-xs text-gray-500 font-semibold mt-1">
                            (for {persons} persons)
                          </p>
                        )}
                      </div>

                      <p className="mt-2 text-gray-600 text-xs sm:text-sm font-semibold">
                        {trip.days} Days • {trip.nights} Nights
                      </p>

                      <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-dark-700 space-y-1 sm:space-y-2">
                        <p className="font-semibold">🚗 Travel included</p>
                        <p className="font-semibold">🏨 Standard Room</p>
                        <p className="font-semibold">🍽 Breakfast Included</p>
                        <p className="font-semibold">👨‍✈️ Guide Available</p>
                      </div>

                      <button className="mt-3 sm:mt-4 w-full py-2 sm:py-2.5 bg-blue-800 hover:bg-blue-700 text-white rounded-lg sm:rounded-xl font-semibold shadow-md transition-all duration-200 text-sm sm:text-base">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
