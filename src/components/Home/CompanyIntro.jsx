import React from "react";
import { FaPlaneDeparture, FaHotel, FaRoute, FaSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaPlaneDeparture />,
    title: "End-to-End Travel Planning",
    desc: "From flight bookings to local transfers, we handle every detail so you can relax and enjoy your journey.",
  },
  {
    icon: <FaHotel />,
    title: "Handpicked Stays",
    desc: "Carefully selected hotels and homestays that match your comfort, budget, and travel style.",
  },
  {
    icon: <FaRoute />,
    title: "Personalized Itineraries",
    desc: "Well-structured day-by-day plans with routes, timings, experiences, and must-see highlights.",
  },
  {
    icon: <FaSmile />,
    title: "Stress-Free Experience",
    desc: "No confusion, no last-minute worries. Your trip unfolds smoothly with complete coordination.",
  },
];

const CompanyIntro = () => {
  return (
    <section className="relative w-full py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 text-center mb-12">
Why Traveling With Us Feels Effortless
</h2>
<p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
  From planning to coordination, we manage every detail so your journey feels smooth, organized, and stress-free.
</p>
        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center border border-slate-100"
            >
              <div className="text-3xl text-sky-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
