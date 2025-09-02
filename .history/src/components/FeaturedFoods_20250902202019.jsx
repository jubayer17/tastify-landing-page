"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import img1 from "@/assets/burger1.jpg";
import img2 from "@/assets/featuredPizza.jpg";
import img3 from "@/assets/featuredNoodles.jpg";
import img4 from "@/assets/featuredSushi.jpg";
import img5 from "@/assets/featuredSalad.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const featuredFoods = [
  {
    id: 1,
    name: "Juicy Classic Burger",
    category: "Restaurant",
    discount: "-40%",
    image: img1,
  },
  {
    id: 2,
    name: "Margherita Pizza Delight",
    category: "Restaurant",
    discount: "-20%",
    image: img2,
  },
  {
    id: 3,
    name: "Spicy Chicken Noodles",
    category: "Restaurant",
    discount: "-17%",
    image: img3,
  },
  {
    id: 4,
    name: "Salmon Sushi Roll",
    category: "Restaurant",
    discount: "-25%",
    image: img4,
  },
  {
    id: 5,
    name: "Fresh Green Salad",
    category: "Restaurant",
    discount: "-15%",
    image: img5,
  },
];

export default function FeaturedFoodsCarousel() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeCard, setActiveCard] = useState(1);
  const buttons = ["Vegan", "Sushi", "Pizza & Fast Food", "Others"];
  const carouselRef = useRef(null);

  // Small helper to scroll by exactly one card width (works with the card widths below)
  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const card = container.querySelector(".featured-card");
    if (!card) return;
    const gap = 24; // matches the `gap-6` (1.5rem = 24px)
    const cardWidth = card.offsetWidth + gap;
    container.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  // Make the first card centered on mount for small screens (optional)
  useEffect(() => {
    if (!carouselRef.current) return;
    // scroll to the active card
    const container = carouselRef.current;
    const card = container.querySelector(".featured-card");
    if (!card) return;
    container.scrollLeft = 0;
  }, []);

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
          <div className="w-full md:w-auto text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-black inline-block border-b-4 border-orange-500 pb-1">
              Up to -40% Discount Offers 🎉
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex gap-2">
              {buttons.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedCategory(b)}
                  className={`px-3 py-1 text-sm rounded-full transition ${
                    selectedCategory === b
                      ? "border border-orange-500 text-orange-500"
                      : "text-gray-700 hover:bg-orange-50"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            {/* Mobile scrollable pills (improved) */}
            <div className="sm:hidden relative w-full">
              <div className="flex gap-3 overflow-x-auto hide-scrollbar py-1 px-1">
                {buttons.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedCategory(b)}
                    className={`flex-shrink-0 px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition ${
                      selectedCategory === b
                        ? "bg-orange-50 text-orange-600 font-semibold ring-1 ring-orange-200"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {b}
                  </button>
                ))}

                <button className="flex-shrink-0 px-3 py-1.5 text-sm rounded-full bg-white border border-gray-200">
                  More
                </button>
              </div>

              {/* subtle gradient fade left/right to indicate scroll */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/90 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white/90 to-transparent" />
            </div>
          </div>
        </div>

        {/* Carousel area */}
        <div className="relative">
          {/* arrows: hidden on small screens, visible on md+ */}
          <button
            aria-label="scroll left"
            onClick={() => scroll("left")}
            className="flex items-center justify-center absolute -ml-3 md:-left-5 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-800 p-2 md:p-3 rounded-full shadow z-30 hover:bg-orange-500 hover:text-white transition"
          >
            <span className="text-sm md:text-base">
              <FontAwesomeIcon icon={faAngleLeft} />
            </span>
          </button>

          <button
            aria-label="scroll right"
            onClick={() => scroll("right")}
            className="flex items-center justify-center absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-800 p-2 md:p-3 rounded-full shadow z-30 hover:bg-orange-500 hover:text-white transition"
          >
            <span className="text-sm md:text-base">
              {" "}
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </button>

          {/* Cards wrapper: horizontal scroll, 3 cards visible on mobile like the provided image */}
          <div
            ref={carouselRef}
            className="flex py-5 px-5  gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-2"
            role="list"
          >
            {featuredFoods.map((food) => (
              <article
                key={food.id}
                role="listitem"
                onClick={() => setActiveCard(food.id)}
                className={`featured-card flex-shrink-0 snap-start rounded-2xl shadow-lg transform transition-transform duration-200 relative cursor-pointer overflow-hidden ${
                  activeCard === food.id ? "scale-105 " : ""
                }`}
                style={{
                  minWidth: "calc(33.333% - 1rem)",
                }}
              >
                {/* discount badge (top-left like screenshot) */}
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-lg z-10 shadow">
                  {food.discount}
                </div>

                {/* image container: fixed height for consistent layout */}
                <div className="relative w-full h-24 sm:h-52 md:h-60">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="block"
                  />
                </div>

                {/* bottom overlay with gradient and text */}
                <div className="absolute left-0 right-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <p className="text-[11px] sm:text-xs text-orange-400 font-medium">
                    {food.category}
                  </p>
                  <h4 className="text-white font-bold text-xs sm:text-sm leading-tight mt-1">
                    {food.name}
                  </h4>
                </div>

                {/* subtle blue border for selected card (duplicate to match screenshot highlight) */}
                {activeCard === food.id && (
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-blue-400/40" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Small helper styles (hide native scrollbar) - include only if your project doesn't already provide these utilities */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
