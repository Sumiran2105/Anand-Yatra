import React from "react";

export default function TripFilters({ selected, onChange, search, setSearch }) {
  const options = ["all", "international", "beaches", "family", "temples", "adventure"];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border rounded-lg p-3 shadow-sm"
          placeholder="Search trips, location or keyword..."
        />

        <div className="flex flex-wrap gap-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${selected === opt ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
