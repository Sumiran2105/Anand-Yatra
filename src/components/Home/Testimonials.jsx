import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Anand Yatra handled every detail of our trip with absolute precision. Everything was perfectly coordinated, making travel completely stress-free.",
    name: "Rohit Mehta",
    location: "Bengaluru",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "What stood out was the clarity and organization. Every day was structured beautifully, and accommodations were exactly as promised.",
    name: "Neha Kapoor",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "The team was responsive and proactive throughout. Even small details were thoughtfully planned. Truly reliable service.",
    name: "Suresh Iyer",
    location: "Chennai",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

export default function GlassTestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      6500
    );
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative w-full py-8 sm:py-6 bg-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-100/40 blur-3xl rounded-full mt-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm tracking-widest uppercase text-blue-600 font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 text-center mb-12">
            Experiences Shared by Our Travelers
          </h2>
        </motion.div>

        {/* Card */}
        <div className="mt-16 relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mx-auto max-w-3xl rounded-3xl border border-white/30
                         bg-white/40 backdrop-blur-xl shadow-xl p-10 sm:p-12"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <img
                  src={current.image}
                  alt={current.name}
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-md"
                />
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                “{current.quote}”
              </p>

              {/* Name */}
              <div className="mt-6">
                <p className="font-semibold text-gray-900 text-lg">
                  {current.name}
                </p>
                <p className="text-sm text-gray-600">
                  {current.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-gray-900 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
