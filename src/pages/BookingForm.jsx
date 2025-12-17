import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import trips from "../data/trips.json";
import { useAuth } from "../auth/AuthContext";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = useAuth();

  // 🚀 Redirect if not logged in (with redirect-back support)
  useEffect(() => {
    if (!user) {
      navigate(`/signin?redirect=/booking/${id}`);
    }
  }, [user, navigate, id]);

  // LOAD TRIP
  const trip =
    state?.trip ||
    trips[String(id)] ||
    Object.values(trips).find((t) => String(t.id) === String(id));

  const { persons, travelType, roomType, total } = state || {};

  const [form, setForm] = useState({
    name: "",
    email: user?.email || "",
    date: "",
  });

  // Avoid flicker while redirecting
  if (!user) return null;

  if (!trip) {
    return (
      <p className="pt-40 text-center text-red-600 font-bold">
        Trip Not Found ❌
      </p>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = new Date(form.date)
      .toISOString()
      .split("T")[0];

    navigate("/payment", {
      state: {
        trip,
        form: { ...form, date: formattedDate },
        total,
        persons,
        travelType,
        roomType,
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto px-5 pt-32 pb-20">
      <div className="bg-white p-6 rounded-2xl shadow-xl border">
        <h2 className="text-2xl font-bold mb-4">Booking — {trip.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="email"
            type="email"
            required
            value={form.email}
            readOnly
            className="w-full p-3 border rounded-xl bg-gray-100 cursor-not-allowed"
          />

          <input
            name="date"
            type="date"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <div className="bg-gray-50 p-4 rounded-xl border">
            <p className="text-xl font-bold text-green-700">
              Total: ₹{total?.toLocaleString()}
            </p>
          </div>

          <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
