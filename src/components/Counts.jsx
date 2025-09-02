import React from "react";

export default function Counts() {
  const stats = [
    { value: "100+", label: "Restaurants" },
    { value: "500+", label: "Dishes" },
    { value: "1000+", label: "Users" },
    { value: "5+", label: "Years" },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-20 pt-5 pb-10">
      <div className="bg-orange-500 rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/30 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-6 text-white transition-all duration-300 hover:bg-white/10"
            >
              <span className="text-3xl sm:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-200 via-white to-yellow-300 bg-clip-text text-transparent">
                {item.value}
              </span>
              <span className="text-sm sm:text-base opacity-90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
