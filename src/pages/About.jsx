import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapSigns,
  FaSuitcaseRolling,
  FaShieldAlt,
  FaGlobeAsia,
  FaCouch,
  FaHeadset,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutFounder() {
  return (
    <div className="pt-18">
      {/* =======================
           HERO SECTION - Mobile Optimized
      ========================== */}
      <motion.section
        className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Journey with Purpose,
            <span className="block text-yellow-400 mt-1 sm:mt-2 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Travel with Heart
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed px-2"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            Discover the soul of India through meaningful journeys crafted with devotion,
            trust, and cultural reverence
          </motion.p>
             <Link to="/contact">
          <motion.button
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Journey
          </motion.button></Link>
        </div>
      </motion.section>

      {/* =======================
          1. ABOUT FOUNDER - Mobile Optimized
      ========================= */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-5 pt-16 sm:pt-20 md:pt-24 lg:pt-32 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.div
          className="flex items-center gap-4 mb-8 sm:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 text-center w-full">
            About Our Founder
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Founder Image */}
          <motion.div
            className="flex justify-center order-2 md:order-1"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/assets/founder.jpg"
                alt="Founder"
                className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl w-full max-w-sm sm:max-w-md object-cover border-4 border-blue-200"
              />
              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-yellow-500 text-blue-900 px-4 py-2 sm:px-6 sm:py-2 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="font-bold text-xs sm:text-sm">Shri Anand Sharma</p>
                <p className="text-xs">Founder & Visionary</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Founder Text */}
          <motion.div
            className="flex flex-col justify-center order-1 md:order-2"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
  Anand Yatra was built on a foundation of trust, reliability, and a strong
  commitment to delivering well-organized travel experiences. Our founder,
  <span className="text-blue-700 font-semibold"> Shri Anand Sharma </span>,
  envisioned a travel service that goes far beyond transportation one that
  creates confidence, builds lasting relationships, and ensures every journey
  is smooth, thoughtful, and worry free.
</p>

<p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
  Guided by a clear philosophy of responsibility and precision, he believes
  that travel is not just movement from one place to another — it is about
  careful planning, seamless execution, and making every traveler feel secure
  at every stage of the journey. This approach forms the core of Anand Yatra.
</p>

<p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
  With decades of experience, he has transformed countless trips into smooth
  and memorable travel experiences. His vision is to ensure that every
  traveler whether on a family vacation, group tour, or multi destination
  journey feels supported, respected, and genuinely cared for.
</p>

<p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
  Today, Anand Yatra stands strong because of his commitment to honesty,
  quality, and service excellence. Under his leadership, the team continues
  to design journeys that blend comfort, clarity, reliability, and thoughtful
  planning into truly unforgettable travel experiences.
</p>


            <motion.p
              className="mt-4 sm:mt-6 text-gray-800 font-semibold text-lg sm:text-xl bg-yellow-100 p-3 sm:p-4 rounded-xl shadow-md border-l-4 border-yellow-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "Travel is not just about visiting places,it is about touching lives,
              discovering purpose, and connecting with the divine."
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* =======================
          2. WHY CHOOSE ANAND YATRA - Mobile Optimized
      ========================== */}
      <motion.section
        className="bg-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose Anand Yatra?
        </motion.h2>

        <motion.p
          className="text-center mt-3 sm:mt-4 text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          We combine spirituality, comfort, and trust to deliver a travel experience
          that is meaningful, safe, and unforgettable.
        </motion.p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-14">
  {[
    {
      icon: <FaMapSigns />,
      title: "Expert Trip Guidance",
      desc: "Our experienced travel planners guide you with transparent details and proper support.",
      border: "border-blue-500",
      hover: "hover:shadow-blue-200",
    },
    {
      icon: <FaSuitcaseRolling />,
      title: "Customizable Packages",
      desc: "Select from budget, premium, and family packages — tailored to your needs.",
      border: "border-yellow-400",
      hover: "hover:shadow-yellow-200",
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Safety Assurance",
      desc: "Verified stays, safe transport, and well-planned routes for a stress-free journey.",
      border: "border-emerald-500",
      hover: "hover:shadow-emerald-200",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Heritage & Cultural Travel",
      desc: "Explore the spiritual, cultural, and historical wonders of India in a guided way.",
      border: "border-orange-500",
      hover: "hover:shadow-orange-200",
    },
    {
      icon: <FaCouch />,
      title: "Comfort-Focused Travel",
      desc: "Clean hotels, smooth travel, and a comfortable experience from start to finish.",
      border: "border-purple-500",
      hover: "hover:shadow-purple-200",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Dedicated Support",
      desc: "A dedicated team always available for help during your trip — anytime, anywhere.",
      border: "border-pink-500",
      hover: "hover:shadow-pink-200",
    },
  ].map((card, index) => (
    <motion.div
      key={index}
      className={`bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border-t-4 ${card.border}
      transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 ${card.hover} hover:shadow-xl`}
      variants={fadeUp}
      custom={index * 0.3}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 text-blue-700">
        {card.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-blue-700">
        {card.title}
      </h3>
      <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
        {card.desc}
      </p>
    </motion.div>
  ))}
</div>

      </motion.section>

      {/* =======================
           3. OUR MISSION - Mobile Optimized
      ========================== */}
      <motion.section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Mission
        </motion.h2>

        <motion.p
          className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto px-2"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          At Anand Yatra, our mission is to create journeys that go beyond sightseeing
          journeys that awaken emotion, connect you to culture, and leave you with
          memories that last a lifetime.
        </motion.p>

        <motion.p
          className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto px-2"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          We aim to blend spirituality, heritage, comfort, and trust into every travel experience,
          ensuring every traveler feels safe, valued, and enriched.
        </motion.p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Enrich Lives",
              desc: "Craft meaningful journeys filled with culture and connection.",
              border: "border-blue-500",
              color: "text-blue-600",
            },
            {
              title: "Build Trust",
              desc: "Deliver safe, transparent, and reliable travel services.",
              border: "border-yellow-500",
              color: "text-yellow-600",
            },
            {
              title: "Promote Heritage",
              desc: "Celebrate India's spiritual and cultural legacy.",
              border: "border-orange-500",
              color: "text-orange-600",
            },
            {
              title: "Ensure Comfort",
              desc: "We prioritize your safety, comfort, and peace of mind.",
              border: "border-purple-500",
              color: "text-purple-600",
            },
            {
              title: "Affordable Travel",
              desc: "Quality experiences designed for every budget.",
              border: "border-emerald-500",
              color: "text-emerald-600",
            },
            {
              title: "Inspire Exploration",
              desc: "Encourage travellers to discover, learn, and grow.",
              border: "border-pink-500",
              color: "text-pink-600",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`bg-white p-4 sm:p-6 shadow-md rounded-xl border-l-4 ${card.border}
              transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] sm:hover:scale-[1.03]`}
              variants={fadeUp}
              custom={index * 0.25}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className={`text-lg sm:text-xl font-semibold ${card.color}`}>{card.title}</h4>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}