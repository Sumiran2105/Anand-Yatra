import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Correct validation
  if (!state || !state.trip || !state.form || state.total === undefined) {
    return (
      <div className="max-w-lg mx-auto p-8 pt-32 text-center text-lg">
        No payment data found. Please start your booking again.
      </div>
    );
  }

  const { trip, form, total, persons, travelType, roomType } = state;

  const basePrice = trip.price * persons;

  const travelCosts = {
    "no-flight": 0,
    flight: 5000 * persons,
    train: 1500 * persons,
    bus: 800 * persons,
  };

  const roomCosts = {
    standard: 0,
    deluxe: 1000 * persons,
    premium: 2500 * persons,
  };

  const travelCharge = travelCosts[travelType] || 0;
  const roomCharge = roomCosts[roomType] || 0;

  // ⭐ FIXED PAYMENT SAVE LOGIC (do not modify anything else)
  function handlePay() {
    const booking = {
      bookingId: Date.now(),        
      email: form.email,            
      title: trip.title,
      image: trip.image,
      date: form.date,
      travellers: persons,
      travelType,
      roomType,
      total,
      status: "active",             
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    navigate("/success", {
      state: {
        trip,
        form,
        total,
        persons,
        travelType,
        roomType,
      },
    });
  }

  return (
    <div className="max-w-xl mx-auto px-5 pt-32 pb-20">
      <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        Payment Summary
      </h2>

      <div className="p-5 bg-white rounded-2xl shadow-md border">
        <p className="text-lg font-semibold mb-2">Trip: {trip.title}</p>

        <p>
          <strong>Name:</strong> {form.name}
        </p>
        <p>
          <strong>Email:</strong> {form.email}
        </p>
        <p>
          <strong>Date:</strong> {form.date}
        </p>
        <p>
          <strong>Persons:</strong> {persons}
        </p>
        <p>
          <strong>Travel Type:</strong> {travelType}
        </p>
        <p>
          <strong>Room Type:</strong> {roomType}
        </p>
      </div>

      <div className="mt-6 p-6 bg-gray-50 rounded-2xl border shadow-sm">
        <h3 className="text-xl font-bold mb-3">Price Breakdown</h3>

        <p className="text-lg">
          <strong>Base Price × Persons:</strong>{" "}
          ₹{basePrice.toLocaleString()}
        </p>

        <p className="text-lg mt-2">
          <strong>Travel Charges:</strong> ₹{travelCharge.toLocaleString()}
        </p>

        <p className="text-lg mt-2">
          <strong>Room Charges:</strong> ₹{roomCharge.toLocaleString()}
        </p>

        <hr className="my-4" />

        <p className="text-3xl font-bold text-green-700">
          Total: ₹{total.toLocaleString()}
        </p>
      </div>

      <button
        onClick={handlePay}
        className="mt-8 w-full bg-gradient-to-r from-green-500 to-green-700 
                 text-white py-3 rounded-xl font-semibold shadow-lg
                 hover:scale-[1.04] hover:shadow-xl transition-all"
      >
        Pay Now (Demo)
      </button>
    </div>
  );
}
