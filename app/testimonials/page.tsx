"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";

import "swiper/css";
import "aos/dist/aos.css";

const testimonials = [
  { name: "Rahul Sharma", city: "Delhi", review: "Dream Sky Airways ke through booking ka experience bahut smooth tha. Flights on time thi aur support bhi acha tha.", rating: 5, category: "domestic" },
  { name: "Anjali Verma", city: "Mumbai", review: "Cab and flight both booked at one place. The UI is super premium, exactly like MakeMyTrip.", rating: 4, category: "domestic" },
  { name: "Mohit Singh", city: "Bangalore", review: "Packages section kaafi helpful laga. Goa trip ka package best price mein mila.", rating: 5, category: "domestic" },
  { name: "Divya Nair", city: "Kochi", review: "Maldives honeymoon package market mein best deal tha. Fully satisfied!", rating: 5, category: "international" },
  { name: "Aryan Khan", city: "Dubai (NRI)", review: "International flight booking seamless tha, visa assistance bhi mili.", rating: 5, category: "international" },
];

export default function TestimonialsPage() {
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-0 mt-0 mb-0">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          What Our Customers Say
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Real experiences from travelers across India & abroad
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          grabCursor
          className="!pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              {/* IMPORTANT FIX: overflow-hidden on SwiperSlide */}

              <motion.div
                data-aos="fade-up"
                data-aos-delay={index * 80}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(item)}
                className="
                  bg-black/40
                  backdrop-blur-2xl
                  rounded-2xl
                  p-5
                  cursor-pointer
                  h-full
                  flex
                  flex-col
                  overflow-hidden
                "
                style={{ minHeight: "220px", maxHeight: "280px" }}
              >
                {/* Stars */}
                <div className="flex mb-3">
                  {Array(5).fill(0).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < item.rating ? "text-yellow-400" : "text-gray-400/60"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-100 text-sm leading-relaxed mb-4 line-clamp-4 flex-1">
                  “{item.review}”
                </p>

                {/* Footer */}
                <div className="mt-auto border-t border-white/10 pt-3 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-gray-300">{item.city}</p>
                  </div>
                  <span className="text-white text-[10px] px-2 py-0.5 rounded-full bg-white/10">
                    {item.category === "domestic" ? "Domestic" : "International"}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0D6269] rounded-2xl p-6 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{selected.name}</h3>
                <p className="text-gray-200 text-sm">{selected.city}</p>
              </div>
              <button
                className="text-white text-2xl"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>

            <p className="text-gray-100 text-sm leading-relaxed">
              “{selected.review}”
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
