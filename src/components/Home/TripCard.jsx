import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function TripCard({ trip }) {
  const navigate = useNavigate();

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favs.some((item) => item.id === trip.id));
  }, [trip.id]);

  const toggleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFav) {
      favs = favs.filter((item) => item.id !== trip.id);
      toast.error("Removed from Favorites ❌");
    } else {
      favs.push(trip);
      toast.success("Added to Favorites ❤️");
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
    setIsFav(!isFav);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 relative">

      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-3 right-3 p-2 rounded-full transition  
          ${isFav ? "bg-red-100 border border-red-500" : "bg-white/20 border border-white/70"}`}
      >
        {isFav ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 
             12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 
             3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 
             3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
             6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="white" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 
                0L12 7.636l1.318-1.318a4.5 4.5 
                0 116.364 6.364L12 21.364l-7.682-7.682a4.5 
                4.5 0 010-6.364z" />
          </svg>
        )}
      </button>

      <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-700">{trip.title}</h3>
        <p className="text-gray-600">{trip.location}</p>

        <p className="text-sm text-gray-500 mt-1">
          {trip.days} Days • {trip.nights} Nights
        </p>

        <p className="mt-3 text-lg font-extrabold text-green-600">
          ₹{trip.price}
        </p>

        <button
          onClick={() => navigate(`/trip/${trip.id}`)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default TripCard;
