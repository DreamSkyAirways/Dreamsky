"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { offers } from "../../app/data/offers";

const tabs = [
  { label: "HOLIDAY", value: "holiday" },
  { label: "BUS", value: "bus" },
  { label: "HOTEL", value: "hotel" },
  { label: "FLIGHT", value: "flight" },
  { label: "CAB", value: "cab" },
];

export default function SpecialOffers() {
  const [activeTab, setActiveTab] = useState("holiday");
  const [selectedOffer, setSelectedOffer] = useState<typeof offers[0] | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const filteredOffers = offers.filter((offer) => offer.category === activeTab);

  // Group all offers by category for the View All modal
  const groupedOffers = offers.reduce((acc: { [key: string]: typeof offers }, offer) => {
    if (!acc[offer.category]) {
      acc[offer.category] = [];
    }
    acc[offer.category].push(offer);
    return acc;
  }, {});

  const categories = Object.keys(groupedOffers).sort();

  return (
    <section className="py-30 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8  gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D6269]">
            SPECIAL OFFERS
          </h2>
          <button
            onClick={() => setShowAllModal(true)}
            className="text-[#08948b] hover:text-[#0D6269] font-semibold flex items-center gap-2 transition-colors"
          >
            VIEW ALL →
          </button>
        </div>

        {/* Tabs – responsive scrollable */}
        <div className="flex flex-wrap gap-2 sm:gap-6 md:gap-1 border-b border-gray-200 mb-8 sm:mb-10 pb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pb-1 px-2 sm:px-4 md:px-5 font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap transition-all ${
                activeTab === tab.value
                  ? "text-[#08948b] border-b-1 border-[#08948b]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Swiper
          modules={[Autoplay,]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
            1280: { slidesPerView: 3, spaceBetween: 24 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
         
          loop={true}
          className="!pb-14 sm:!pb-16"
        >
          {filteredOffers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <motion.div
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedOffer(offer)}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer group h-full flex flex-col min-h-[280px] sm:min-h-[220px]"
              >
                <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-[#0D6269] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                    {offer.tag}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#0D6269] mb-2 sm:mb-3 line-clamp-2">
                    {offer.title}
                  </h3>

                  <div className="mt-auto">
                    <button className="w-full bg-[#08948b] hover:bg-[#0D6269] text-white font-semibold py-2.5 sm:py-3 rounded-lg transition text-sm sm:text-base">
                      View Deal
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      {showAllModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-3 mt-30 overflow-y-auto"
          onClick={() => setShowAllModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-5xl sm:max-w-6xl lg:max-w-7xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-5 sm:p-6 border-b flex justify-between items-center z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0D6269]">
                All Offers 
              </h3>
              <button
                className="text-2xl sm:text-3xl text-gray-600 hover:text-gray-800"
                onClick={() => setShowAllModal(false)}
              >
                ×
              </button>
            </div>

            <div className="p-5 sm:p-6 md:p-8 pb-10 sm:pb-12">
              {categories.map((category) => (
                <div key={category} className="mb-10 sm:mb-12">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#0D6269] mb-4 sm:mb-6 uppercase">
                    {category} Offers
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {groupedOffers[category].map((offer) => (
                      <div
                        key={offer.id}
                        onClick={() => setSelectedOffer(offer)}
                        className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer flex flex-col"
                      >
                        <div className="relative h-40 sm:h-44 md:h-48= lg:h-52 overflow-hidden">
                          <img
                            src={offer.image}
                            alt={offer.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <h5 className="font-semibold text-[#0D6269] mb-2 line-clamp-2 text-sm sm:text-base">
                            {offer.title}
                          </h5>
                          <span className="text-xs bg-[#0D6269] text-white px-2.5 py-1 rounded self-start">
                            {offer.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {selectedOffer && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 mt-20"
          onClick={() => setSelectedOffer(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-lg sm:max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-64 md:h-80">
              <img
                src={selectedOffer.image}
                alt={selectedOffer.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xl sm:text-2xl hover:bg-black/80 transition"
                onClick={() => setSelectedOffer(null)}
              >
                ×
              </button>
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0D6269] mb-3">
                {selectedOffer.title}
              </h3>
              <span className="inline-block bg-[#0D6269] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4">
                {selectedOffer.tag}
              </span>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                Grab this exclusive deal now! Limited time offer on {selectedOffer.category.toUpperCase()} bookings.
                Book today and save big!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="flex-1 bg-[#08948b] text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-[#0D6269] transition text-sm sm:text-base">
                  Book Now
                </button>
                <button
                  className="flex-1 border-2 border-gray-300 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 transition text-sm sm:text-base"
                  onClick={() => setSelectedOffer(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}