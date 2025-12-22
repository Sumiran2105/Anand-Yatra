import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Modal content for travel and pilgrimage services
  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">
            At <strong>Anand Yatra</strong>, we are committed to protecting your privacy and ensuring the security of your personal information while you explore spiritual journeys and pilgrimage tours with us.
          </p>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Information We Collect</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li><strong>Personal Information:</strong> Name, email, phone number, date of birth for booking purposes</li>
            <li><strong>Travel Details:</strong> Destination preferences, travel dates, accommodation requirements</li>
            <li><strong>Payment Information:</strong> Secure payment details for trip bookings</li>
            <li><strong>Health Information:</strong> Medical conditions or special requirements for pilgrimage tours</li>
            <li><strong>Usage Data:</strong> Website interaction data to improve your travel planning experience</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">How We Use Your Information</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Process and manage your pilgrimage tour bookings</li>
            <li>Send travel itineraries, spiritual guidance, and trip updates</li>
            <li>Provide personalized travel recommendations for sacred destinations</li>
            <li>Ensure your safety and comfort during spiritual journeys</li>
            <li>Communicate important travel advisories and destination information</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Data Sharing</h3>
          <p class="text-gray-700 text-base leading-relaxed">
            We only share necessary information with:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Accommodation partners at pilgrimage sites</li>
            <li>Transportation providers for your journey</li>
            <li>Local guides and spiritual advisors</li>
            <li>Government authorities for travel permits and documentation</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Data Security</h3>
          <p class="text-gray-700 text-base leading-relaxed">
            We implement robust security measures including encryption, secure servers, and regular audits to protect your travel and personal data.
          </p>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Your Rights</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Access and review your personal information</li>
            <li>Update or correct your travel preferences</li>
            <li>Request deletion of your account data</li>
            <li>Opt-out of promotional communications</li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mt-6">
            For privacy-related inquiries, contact our Data Protection Officer at:
            <span class="text-blue-700 font-medium ml-1">privacy@anandyatra.com</span>
          </p>

          <p class="text-gray-500 text-sm mt-4">
            Last updated: ${currentYear}
          </p>
        </div>
      `,
    },

    terms: {
      title: "Terms & Conditions",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">
            Welcome to <strong>Anand Yatra</strong>. By booking our pilgrimage tours and travel services, you agree to these terms and conditions.
          </p>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Booking & Reservations</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>All bookings are subject to availability and confirmation</li>
            <li>Full payment or deposit required to secure reservations</li>
            <li>Prices may vary based on season, accommodation type, and group size</li>
            <li>Special requirements for pilgrimage sites must be communicated in advance</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Traveler Responsibilities</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Provide accurate personal information and travel documents</li>
            <li>Carry valid ID proof, pilgrimage permits, and necessary visas</li>
            <li>Follow dress codes and behavior guidelines at religious sites</li>
            <li>Respect local customs, traditions, and spiritual practices</li>
            <li>Inform about health conditions affecting travel to high-altitude pilgrimage sites</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Cancellation Policy</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Cancellations 30+ days before departure: 90% refund</li>
            <li>Cancellations 15-29 days before departure: 50% refund</li>
            <li>Cancellations 7-14 days before departure: 25% refund</li>
            <li>Cancellations less than 7 days: No refund</li>
            <li>Special pilgrimage seasons may have different cancellation terms</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Travel Insurance</h3>
          <p class="text-gray-700 text-base leading-relaxed">
            We strongly recommend comprehensive travel insurance covering medical emergencies, trip cancellation, and loss of personal belongings during pilgrimage tours.
          </p>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Force Majeure</h3>
          <p class="text-gray-700 text-base leading-relaxed">
            Anand Yatra is not liable for circumstances beyond our control including natural disasters, political unrest, religious festival changes, or transportation disruptions affecting pilgrimage schedules.
          </p>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Liability Limitations</h3>
          <p class="text-gray-700 text-base leading-relaxed">
            Our liability is limited to the cost of the tour package. We are not responsible for personal injuries, loss of belongings, or additional expenses incurred during travel.
          </p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">
            Continued use of our services signifies acceptance of all terms.
          </p>
        </div>
      `,
    },

    copyright: {
      title: "Copyright Notice",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">
            All content on the <strong>Anand Yatra</strong> platform is protected by copyright and intellectual property laws.
          </p>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Protected Content Includes</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Pilgrimage tour itineraries and spiritual journey plans</li>
            <li>Destination descriptions, travel guides, and cultural insights</li>
            <li>Photography from sacred sites and pilgrimage destinations</li>
            <li>Website design, layout, and user interface elements</li>
            <li>Branding materials, logos, and promotional content</li>
            <li>Custom travel packages and curated spiritual experiences</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Permitted Use</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Personal travel planning and pilgrimage preparation</li>
            <li>Sharing itinerary information with travel companions</li>
            <li>Educational and non-commercial religious purposes</li>
            <li>Reference for spiritual journey planning</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Prohibited Activities</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Commercial reproduction or resale of our travel content</li>
            <li>Creating derivative works based on our pilgrimage itineraries</li>
            <li>Using our brand name or logos without written permission</li>
            <li>Scraping or automated collection of our destination data</li>
            <li>Misrepresenting association with Anand Yatra</li>
          </ul>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Trademark Information</h3>
          <p class="text-gray-700 text-base leading-relaxed">
            "Anand Yatra", our logo, and all related branding elements are registered trademarks. Unauthorized use is strictly prohibited.
          </p>

          <h3 class="font-bold text-blue-800 text-lg mt-6 mb-3">Content Licensing</h3>
          <p class="text-gray-700 text-base leading-relaxed">
            For licensing inquiries, partnership opportunities, or content usage permissions, please contact:
            <span class="text-blue-700 font-medium ml-1">licensing@anandyatra.com</span>
          </p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">
            © ${currentYear} Anand Yatra. All rights reserved worldwide.
          </p>
        </div>
      `,
    },
  };

  return (
    <>
      <footer className="bg-blue-900 text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          {/* Top grid: stacks on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8">
            {/* About / Brand */}
            <div className="footer-about">
              <div className="flex items-center space-x-3 mb-3">
                {/* Logo + Brand */}
                <div className="flex items-center sm:mr-0">
                  {/* Circular Logo */}
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 mr-3 overflow-hidden">
                      <img
                        src="assets/Anandlogo.jpeg"
                        alt="Anand Yatra Logo"
                        className="w-9 h-9 sm:w-12 sm:h-12 object-contain"
                      />
                    </div>
                  </div>

                  {/* Brand text */}
                  <Link
                    to="/"
                    className="hover:opacity-90 transition-opacity duration-300"
                  >
                    <div>
                      <span className="sm:text-md lg:text-lg font-bold">
                        <span className="text-orange-500">ANAND</span> YATRA
                      </span>
                      <p className="text-gray-300 text-[10px] italic -mt-0.5">
                        "Dharmo Rakshati Rakshitah"
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
               At Anand Yatra, we design effortless, well-organized journeys across India. From booking flights and accommodations to creating personalized itineraries, we take complete responsibility for every detail.
              </p>

              <div className="social-links flex items-center space-x-3">
                {[
                  { Icon: FaFacebookF, url: "#", color: "hover:bg-blue-600" },
                  { Icon: FaTwitter, url: "#", color: "hover:bg-blue-400" },
                  { Icon: FaInstagram, url: "#", color: "hover:bg-pink-600" },
                  { Icon: FaYoutube, url: "#", color: "hover:bg-red-600" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.Icon.name}
                    className={`w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:text-white ${social.color} hover:-translate-y-1`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links  */}
            <div className="footer-links ml-4 md:ml-8">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                Quick Links
              </h3>
              <ul>
                {[
                  { path: "/", label: "Home" },
                  { path: "/destinations", label: "Destinations" },
                  { path: "/trips", label: "Packages" },
                  { path: "/about", label: "About" },
                  { path: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 no-underline block py-1 px-1 rounded-sm transition-all duration-200 hover:text-orange-400 hover:pl-2 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Best Trips */}
            <div className="footer-links ml-4 md:ml-8">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                Our Best Trips
              </h3>
              <ul>
                {[
                  { path: "/category/beaches", label: "Beaches" },
                  { path: "/category/mountains", label: "Mountains" },
                  { path: "/category/spiritual", label: "Spiritual" },
                  { path: "/category/luxury", label: "Luxury" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 no-underline block py-1 px-1 rounded-sm transition-all duration-200 hover:text-orange-400 hover:pl-2 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div className="footer-links">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                Connect
              </h3>
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    H.No. 131/A, 2nd Floor, MLA Colony,
                    <br />
                    Road No.12, Lane 14,
                    <br />
                    Banjara Hills, Hyderabad-500034
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">+91 1800 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">info@anandgroup.org
 </span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Developed by */}
          <div className="copyright pt-3 border-t border-blue-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              {/* Left Side */}
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {currentYear} Anand Yatra. All rights reserved.
              </p>

              {/* Center - Policy Links */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <button
                  onClick={() => openModal("privacy")}
                  className="text-gray-400 no-underline transition-colors duration-200 hover:text-orange-400 cursor-pointer bg-transparent border-none"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openModal("terms")}
                  className="text-gray-400 no-underline transition-colors duration-200 hover:text-orange-400 cursor-pointer bg-transparent border-none"
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => openModal("copyright")}
                  className="text-gray-400 no-underline transition-colors duration-200 hover:text-orange-400 cursor-pointer bg-transparent border-none"
                >
                  Copyright
                </button>
              </div>

              {/* Right Side - Developed By */}
              <p className="text-gray-400 text-sm text-center md:text-right">
                Designed by{" "}
                <a
                  href="https://designcareermetrics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 font-semibold hover:underline"
                >
                  Design Career Metrics
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Popups */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                {modalContent[activeModal].title}
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 text-gray-600 hover:text-gray-800"
                aria-label="Close"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 p-6 overflow-y-auto border-t border-gray-100">
              <div
                dangerouslySetInnerHTML={{
                  __html: modalContent[activeModal].content,
                }}
                className="prose prose-sm max-w-none"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-gray-100">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
