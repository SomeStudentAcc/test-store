import { INews } from "@/types/news.interface";
import Image from "next/image";
import React from "react";

interface Props {
  news: INews[];
}

export default function News({ news }: Props) {
  return (
    <section className="py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest News</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((el, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <div className="relative h-60 w-full">
              <Image
                src={el.img}
                alt={el.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h2 className="text-lg font-semibold">{el.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
