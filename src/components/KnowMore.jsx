import React from "react";
import { Button } from "@/components/ui/button";
import bell from "@/assets/bell.png";
import phn from "@/assets/phone.png";
import food from "@/assets/food.png";
import Image from "next/image";

export default function KnowMore() {
  const [activeTop, setActiveTop] = React.useState(null);
  const [activeLeft, setActiveLeft] = React.useState(null);

  const topButtons = [
    { id: 1, label: "Frequent Questions" },
    { id: 2, label: "Who are we?" },
    { id: 3, label: "Partner Program" },
    { id: 4, label: "Help & Support" },
  ];

  const leftButtons = [
    { id: 1, label: "How does Tastify work?" },
    { id: 2, label: "What payment methods are available?" },
    { id: 3, label: "Can I track my order in real time?" },
    { id: 4, label: "Are there any special discounts?" },
    { id: 5, label: "Is Tastify available in my city?" },
  ];

  const RightBoxes = [
    {
      id: 1,
      head: "Place an order",
      image: bell,
      desc: "Learn how to place an order with Tastify.",
    },
    {
      id: 2,
      head: "Track Progress",
      image: food,
      desc: "Find out how to track your order progress.",
    },
    {
      id: 3,
      head: "Get your order",
      image: phn,
      desc: "Discover how to get your order delivered.",
    },
  ];

  return (
    <div className="px-10 md:px-20 py-6 md:py-10">
      <div className=" max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-10 py-6 md:py-8 bg-gradient-to-r from-orange-600 to-orange-300">
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white text-center mb-4 md:mb-0">
            Know More About Us!
          </h1>

          {/* Top Buttons - scrollable on mobile */}
          <div className="hidden md:flex w-auto justify-center items-center gap-2 overflow-x-auto no-scrollbar">
            {topButtons.map((btn) => (
              <Button
                key={btn.id}
                onClick={() => setActiveTop(btn.id)}
                variant="tastify"
                className={`flex-shrink-0 flex justify-center items-center rounded-full text-sm font-semibold transition-all px-3 py-2 ${
                  activeTop === btn.id
                    ? "bg-white text-orange-500 shadow-lg"
                    : "bg-orange-100 text-orange-800 hover:bg-orange-200"
                }`}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row px-4 md:px-10 py-6 md:py-10 gap-6 md:gap-8">
          {/* Left Buttons */}
          <div className="md:w-1/3 flex flex-col gap-3">
            {leftButtons.map((btn) => (
              <Button
                key={btn.id}
                onClick={() => setActiveLeft(btn.id)}
                variant="tastify"
                className={`w-full text-center rounded-xl transition-all text-sm sm:text-base py-2 ${
                  activeLeft === btn.id
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                {btn.label}
              </Button>
            ))}
          </div>

          {/* Right Cards */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {RightBoxes.map((box) => (
              <div
                key={box.id}
                className="bg-gradient-to-b from-white to-orange-50 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="font-bold text-sm sm:text-md mb-2">
                  {box.head}
                </h3>
                <div className="bg-orange-100 p-3 sm:p-4 rounded-full mb-4">
                  <Image
                    src={box.image}
                    alt={box.head}
                    width={60}
                    height={60}
                    className="object-contain w-12 h-12 sm:w-16 sm:h-16"
                  />
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
