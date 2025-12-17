import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactPremium() {
  const [showPopup, setShowPopup] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [apiError, setApiError] = useState(null);

  const faqs = [
    {
      q: "How do I book a travel package?",
      a: "You can book a package by contacting us or using our booking page. We'll guide you through the process and confirm availability."
    },
    {
      q: "Can I customize my itinerary?",
      a: "Absolutely — we build custom itineraries to match your budget, interests and travel dates. Share your preferences in the message field."
    },
    {
      q: "What is the cancellation policy?",
      a: "Cancellation terms vary by package. Please contact support with your booking details and we'll advise on refunds or credits."
    },
    {
      q: "How fast do you respond?",
      a: "Typical response time is within minutes during working hours. For urgent help use WhatsApp (fastest) or call our emergency line."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // ✅ Formik + Yup validation
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().required("Please tell us your travel preferences")
  });

  const toggleFAQ = (i) => setFaqOpen(faqOpen === i ? null : i);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
          >
            Plan Your
            <span className="block text-yellow-400 mt-1 md:mt-2">
              Perfect Journey
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Discover unforgettable experiences with Anand Yatra - Your trusted
            travel partner for customized adventures
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 -mt-8 md:-mt-10 relative z-10">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-4 sm:p-6 md:p-8">
          {/* Heading */}
          <header className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 md:mb-3">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Ready to embark on your next adventure? Reach out for
              personalized travel planning, bookings, or any travel-related
              queries.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* ✅ FORM: Formik + axios */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100"
              aria-label="Contact form"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                  Plan Your Journey
                </h2>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Fast response</span>
                </div>
              </div>

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  message: ""
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  setApiError(null);

                  // Map to backend model fields
                  const payload = {
                    full_name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message
                  };

                  // 👀 Always log to console
                  console.log("📌 Yatra inquiry payload:", payload);

                  try {
                    // 🌐 Dummy axios endpoint for now
                    const res = await axios.post(
                      "https://jsonplaceholder.typicode.com/posts",
                      payload,
                      {
                        headers: {
                          "Content-Type": "application/json"
                        }
                      }
                    );

                    console.log("🎯 Dummy backend response:", res.data);

                    // Success UI (popup)
                    setShowPopup(true);
                    resetForm();
                    setTimeout(() => setShowPopup(false), 3000);
                  } catch (error) {
                    console.error("❌ Error submitting Yatra form:", error);
                    setApiError(
                      "Failed to send your enquiry. Please try again."
                    );
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-3 md:space-y-4">
                    {/* Full name */}
                    <label className="block">
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        Full name
                      </span>
                      <Field
                        type="text"
                        name="name"
                        className="mt-1 w-full rounded-lg md:rounded-xl border border-gray-200 p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                        placeholder="Your name"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="mt-1 text-xs text-red-600"
                      />
                    </label>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <label className="block">
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          Email
                        </span>
                        <Field
                          type="email"
                          name="email"
                          className="mt-1 w-full rounded-lg md:rounded-xl border border-gray-200 p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                          placeholder="mail@example.com"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="mt-1 text-xs text-red-600"
                        />
                      </label>

                      <label className="block">
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          Phone
                        </span>
                        <Field
                          type="tel"
                          name="phone"
                          className="mt-1 w-full rounded-lg md:rounded-xl border border-gray-200 p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                          placeholder="+91 98765 43210"
                        />
                        <ErrorMessage
                          name="phone"
                          component="p"
                          className="mt-1 text-xs text-red-600"
                        />
                      </label>
                    </div>

                    {/* Message */}
                    <label className="block">
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        Travel Preferences
                      </span>
                      <Field
                        as="textarea"
                        name="message"
                        className="mt-1 w-full rounded-lg md:rounded-xl border border-gray-200 p-2 sm:p-3 text-sm sm:text-base h-24 sm:h-28 focus:outline-none focus:ring-2 focus:ring-blue-200 transition resize-none"
                        placeholder="Tell us about your dream destination, travel dates, budget, and any special requirements..."
                      />
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="mt-1 text-xs text-red-600"
                      />
                    </label>

                    {/* API error (if any) */}
                    {apiError && (
                      <div className="p-2 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                        {apiError}
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 sm:py-3 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold shadow-lg transform transition hover:scale-105 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>
                        {isSubmitting ? "Sending..." : "Start Your Journey"}
                      </span>
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy — your travel plans are safe with
                      us.
                    </p>
                  </Form>
                )}
              </Formik>
            </motion.div>

            {/* Info card (unchanged) */}
            <motion.aside
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-blue-100"
            >
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                  Let's Create Memories
                </h3>

                <div className="space-y-3 md:space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg md:rounded-xl border border-blue-50 shadow-sm">
                    <div className="p-1 sm:p-2 rounded-md md:rounded-lg bg-blue-100 flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-gray-800">
                        Travel Helpline
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 break-words">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg md:rounded-xl border border-blue-50 shadow-sm">
                    <div className="p-1 sm:p-2 rounded-md md:rounded-lg bg-blue-100 flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-gray-800">
                        Email
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 break-words">
                        support@anandyatra.com
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg md:rounded-xl border border-blue-50 shadow-sm">
                    <div className="p-1 sm:p-2 rounded-md md:rounded-lg bg-blue-100 flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-gray-800">
                        Head Office
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg md:rounded-xl border border-blue-50 shadow-sm">
                    <div className="p-1 sm:p-2 rounded-md md:rounded-lg bg-blue-100 flex-shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-gray-800">
                        Travel Desk Hours
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                        Mon – Sun: 6 AM to 11 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <motion.div
                variants={itemVariants}
                className="text-center mt-4 md:mt-6"
              >
                <h4 className="text-base sm:text-lg font-semibold text-blue-800 mb-2 sm:mb-3 md:mb-4">
                  Follow Us On
                </h4>
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                  {[
                    {
                      Icon: Facebook,
                      href: "https://facebook.com",
                      bg: "bg-blue-600",
                      hover: "hover:bg-blue-700"
                    },
                    {
                      Icon: Instagram,
                      href: "https://instagram.com",
                      bg: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400",
                      hover: "hover:opacity-90"
                    },
                    {
                      Icon: Twitter,
                      href: "https://twitter.com",
                      bg: "bg-black",
                      hover: "hover:bg-gray-800"
                    },
                    {
                      Icon: Youtube,
                      href: "https://youtube.com",
                      bg: "bg-red-600",
                      hover: "hover:bg-red-700"
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.Icon.name}
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.bg} ${social.hover}`}
                    >
                      <social.Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.aside>
          </div>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto mt-8 md:mt-16 px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
              Travel Questions Answered
            </h2>
            <div className="space-y-2 md:space-y-3">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-50"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex items-center justify-between text-left gap-2 text-xs sm:text-sm md:text-base font-semibold text-gray-800"
                    aria-expanded={faqOpen === i}
                  >
                    <span className="text-left pr-2">{f.q}</span>
                    <span className="text-lg sm:text-xl text-blue-600 flex-shrink-0">
                      {faqOpen === i ? "−" : "+"}
                    </span>
                  </button>

                  {faqOpen === i && (
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {f.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl max-w-xs sm:max-w-sm w-full text-center">
            <h3 className="text-base sm:text-lg font-bold text-gray-800">
              Journey Planning Started!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
              Our travel expert will contact you shortly to discuss your
              adventure.
            </p>
          </div>
        </div>
      )}

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-4 bottom-4 sm:right-5 sm:bottom-5 z-50 rounded-full p-2 sm:p-3 shadow-lg bg-gradient-to-br from-green-500 to-teal-400 text-white transform transition hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
}
