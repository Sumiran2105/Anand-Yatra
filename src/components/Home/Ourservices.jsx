import React from "react";
import {
  FaClipboardCheck,
  FaHotel,
  FaMapMarkedAlt,
  FaBolt,
  FaClock,
  FaTags,
  FaStar,
  FaCameraRetro,
} from "react-icons/fa";

export default function FeaturesSection() {
 const cards = [
  {
    title: "Seamless Planning",
    desc: "Effortless travel arrangements from start to end.",
    icon: <FaClipboardCheck />,
    color: "#6366F1",
  },
  {
    title: "Comfort Hotels",
    desc: "Premium stays selected for relaxation and comfort.",
    icon: <FaHotel />,
    color: "#EC4899",
  },
  {
    title: "Guided Tours",
    desc: "Explore locations with the best certified guides.",
    icon: <FaMapMarkedAlt />,
    color: "#14B8A6",
  },
  {
    title: "Easy Booking",
    desc: "Book trips instantly with secure payment.",
    icon: <FaBolt />,
    color: "#F59E0B",
  },
  {
    title: "24/7 Support",
    desc: "We’re available anytime for your travel needs.",
    icon: <FaClock />,
    color: "#3B82F6",
  },
  {
    title: "Affordable Packages",
    desc: "Best travel deals crafted for every budget.",
    icon: <FaTags />,
    color: "#10B981",
  },
  {
    title: "Verified Experiences",
    desc: "Thousands of customers trust our service.",
    icon: <FaStar />,
    color: "#F43F5E",
  },
  {
    title: "Memorable Moments",
    desc: "Capture beautiful experiences with loved ones.",
    icon: <FaCameraRetro />,
    color: "#A855F7",
  },
];


  return (
    
   <section className="relative w-full py-15 sm:py-16 bg-white overflow-hidden">

      {/* HEADING WITH SAME COLORS YOU GAVE */}
     <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 text-center mb-12">
Why choose Anand Yatra?
</h2>


      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              p-6 rounded-2xl
              bg-white/70 backdrop-blur-xl
              border border-white/40 shadow-md
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl hover:bg-white
            "
          >
            {/* ICON + TITLE */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="p-3 rounded-full text-white text-2xl shadow"
                style={{ background: card.color }}
              >
                {card.icon}
              </span>

              <h4 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h4>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
