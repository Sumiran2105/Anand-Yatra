import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeBanner() {
  // Background images (You can add more)
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80&auto=format&fit=crop"
  ];

  const [index, setIndex] = useState(0);

  // Auto change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[280px] xs:h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl -mt-3 mx-4 sm:mx-6">

      {/* ========== BACKGROUND CAROUSEL ========== */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70 sm:from-black/20 sm:via-black/60 sm:to-black/80"></div>

      {/* ========== CENTER TEXT CONTENT - MOBILE OPTIMIZED ========== */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-5 pt-8 sm:pt-12 md:pt-16 lg:pt-20">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 sm:from-blue-500 sm:to-yellow-500 bg-clip-text text-transparent text-center drop-shadow w-full leading-tight sm:leading-normal"
        >
          Discover Your Next Journey with Anand Yatra
        </motion.h1>

        <div className="w-16 xs:w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto my-3 sm:my-4 rounded-full"></div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="text-white/90 text-xs xs:text-sm sm:text-base md:text-lg max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl leading-relaxed px-2"
        >
          Unique experiences, breathtaking destinations, curated itineraries, and packages specially for you.
        </motion.p>
        
        <Link to="/trips" className="mt-4 sm:mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full shadow-lg text-sm sm:text-base transition-colors duration-200"
          >
            Explore Trips
          </motion.button>
        </Link>
      </div>

    </section>
  );
}