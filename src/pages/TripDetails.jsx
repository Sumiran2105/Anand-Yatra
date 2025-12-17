import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import trips from "../data/trips.json";
import {
  Users,
  Plane,
  Hotel,
  MapPin,
  Calendar,
  ArrowLeft,
} from "lucide-react";
 
export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
 
  const personsFromURL = Number(new URLSearchParams(search).get("persons")) || 1;
  const trip = trips[id];
 
  const [persons, setPersons] = useState(personsFromURL);
  const [travelType, setTravelType] = useState("no-flight");
  const [roomType, setRoomType] = useState("standard");
 
  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-3xl font-extrabold text-red-600 mb-2">
            Trip Not Found ❌
          </p>
          <button
            onClick={() => navigate("/trips")}
            className="mt-3 px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Go Back to Trips
          </button>
        </div>
      </div>
    );
  }
 
  // helpers for breakdown
  const getTravelExtraPerPerson = () => {
    if (travelType === "flight") return 5000;
    if (travelType === "train") return 1500;
    if (travelType === "bus") return 800;
    return 0;
  };
 
  const getRoomExtraPerPerson = () => {
    if (roomType === "deluxe") return 1000;
    if (roomType === "premium") return 2500;
    return 0;
  };
 
  const calculateTotal = () => {
    const travelExtra = getTravelExtraPerPerson();
    const roomExtra = getRoomExtraPerPerson();
    return (trip.price + travelExtra + roomExtra) * persons;
  };
 
  const total = calculateTotal();
  const basePricePerPerson = trip.price;
  const travelExtraPerPerson = getTravelExtraPerPerson();
  const roomExtraPerPerson = getRoomExtraPerPerson();
 
  const baseTotal = basePricePerPerson * persons;
  const travelExtraTotal = travelExtraPerPerson * persons;
  const roomExtraTotal = roomExtraPerPerson * persons;
 
  const travelLabel =
    travelType === "flight"
      ? "Flight Included"
      : travelType === "train"
      ? "Train Included"
      : travelType === "bus"
      ? "Bus Included"
      : "No Travel Add-on";
 
  const roomLabel =
    roomType === "deluxe"
      ? "Deluxe Room"
      : roomType === "premium"
      ? "Premium Room"
      : "Standard Room";
 
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16 px-4">
      {/* Page Title */}
      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 drop-shadow-lg text-center w-full">
          Trip Details
        </h1>
      </div>
 
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700"
        >
          <ArrowLeft size={18} />
          Back to Trips
        </button>
 
        {/* TOP: IMAGE + BASIC DETAILS */}
        <div className="grid md:grid-cols-1 gap-8 md:gap-10 items-stretch">
          {/* Image card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white bg-white h-full">
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-[320px] sm:h-[380px] md:h-[380px] lg:h-[220px] object-cover"
            />
 
            {/* top-left chips */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="inline-flex items-center rounded-full bg-black/60 text-white text-xs px-3 py-1 backdrop-blur">
                <MapPin size={14} className="mr-1" />
                {trip.destination}
              </span>
              {trip.days && trip.nights && (
                <span className="inline-flex items-center rounded-full bg-white/80 text-slate-800 text-xs px-3 py-1 shadow">
                  <Calendar size={14} className="mr-1" />
                  {trip.days} Days • {trip.nights} Nights
                </span>
              )}
            </div>
 
            {/* bottom-right tag */}
            <div className="absolute bottom-4 right-4 bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
              Starting from ₹{trip.price.toLocaleString()} / person
            </div>
          </div>
 
          {/* Text block */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {trip.title}
              </h2>
 
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Discover a thoughtfully curated experience with comfortable
                stays, guided plans, and smooth travel options designed for you.
              </p>
            </div>
 
            <div className="mt-4 rounded-2xl bg-white shadow-md border border-slate-100 p-4 sm:p-5">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Base Price (per person)
                  </p>
                  <p className="text-2xl font-bold text-emerald-600">
                    ₹{basePricePerPerson.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Current Selection
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    {persons} {persons === 1 ? "Person" : "Persons"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {travelLabel} • {roomLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* MAIN: CUSTOMIZATION + SUMMARY */}
        <div className="mt-10 grid lg:grid-cols-[1.6fr,1.1fr] gap-8 items-stretch">
          {/* Customization form */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 h-full">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Customize Your Trip
            </h2>
 
            <div className="grid md:grid-cols-3 gap-6">
              {/* Persons */}
              <div>
                <label className="font-semibold flex items-center gap-2 text-sm text-slate-800">
                  <Users size={18} className="text-blue-600" />
                  Number of Persons
                </label>
                <select
                  className="mt-2 w-full p-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/60 focus:outline-none"
                  value={persons}
                  onChange={(e) => setPersons(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
 
              {/* Travel Type */}
              <div>
                <label className="font-semibold flex items-center gap-2 text-sm text-slate-800">
                  <Plane size={18} className="text-blue-600" />
                  Travel Type
                </label>
                <select
                  className="mt-2 w-full p-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/60 focus:outline-none"
                  value={travelType}
                  onChange={(e) => setTravelType(e.target.value)}
                >
                  <option value="no-flight">Without Flight</option>
                  <option value="flight">Flight ✈️</option>
                  <option value="train">Train 🚆</option>
                  <option value="bus">Bus 🚌</option>
                </select>
              </div>
 
              {/* Room Type */}
              <div>
                <label className="font-semibold flex items-center gap-2 text-sm text-slate-800">
                  <Hotel size={18} className="text-blue-600" />
                  Hotel Room Type
                </label>
                <select
                  className="mt-2 w-full p-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/60 focus:outline-none"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option value="standard">Standard (₹0)</option>
                  <option value="deluxe">Deluxe (₹1000/person)</option>
                  <option value="premium">Premium (₹2500/person)</option>
                </select>
              </div>
            </div>
 
            {/* Small note */}
            <p className="mt-5 text-xs sm:text-sm text-slate-500">
              * Final cost includes your selected travel mode and hotel category.
              Exact flight / train timings and hotel details will be shared after
              booking confirmation.
            </p>
          </div>
 
          {/* Summary card */}
          <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white rounded-3xl shadow-2xl p-6 sm:p-7 h-full flex flex-col sticky top-28">
            <h3 className="text-lg font-semibold mb-4">Price Summary</h3>
 
            <div className="space-y-3 text-sm flex-1">
              <div className="flex justify-between">
                <span>
                  Base ({persons} x ₹{basePricePerPerson.toLocaleString()})
                </span>
                <span>₹{baseTotal.toLocaleString()}</span>
              </div>
 
              <div className="flex justify-between text-blue-100">
                <span>
                  Travel Add-on{" "}
                  {travelExtraPerPerson > 0
                    ? `(${persons} x ₹${travelExtraPerPerson.toLocaleString()})`
                    : "(None)"}
                </span>
                <span>
                  {travelExtraTotal > 0
                    ? `₹${travelExtraTotal.toLocaleString()}`
                    : "₹0"}
                </span>
              </div>
 
              <div className="flex justify-between text-blue-100">
                <span>
                  Room Upgrade{" "}
                  {roomExtraPerPerson > 0
                    ? `(${persons} x ₹${roomExtraPerPerson.toLocaleString()})`
                    : "(Standard)"}
                </span>
                <span>
                  {roomExtraTotal > 0
                    ? `₹${roomExtraTotal.toLocaleString()}`
                    : "₹0"}
                </span>
              </div>
 
              <div className="border-t border-blue-400/40 pt-3 mt-2 flex justify-between items-center">
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                  Total Amount
                </span>
                <span className="text-2xl font-extrabold">
                  ₹{total.toLocaleString()}
                </span>
              </div>
            </div>
 
            <button
              onClick={() =>
                navigate(`/booking/${id}`, {
                  state: { trip, persons, travelType, roomType, total },
                })
              }
              className="mt-6 w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-0.5"
            >
              Proceed to Booking
            </button>
 
            <p className="mt-3 text-[11px] text-blue-100 leading-relaxed">
              By continuing, you agree to Anand Yatra’s booking terms,
              cancellation policy, and travel guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}