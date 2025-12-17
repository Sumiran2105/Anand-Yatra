import React from "react";
import { useParams, Link } from "react-router-dom";
import trips from "../data/trips.json";

export default function CategoryTrips() {
  const { category } = useParams();

  // Define categories  
  const categories = {
    beaches: ["Goa", "Varkala"],
  };

  const destinationList = categories[category] || [];

  const filteredTrips = Object.values(trips).filter((trip) =>
    destinationList.includes(trip.destination)
  );

  return (
    <div className="max-w-7xl mx-auto px-5 pt-28 pb-20">
      <h2 className="text-4xl font-extrabold mb-10">
        {category === "beaches" ? "Beautiful Beach Trips" : "Trips"}
      </h2>

      {filteredTrips.length === 0 ? (
        <p className="text-gray-600 text-center">No trips found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTrips.map((trip) => (
            <Link
              key={trip.id}
              to={`/trip/${trip.id}`}
              className="bg-white rounded-2xl shadow hover:shadow-2xl border overflow-hidden transition"
            >
              <img src={trip.image} className="h-56 w-full object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-bold">{trip.title}</h3>
                <p className="text-gray-500">{trip.destination}</p>

                <p className="mt-3 text-green-700 font-extrabold text-xl">
                  ₹{trip.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
