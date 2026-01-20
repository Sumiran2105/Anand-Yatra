import { ClipboardList, Map, CheckCircle, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Share Your Requirements",
    desc: "Tell us your destinations, travel dates, preferences, and expectations.",
    icon: ClipboardList,
    color: "blue",
  },
  {
    step: "02",
    title: "We Design Your Plan",
    desc: "Our team creates a clear, personalized itinerary covering routes, stays, and timing.",
    icon: Map,
    color: "emerald",
  },
  {
    step: "03",
    title: "Confirm & Coordinate",
    desc: "Once approved, we handle bookings and coordinate every detail seamlessly.",
    icon: CheckCircle,
    color: "violet",
  },
  {
    step: "04",
    title: "Travel with Confidence",
    desc: "Your journey unfolds smoothly with clarity, comfort, and dedicated support.",
    icon: PlaneTakeoff,
    color: "orange",
  },
];

export default function JourneyTimeline() {
  return (
        <section className="relative w-full py-20 sm:py-14 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm tracking-widest uppercase text-blue-600 font-medium">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 text-center mb-12">
            Your Journey, Step by Step
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A clear and structured process designed to keep your travel smooth,
            organized, and completely stress-free.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map(({ step, title, desc, icon: Icon, color }) => (
            <div
              key={step}
              className="group relative bg-gray-50 rounded-2xl p-6 border border-gray-100 
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className={`h-14 w-14 rounded-xl flex items-center justify-center mb-5
                bg-${color}-100 text-${color}-600 group-hover:scale-110 transition`}
              >
                <Icon size={26} />
              </div>

              {/* Step */}
              <div className="text-sm font-semibold text-gray-400 mb-2">
                Step {step}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {desc}
              </p>

              {/* Hover Accent */}
              <span
                className={`absolute inset-x-0 bottom-0 h-1 rounded-b-2xl 
                bg-${color}-500 opacity-0 group-hover:opacity-100 transition`}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
