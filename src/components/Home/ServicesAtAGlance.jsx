import { Plane, Hotel, Map, Layers, Headphones } from "lucide-react";

export default function ServicesAtAGlance() {
  return (
    <section className="relative w-full py-20 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From planning to coordination, we manage every aspect of your journey
            so travel feels effortless and well-organized.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">

          <ServiceCard
            icon={<Plane size={26} />}
            title="Travel Bookings"
            desc="Flights and trains booked with precision and convenience."
          />

          <ServiceCard
            icon={<Hotel size={26} />}
            title="Stay Arrangements"
            desc="Comfortable hotels or homestays selected to match your needs."
          />

          <ServiceCard
            icon={<Map size={26} />}
            title="Custom Itineraries"
            desc="Clear, personalized plans with routes, timings, and highlights."
          />

          <ServiceCard
            icon={<Layers size={26} />}
            title="Multi-City Planning"
            desc="Smooth coordination across single or multiple destinations."
          />

          <ServiceCard
            icon={<Headphones size={26} />}
            title="On-Trip Support"
            desc="Dedicated assistance to ensure everything runs smoothly."
          />

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group bg-white/70 backdrop-blur-xl rounded-3xl 
                    p-6 sm:p-7 border border-white/40 
                    shadow-lg hover:shadow-2xl transition-all duration-300">
      
      <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 
                      flex items-center justify-center mb-5">
        {icon}
      </div>

      <h3 className="font-semibold text-gray-900 text-lg mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

