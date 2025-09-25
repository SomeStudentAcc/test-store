"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper стили
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Comments() {
  // Пример данных (можно заменить API позже)
  const comments = [
    {
      title: "Great Experience",
      description:
        "I loved the products, they are really high quality and delivered on time.",
      user: "John Doe",
    },
    {
      title: "Amazing Service",
      description:
        "Customer support was very helpful and friendly. Highly recommend!",
      user: "Jane Smith",
    },
    {
      title: "Fast Delivery",
      description: "The delivery was super quick and packaging was perfect.",
      user: "Michael Brown",
    },
    {
      title: "Awesome Quality",
      description:
        "The items exceeded my expectations, will definitely buy again.",
      user: "Emily Johnson",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Latest News & Reviews
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="pb-12"
      >
        {comments.map((item, index) => (
          <SwiperSlide className="my-h" key={index}>
            <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
              <p className="text-sm font-medium text-blue-600">— {item.user}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
