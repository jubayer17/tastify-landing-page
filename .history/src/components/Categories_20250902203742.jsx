"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import img1 from "@/assets/catBurger.jpg";
import img2 from "@/assets/catSalads.jpg";
import img3 from "@/assets/catPasta.jpg";
import img4 from "@/assets/catPizza.jpg";
import img5 from "@/assets/catSoup.jpg";
import img6 from "@/assets/catShawarma.jpg";

const categories = [
  {
    id: 1,
    name: "Burgers & Fast food",
    desc: "21 Restaurants",
    discount: "-40%",
    image: img1,
  },
  {
    id: 2,
    name: "Salads",
    desc: "32 Restaurants",
    discount: "-20%",
    image: img2,
  },
  {
    id: 3,
    name: "Pasta & Casuals",
    desc: "4 Restaurants",
    discount: "-17%",
    image: img3,
  },
  {
    id: 4,
    name: "Pizza",
    desc: "12 Restaurants",
    discount: "-25%",
    image: img4,
  },
  {
    id: 5,
    name: "Shawarma",
    desc: "9 Restaurants",
    discount: "-15%",
    image: img5,
  },
  {
    id: 6,
    name: "Soups",
    desc: "7 Restaurants",
    discount: "-10%",
    image: img6,
  },
];

export default function CategoriesGrid() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (categories.length) setActiveCard(categories[0].id);
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-20 py-7">
      <div className="max-w-[1300px] mx-auto">
        {/* 🔥 Heading same as Restaurants */}
        <div className="text-xl -mb-3 md:-mb-0 md:text-2xl font-semibold text-black text-center md:text-left">
          <h2 className="inline-block border-b-4 border-orange-500 pb-1">
            Top Categories
          </h2>
        </div>

        <div className="mx-3  my-6 md:my-3 md:mx-0 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center gap-4 sm:gap-8 md:gap-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCard(c.id)}
              className={`relative group mt-5 s flex flex-col items-center bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm transform transition-all duration-200 focus:outline-none
                ${
                  activeCard === c.id
                    ? "ring-2 ring-orange-300 scale-105"
                    : "hover:shadow-md hover:-translate-y-0.5"
                }`}
              aria-pressed={activeCard === c.id}
            >
              {/* Image (square) */}
              <div className="flex justify-center items-center bg-slate-100 relative h-20 w-full sm:h-24 lg:h-28 xl:h-32 2xl:h-36 aspect-square">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                  className="block"
                />
                {/* discount badge */}
                <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-red-600 text-white text-[10px] sm:text-[11px] font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md z-10 shadow">
                  {c.discount}
                </div>
              </div>

              {/* Label area */}
              <div className="px-2 pb-2 pt-1 sm:px-3 sm:pb-3 sm:pt-2 w-full text-left">
                <h3 className="text-[11px] sm:text-sm font-semibold text-slate-800 truncate">
                  {c.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1">
                  {c.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
