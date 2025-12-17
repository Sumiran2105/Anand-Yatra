import React from "react";
import { useParams, Link } from "react-router-dom";
import trips from "../data/trips.json";

export default function CategoryPlaces() {
  const { categoryId } = useParams();
  console.log(categoryId);

  // CATEGORY FILTER LOGIC
  const categoryMapping = {
    beaches: ["Goa", "Varkala"],
    mountains: ["Manali"],
    spiritual: ["Haridwar", "Amritsar"],
    luxury: ["Goa"],
    wildlife: ["Ranthambore", "Jim Corbett", "Bandhavgarh"], 
  };

  const allowedDestinations = categoryMapping[categoryId] || [];

  // FILTER TRIPS FROM trips.json
  const filteredTrips = Object.values(trips).filter((trip) =>
    allowedDestinations.includes(trip.destination)
  );

  return (
    <div className="max-w-7xl mx-auto px-5 pt-28 pb-20">
      <h2 className="text-3xl font-extrabold mb-6 capitalize">
        {categoryId.replace("-", " ")} Trips
      </h2>

      {filteredTrips.length === 0 ? (
        <p className="text-gray-500">No trips found for this category.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map((trip) => (
            <Link key={trip.id} to={`/trip/${trip.id}`}>
              <div className="bg-white rounded-2xl shadow hover:shadow-2xl transition overflow-hidden">

                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800">{trip.title}</h3>
                  <p className="text-gray-500">{trip.destination}</p>

                  <p className="mt-3 text-2xl font-bold text-green-700">
                    ₹{trip.price.toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    {trip.days} Days • {trip.nights} Nights
                  </p>

                  <button className="mt-4 w-full py-2 rounded-xl bg-blue-800
                             text-white 
                                     font-semibold shadow">
                    View Details
                  </button>
                </div>

              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
