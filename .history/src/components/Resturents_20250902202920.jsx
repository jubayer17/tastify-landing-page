import React from "react";
import img1 from "@/assets/mcDonalds.png";
import img2 from "@/assets/KFC.png";
import img3 from "@/assets/PapaJons.png";
import img4 from "@/assets/Swarma.png";
import img5 from "@/assets/Texas.png";
import img6 from "@/assets/BurgerKing.png";
import Image from "next/image";

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

export default function Resturents() {
  return (
    <div className="mx-10 md:mx-21 mt-1 md:mt-10">
      {/* Heading and underline style */}
      <div className="text-xl md:text-2xl font-semibold text-black text-center md:text-left">
        <h2 className="inline-block border-b-4 border-orange-500 pb-1">
          Popular Restaurants
        </h2>
      </div>

      {/* Grid aligned properly */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-6">
        {categories.map((c) => (
          <div
            key={c.id}
            className="relative bg-orange-500 rounded-lg border-2 shadow-md hover:shadow-lg transition-all h-[150px] w-[130px] sm:h-[200px] sm:w-[175px] mx-auto"
          >
            <div className="overflow-hidden rounded-t-lg h-[110px] sm:h-[150px]">
              <Image
                src={c.image}
                alt={c.name}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-white text-[10px] md:text-sm font-bold text-center mt-2">
              {c.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
