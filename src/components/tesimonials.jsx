import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "/Images/testimonials/1.png",
      feedback:
        "The service exceeded my expectations. The team was professional and delivered outstanding results.",
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      image: "/Images/testimonials/2.png",
      feedback:
        "I couldn't be happier with the outcome. Their attention to detail and commitment to quality is remarkable.",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      image: "/Images/testimonials/3.png",
      feedback:
        "A game-changing experience. Their innovative approach helped transform our business processes.",
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      image: "/Images/testimonials/5.png",
      feedback:
        "Working with this team has been a pleasure. They truly understand customer needs and deliver solutions.",
    },
    {
      name: "Rachel Foster",
      role: "Project Manager",
      image: "/Images/testimonials/6.png",
      feedback:
        "Their expertise and dedication to customer satisfaction made all the difference in our project's success.",
    },
    {
      name: "James Wilson",
      role: "CEO, Innovation Tech",
      image: "/Images/testimonials/7.png",
      feedback:
        "An exceptional team that consistently delivers high-quality solutions. They've become our trusted partner.",
    },
  ];

  return (
    <div className="relative max-w-[85rem] px-4 mx-auto">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative z-10 rounded-lg"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex flex-col items-center h-full p-6 text-center rounded-lg bg-amber-50 shadow-md">
              <img
                className="object-cover w-20 h-20 mb-4 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <p className="mb-2 italic text-gray-600">{testimonial.feedback}</p>
              <h4 className="font-semibold text-amber-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 px-3 py-2 text-amber-800 hover:bg-amber-800/10 rounded-full shadow-md focus:outline-none">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 px-3 py-2 text-amber-800 hover:bg-amber-800/10 rounded-full shadow-md focus:outline-none">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <br />
    </div>
  );
}

export default Testimonial;
