import { motion } from "framer-motion";
import { FaClipboardList, FaRoute, FaRegSmileBeam } from "react-icons/fa";

export default function OurApproach() {
  return (
    <section className="relative w-full py-20 sm:py-24 bg-white overflow-hidden">

      {/* Premium ambient background */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 left-1/2 -translate-x-1/2
                   w-[1000px] h-[1000px] bg-blue-200/40
                   blur-[180px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ---------------- Brand Heading ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <span className="block mb-6 text-sm tracking-[0.4em] uppercase text-blue-700 font-semibold">
            Anand Yatra
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800">
            Introducing Anand Yatra
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="mx-auto mt-6 h-[3px] bg-blue-300 rounded-full"
          />

          <p className="mt-10 text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            At Anand Yatra, we believe travel should feel effortless, clear, and
            perfectly organized. Our team takes complete responsibility for
            planning your entire journey — from booking your travel tickets to
            arranging hotels or homestays — ensuring a seamless and stress-free
            experience from start to finish.
          </p>
        </motion.div>

        {/* ---------------- Core Value Highlights ---------------- */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-20">

          {[
            {
              icon: <FaClipboardList />,
              title: "End-to-End Travel Planning",
              desc: `We manage every detail of your journey so you never have to
              coordinate multiple bookings or worry about what comes next.`,
            },
            {
              icon: <FaRoute />,
              title: "Personalized Itineraries",
              desc: `Each itinerary is carefully crafted with travel routes,
              accommodation options, timings, and important highlights to
              ensure a smooth and logical travel flow.`,
            },
            {
              icon: <FaRegSmileBeam />,
              title: "Seamless Coordination",
              desc: `Whether you are visiting a single destination or traveling
              across multiple locations, your journey unfolds with complete
              coordination and clarity.`,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: i * 0.15,
              }}
              className="text-center"
            >
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-blue-700 text-4xl mb-6 flex justify-center"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold text-blue-900">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ---------------- Brand Promise ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="mt-32 text-center"
        >
          <p className="text-2xl sm:text-3xl font-semibold text-blue-900">
            Travel becomes easier. Experiences become richer.
          </p>
          <p className="mt-5 text-gray-600 text-xl max-w-3xl mx-auto">
            With Anand Yatra, every day of your journey is thoughtfully planned,
            clearly structured, and truly memorable.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
