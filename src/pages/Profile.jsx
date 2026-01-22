import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useMemo,
} from "react";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  Trash2,
  Edit3,
  Heart,
  Clock,
  User,
} from "lucide-react";

import { getWishlist, removeFromWishlist } from "../utils/wishlist";

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState("profile");
  const [wishlistState, setWishlistState] = useState([]);

  // ✅ Memoized tab refs (FIXES hook dependency error)
  const tabRefs = useMemo(
    () => ({
      profile: React.createRef(),
      upcoming: React.createRef(),
      wishlist: React.createRef(),
    }),
    []
  );

  const underlineRef = useRef(null);

  useLayoutEffect(() => {
    const activeTab = tabRefs[tab]?.current;
    const underline = underlineRef.current;

    if (activeTab && underline) {
      underline.style.left = `${activeTab.offsetLeft}px`;
      underline.style.width = `${activeTab.offsetWidth}px`;
    }
  }, [tab, tabRefs]);

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

    toast.success("Removed from wishlist");
  }

  const tabAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.35 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">
      {/* TAB NAV */}
      <div className="relative flex gap-10 border-b pb-3">
        {[
          { id: "profile", label: "Profile", icon: <User size={18} /> },
          { id: "upcoming", label: "Upcoming", icon: <Clock size={18} /> },
          { id: "wishlist", label: "Wishlist", icon: <Heart size={18} /> },
        ].map((t) => (
          <button
            key={t.id}
            ref={tabRefs[t.id]}
            onClick={() => setTab(t.id)}
            className={`pb-2 flex items-center gap-2 font-semibold ${
              tab === t.id
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}

        <motion.div
          ref={underlineRef}
          className="absolute bottom-0 h-[3px] bg-blue-600 rounded-full"
        />
      </div>

      {/* PROFILE */}
      {tab === "profile" && (
        <motion.div {...tabAnimation} className="mt-10 bg-white rounded-3xl shadow-xl p-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative">
              <img
                src={user.avatar}
                alt={`${user.name}'s profile`}
                className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full">
                <Edit3 size={18} />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-extrabold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>

              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl"
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    toast.success("Logged out");
                    signOut();
                    setTimeout(() => navigate("/"), 300);
                  }}
                  className="px-6 py-2 bg-red-500 text-white rounded-xl"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* UPCOMING */}
      {tab === "upcoming" && (
        <motion.div {...tabAnimation} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcoming.length === 0 ? (
            <p className="text-gray-500">No upcoming trips.</p>
          ) : (
            upcoming.map((b) => (
              <div key={b.bookingId} className="bg-white rounded-3xl shadow p-6">
                <img
                  src={b.image}
                  alt={b.title}
                  className="h-48 w-full rounded-xl object-cover"
                />
                <h4 className="mt-3 text-xl font-bold">{b.title}</h4>
                <button
                  onClick={() => cancelBooking(b.bookingId)}
                  className="mt-4 w-full bg-red-100 text-red-600 py-2 rounded-xl font-bold"
                >
                  <Trash2 size={16} /> Cancel
                </button>
              </div>
            ))
          )}
        </motion.div>
      )}

      {/* WISHLIST */}
      {tab === "wishlist" && (
        <motion.div {...tabAnimation} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistState.map((item) => (
            <Link key={item.id} to={`/trip/${item.id}`}>
              <div className="bg-white rounded-3xl shadow overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeWish(item.id);
                    }}
                    className="text-red-500 font-semibold mt-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
