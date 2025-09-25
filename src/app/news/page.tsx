import React from "react";
import News from "./News";

const news = [
  {
    title: "We have opend new shop",
    img: "/slide1.jpg",
  },
  {
    title: "We have opend new shop",
    img: "/slide1.jpg",
  },
  {
    title: "We have opend new shop",
    img: "/slide1.jpg",
  },
];

export default function NewsPage() {
  return <News news={news} />;
}
