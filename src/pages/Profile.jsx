import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  Trash2,
  Edit3,
  Heart,
  Clock,
  CheckCircle,
  User,
  Pencil,
  KeyRound,
  CalendarCheck,
  CreditCard,
  UsersRound,
  LifeBuoy,
} from "lucide-react";

import { getWishlist, removeFromWishlist } from "../utils/wishlist";

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState("profile");
  const [wishlistState, setWishlistState] = useState([]);

  const tabRefs = {
    profile: useRef(null),
    upcoming: useRef(null),
    past: useRef(null),
    cancelled: useRef(null),
    wishlist: useRef(null),
  };

  const underlineRef = useRef(null);

  useLayoutEffect(() => {
    const activeTab = tabRefs[tab]?.current;
    const underline = underlineRef.current;

    if (activeTab && underline) {
      underline.style.left = activeTab.offsetLeft + "px";
      underline.style.width = activeTab.offsetWidth + "px";
    }
  }, [tab]);

  // Load wishlist
  useEffect(() => {
    setWishlistState(getWishlist());
  }, []);

  // Protect route
  if (!user) {
    navigate("/signin");
    return null;
  }

  // Bookings
  const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const myBookings = allBookings.filter((b) => b.email === user.email);

  const today = new Date();

  const upcoming = myBookings.filter(
    (b) => b.status === "active" && new Date(b.date) >= today
  );

  const past = myBookings.filter(
    (b) => b.status === "active" && new Date(b.date) < today
  );

  const cancelled = myBookings.filter((b) => b.status === "cancelled");

  function cancelBooking(bookingId) {
    const updated = allBookings.map((b) =>
      b.bookingId === bookingId ? { ...b, status: "cancelled" } : b
    );

    localStorage.setItem("bookings", JSON.stringify(updated));

    toast.success("Booking cancelled");
    setTimeout(() => window.location.reload(), 400);
  }

  function removeWish(id) {
    removeFromWishlist(id);
    setWishlistState(getWishlist());

    toast.custom(
      () => (
        <div className="flex items-center gap-3 bg-white border shadow-lg rounded-xl px-4 py-3">
          <span className="text-xl">💔</span>
          <div>
            <p className="font-bold text-gray-800">Removed from Wishlist</p>
            <p className="text-gray-600 text-sm">Item has been removed.</p>
          </div>
        </div>
      ),
      { duration: 2000 }
    );
  }

  const tabAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.35 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">

      {/* ========= TAB NAVIGATION (FIXED SCROLL) ========= */}
      <div
        className="relative flex items-center gap-6 sm:gap-12 border-b pb-3
        overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory"
      >
        {[
          { id: "profile", label: "Profile", icon: <User size={18} /> },
          { id: "upcoming", label: "Upcoming", icon: <Clock size={18} /> },
          { id: "past", label: "Past Trips", icon: <CheckCircle size={18} /> },
          { id: "cancelled", label: "Cancelled", icon: <Trash2 size={18} /> },
          {
            id: "wishlist",
            label: "Wishlist",
            icon: <Heart size={18} className="text-red-500" />,
          },
        ].map((t) => (
          <button
            key={t.id}
            ref={tabRefs[t.id]}
            onClick={() => setTab(t.id)}
            className={`pb-2 flex whitespace-nowrap items-center snap-start gap-2 text-base sm:text-lg font-semibold ${
              tab === t.id ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}

        <motion.div
          ref={underlineRef}
          layoutId="underline"
          className="absolute bottom-0 h-[3px] bg-blue-600 rounded-full"
        />
      </div>

      {/* ========= PROFILE TAB ========= */}
      {tab === "profile" && (
        <motion.div
          key="profile"
          {...tabAnimation}
          className="mt-10 bg-white rounded-3xl shadow-xl p-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-blue-500 shadow-lg object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow">
                <Edit3 size={18} />
              </button>
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-4xl font-extrabold">{user.name}</h2>
              <p className="text-gray-600 text-lg">{user.email}</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow"
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    toast.success("Logged out");
                    signOut();
                    setTimeout(() => navigate("/"), 300);
                  }}
                  className="px-6 py-2 bg-red-500 text-white rounded-xl shadow"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* ========= QUICK ACCESS BUTTONS ========= */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              {
                label: "Edit",
                icon: <Pencil size={20} />,
                color: "blue",
                link: "#",
              },
              {
                label: "Password",
                icon: <KeyRound size={20} />,
                color: "purple",
                link: "#",
              },
              {
                label: "Bookings",
                icon: <CalendarCheck size={20} />,
                color: "green",
                link: "#",
              },
              {
                label: "Payments",
                icon: <CreditCard size={20} />,
                color: "yellow",
                link: "#",
              },
              {
                label: "Travellers",
                icon: <UsersRound size={20} />,
                color: "orange",
                action: () =>
                  toast("Saved Travellers coming soon!", { icon: "🚀" }),
              },
              {
                label: "Support",
                icon: <LifeBuoy size={20} />,
                color: "red",
                link: "/contact",
              },
            ].map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => (btn.link ? navigate(btn.link) : btn.action())}
                className={`py-4 rounded-2xl shadow font-semibold text-sm flex flex-col items-center justify-center gap-2 bg-${btn.color}-100 text-${btn.color}-700 hover:bg-${btn.color}-200`}
              >
                {btn.icon}
                {btn.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* ========= UPCOMING TRIPS ========= */}
      {tab === "upcoming" && (
        <motion.div key="upcoming" {...tabAnimation} className="mt-10">
          <h3 className="text-2xl font-extrabold mb-4">Upcoming Trips</h3>

          {upcoming.length === 0 ? (
            <p className="text-gray-500">No upcoming trips.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {upcoming.map((b) => (
                <div
                  key={b.bookingId}
                  className="bg-white rounded-3xl border shadow-lg p-6"
                >
                  <img
                    src={b.image}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <h4 className="text-xl font-bold mt-3">{b.title}</h4>
                  <p className="text-gray-600">{b.date}</p>
                  <p className="text-gray-700 mt-2">
                    {b.travellers} Travellers
                  </p>
                  <p className="text-green-600 font-bold mt-2">
                    ₹{b.total.toLocaleString()}
                  </p>

                  <button
                    onClick={() => cancelBooking(b.bookingId)}
                    className="mt-4 w-full py-2 bg-red-100 text-red-600 rounded-xl font-bold hover:bg-red-200 flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} /> Cancel
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* ========= PAST TRIPS ========= */}
      {tab === "past" && (
        <motion.div key="past" {...tabAnimation} className="mt-10">
          <h3 className="text-2xl font-extrabold mb-4">Past Trips</h3>

          {past.length === 0 ? (
            <p className="text-gray-500">No past trips.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {past.map((b) => (
                <div
                  key={b.bookingId}
                  className="bg-white rounded-3xl border shadow-lg p-6"
                >
                  <img
                    src={b.image}
                    className="w-full h-48 rounded-xl object-cover"
                  />
                  <h4 className="text-xl font-bold mt-3">{b.title}</h4>
                  <p className="text-gray-600">{b.date}</p>
                  <p className="text-gray-700 mt-2">
                    {b.travellers} Travellers
                  </p>
                  <p className="text-green-600 font-bold mt-2">
                    ₹{b.total.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* ========= CANCELLED TRIPS ========= */}
      {tab === "cancelled" && (
        <motion.div key="cancelled" {...tabAnimation} className="mt-10">
          <h3 className="text-2xl font-extrabold mb-4">Cancelled Trips</h3>

          {cancelled.length === 0 ? (
            <p className="text-gray-500">No cancelled trips.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {cancelled.map((b) => (
                <div
                  key={b.bookingId}
                  className="bg-red-50 border border-red-300 rounded-3xl p-6 shadow"
                >
                  <img
                    src={b.image}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <h4 className="text-xl font-bold mt-3">{b.title}</h4>
                  <p className="text-red-600 font-semibold mt-2">Cancelled</p>
                  <p className="text-gray-600">{b.date}</p>
                  <p className="text-gray-700 mt-2">
                    {b.travellers} Travellers
                  </p>
                  <p className="text-green-600 font-bold mt-2">
                    ₹{b.total.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* ========= WISHLIST ========= */}
      {tab === "wishlist" && (
        <motion.div key="wishlist" {...tabAnimation} className="mt-10">
          <h3 className="text-2xl font-extrabold mb-4">Wishlist</h3>

          {wishlistState.length === 0 ? (
            <div className="text-gray-500 bg-white p-10 text-center rounded-3xl border shadow-inner">
              No wishlist items yet.
              <Link
                className="text-blue-600 underline ml-1"
                to="/destinations"
              >
                Explore →
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {wishlistState.map((item) => (
                <Link key={item.id} to={`/trip/${item.id}`}>
                  <div className="bg-white rounded-3xl border shadow-lg overflow-hidden hover:scale-[1.02] transition">
                    <img
                      src={item.image}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.location}</p>

                      <div className="flex justify-between items-center mt-4">
                        <p className="text-green-600 font-bold">
                          ₹{item.price}
                        </p>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            removeWish(item.id);
                          }}
                          className="text-red-500 font-semibold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
