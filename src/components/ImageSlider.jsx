"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/assets/sliderImg1.png";

function NotificationCard({ step, title, desc, accent }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-[300px] px-4 py-3 backdrop-blur-sm">
      <div
        className="absolute -top-6 -right-6 text-5xl font-extrabold opacity-10 select-none pointer-events-none"
        aria-hidden
      >
        {step}
      </div>
      <div className="flex items-start gap-3">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-md text-white font-bold shadow-md ${accent}`}
        >
          ✓
        </div>
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">
            Orders
          </div>
          <div className="mt-1 font-semibold text-black text-sm leading-tight">
            {title}
          </div>
          <div className="text-gray-500 text-xs mt-1">{desc}</div>
        </div>
        <div className="text-xs text-gray-400 whitespace-nowrap">now</div>
      </div>
    </div>
  );
}

export default function ImageSlider() {
  return (
    <section className="w-full bg-white py-12 relative overflow-hidden">
      {/* Decorative gradient floating orbs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-tr from-orange-300 via-pink-300 to-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-gradient-to-br from-yellow-200 via-orange-300 to-pink-300 rounded-full blur-3xl opacity-25 animate-spin-slow"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-10 pt-12 relative z-10">
        <div className="bg-gray-100/90 backdrop-blur-lg rounded-3xl border border-gray-200 shadow-2xl px-8 pt-10 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 rounded-t-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-start gap-6">
            {/* LEFT SECTION */}
            <div className="w-full lg:w-2/6 flex-shrink-0 lg:mt-20 mt-0">
              <p className="text-sm text-gray-500 mb-2 tracking-wide">
                Order Restaurant food, takeaway and groceries.
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 max-w-md">
                Feast Your Senses, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  Fast and Fresh
                </span>
              </h1>
              <p className="text-gray-600 max-w-md mt-3">
                Enter a postcode to see what we deliver.
              </p>
              <div className="mt-5 flex items-center max-w-sm border border-gray-300 rounded-full overflow-hidden shadow-md focus-within:ring-2 focus-within:ring-orange-400 transition">
                <input
                  className="flex-1 p-3 text-sm bg-transparent focus:outline-none"
                  placeholder="e.g. EC4R 3TE"
                  type="text"
                />
                <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 text-white font-semibold px-6 py-3 hover:brightness-110 transition">
                  Search
                </button>
              </div>
            </div>

            {/* RIGHT curved panel + notifications (desktop only) */}
            <div className="hidden lg:block w-1/2 relative h-[500px] flex-shrink-0">
              <div
                className="absolute inset-y-0 right-0 w-[500px] rounded-l-[500px] rounded-t-[500px] -mr-44"
                style={{
                  background:
                    "linear-gradient(180deg,#ff9126 0%, #ff6a00 100%)",
                  boxShadow: "0 35px 90px rgba(255,110,30,0.25)",
                }}
              />
              <div className="absolute right-8 top-10 z-20 flex flex-col gap-6 -mr-28">
                <NotificationCard
                  step="1"
                  title="We've received your order!"
                  desc="Awaiting Restaurant acceptance"
                  accent="bg-[#ff7a1a]"
                />
                <NotificationCard
                  step="2"
                  title="Order Accepted!"
                  desc="Your order will be delivered shortly"
                  accent="bg-[#ff9a3b]"
                />
                <NotificationCard
                  step="3"
                  title="Your rider's nearby"
                  desc="They're almost there — get ready!"
                  accent="bg-[#ffd29a] text-black"
                />
              </div>
            </div>

            {/* IMAGE (desktop only) */}
            <div className="hidden lg:flex absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-20">
              <div className="w-full max-w-[540px] h-[480px] relative overflow-hidden rounded-2xl">
                <Image
                  src={img1}
                  alt="Main Slide"
                  fill
                  sizes="(min-width:1024px) 540px, 100vw"
                  style={{ objectFit: "cover" }}
                  className="drop-shadow-2xl transform hover:scale-105 transition duration-700 ease-in-out"
                />
              </div>
            </div>

            {/* Mobile fallback - only left section */}
            <div className="lg:hidden w-full mt-0">
              {/* Left section already displayed above */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
