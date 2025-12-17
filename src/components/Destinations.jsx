import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../utils/wishlist";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const hoverCard = {
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function Destinations() {
  const [wishlistIds, setWishlistIds] = useState([]);

  // Load wishlist
  useEffect(() => {
    const list = getWishlist().map((item) => String(item.id));
    setWishlistIds(list);

    const updateHandler = () => {
      setWishlistIds(getWishlist().map((item) => String(item.id)));
    };

    window.addEventListener("wishlistUpdated", updateHandler);
    return () => window.removeEventListener("wishlistUpdated", updateHandler);
  }, []);

  const toggleWishlist = (category) => {
    const id = String(category.id);

    if (wishlistIds.includes(id)) {
      removeFromWishlist(id);
      toast.error("Removed from Wishlist 💔");
    } else {
      addToWishlist({
        id: id,
        title: category.title,
        image: category.image,
        location: `${category.title} Destinations`,
        price: null,
      });
      toast.success("Added to Wishlist ❤️");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <motion.section
        className="pt-28 pb-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <motion.div
            className="md:w-2/3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="uppercase tracking-[0.2em] text-blue-200 text-xs sm:text-sm mb-3 font-semibold"
              variants={fadeUp}
              custom={0}
            >
              curated getaways · handpicked for you
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              variants={fadeUp}
              custom={1}
            >
              Discover{" "}
              <span className="text-amber-300">
                your next escape
              </span>{" "}
              by category.
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl font-semibold"
              variants={fadeUp}
              custom={2}
            >
              Beach vibes, mountain views or city lights – browse destinations
              by category and start planning trips that match your travel mood.
            </motion.p>

            {/* Small stats / badges */}
            <motion.div
              className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm"
              variants={fadeUp}
              custom={3}
            >
              <motion.span
                className="px-3 py-1 rounded-full bg-blue-800/60 border border-blue-500/60 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ✈️ Instant inspiration
              </motion.span>
              <motion.span
                className="px-3 py-1 rounded-full bg-blue-800/60 border border-blue-500/60 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                💙 Save to wishlist
              </motion.span>
              <motion.span
                className="px-3 py-1 rounded-full bg-blue-800/60 border border-blue-500/60 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                🌍 Curated categories
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="md:w-1/3 w-full"
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white/10 border border-white/20 rounded-2xl p-5 shadow-xl backdrop-blur"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Start exploring now
              </h3>
              <p className="text-blue-100 text-sm mb-4 font-semibold">
                Pick any category below, view places inside it and add your
                favorites to wishlist instantly.
              </p>
              <ul className="text-sm space-y-2 text-blue-100">
                <li className="font-semibold">• Tap the heart icon to save a category</li>
                <li className="font-semibold">• Click "View Places" to see all spots inside</li>
                <li className="font-semibold">• Visit Wishlist anytime to manage saved trips</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* DESTINATION GRID SECTION */}
      <motion.div
        className="max-w-7xl mx-auto px-5 pb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 text-center mt-12 mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Explore Destinations by Category
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {Object.values(destinations).map((cat, index) => {
            const inWish = wishlistIds.includes(String(cat.id));

            return (
              <motion.div
                key={cat.id}
                className="relative group"
                variants={cardVariant}
                custom={index}
                whileHover="hover"
              >
                {/* Wishlist Button */}
                <motion.button
                  onClick={() => toggleWishlist(cat)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow z-20 hover:scale-110 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart
                    className={`w-6 h-6 ${
                      inWish ? "text-red-500 fill-red-500" : "text-gray-600"
                    }`}
                  />
                </motion.button>

                <Link to={`/category/${cat.id}`}>
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    variants={hoverCard}
                  >
                    {/* Category Image */}
                    <motion.div className="h-52 w-full overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>

                    {/* Body */}
                    <div className="p-5">
                      <h3 className="text-2xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors duration-200">
                        {cat.title}
                      </h3>

                      <p className="text-gray-600 mt-2 font-semibold">
                        {cat.destinations.length} Places
                      </p>

                      <motion.button
                        className="mt-5 w-full py-2.5 bg-blue-800 hover:bg-blue-700 text-white rounded-xl font-semibold shadow transition-all duration-200"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        View Places
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}