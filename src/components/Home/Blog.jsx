import React, { useState } from "react";

export default function Blog() {
  const blogs = [
    {
      title: "Explore the Magic of Bali",
      short: "Top 10 places you must visit in Bali for nature, beaches, and culture.",
      full: "Bali offers a perfect blend of adventure, spirituality, and relaxation. From the serene rice terraces of Ubud to the stunning cliffs of Uluwatu, every corner of Bali feels magical. Don't miss Balinese temples, local food, night markets, and breathtaking beaches.",
      img: "https://i.ytimg.com/vi/pLsc4S-sbac/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBO9K3WMILalL_NF7A_sa6AMtsNRA",
    },
    {
      title: "A Complete Thailand Travel Guide",
      short: "Budget-friendly travel ideas for Bangkok, Phuket & Pattaya.",
      full: "Thailand is the ultimate destination for vibrant nightlife, crystal beaches, and delicious food. Explore the floating markets, ancient temples, elephant sanctuaries, and thrilling island tours. Thailand is perfect for families, couples, and solo travelers.",
      img: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&w=1400&q=60",
    },
    {
      title: "Romantic Honeymoon Destinations",
      short: "Stunning locations around the world for newlyweds.",
      full: "A honeymoon is all about creating the most beautiful memories. From Maldives water villas to snowy Switzerland, couples can experience luxury, romance, and breathtaking views. Choose a package that fits your style—relaxing, adventurous, or a mix of both.",
      img: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&w=1400&q=60",
    },
    {
      title: "Dubai Luxury Travel",
      short: "Sky-high experiences and desert adventures await you in Dubai.",
      full: "Dubai is known for luxury shopping, futuristic skyscrapers, and massive attractions. Visit Burj Khalifa, desert safari, Dubai Frame, Miracle Garden, and luxury beaches. Dubai is perfect for families and honeymoon couples.",
      img: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&w=1400&q=60",
    },
    {
      title: "Best Hill Stations in India",
      short: "Shimla, Manali, Ooty & Munnar — the top mountains to explore.",
      full: "India has some of the best hill stations offering pleasant weather, beautiful landscapes, and cozy stays. Whether you want adventure or peace, hill stations provide the perfect escape from city life.",
      img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&w=1400&q=60",
    },
    {
      title: "Travel Tips for First-Time Travelers",
      short: "Essential packing, booking & safety tips.",
      full: "Traveling for the first time? Make sure to plan your itinerary, keep digital backups of documents, pack light, and choose respected travel services. Understanding local culture and food habits enhances your entire trip experience.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&w=1400&q=60",
    },
  ];

  const [activeBlog, setActiveBlog] = useState(null);

  return (
   
    <section className="relative w-full py-10 sm:py-10 bg-white overflow-hidden">
      {/* BLOG CARDS */}
      <section className="max-w-7xl mx-auto mt-16">

       <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 text-center mb-12">
 Latest Travel Stories
</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl overflow-hidden 
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <img src={blog.img} alt={blog.title} className="w-full h-52 object-cover" />

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {blog.short}
                </p>

                <button
                  onClick={() => setActiveBlog(blog)}
                  className="mt-4 text-blue-600 font-semibold hover:text-yellow-500 transition"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeBlog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setActiveBlog(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>

            <img
              src={activeBlog.img}
              alt={activeBlog.title}
              className="w-full h-56 rounded-lg object-cover"
            />

            <h2 className="text-2xl font-bold mt-4 bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">
              {activeBlog.title}
            </h2>

            <p className="mt-3 text-gray-700 leading-relaxed">{activeBlog.full}</p>
          </div>
        </div>
      )}
    </section>
    
  );
}
