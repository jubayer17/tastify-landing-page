import Image from "next/image";
import React from "react";
import img1 from "@/assets/chefPhoto.jpg";
import img2 from "@/assets/foodDeliver.jpg";

export default function PartnerAndRideFeatures() {
  return (
    <div className="my-10 grid justify-center">
      <div className="md:mb-0 mb-3text-xl md:text-2xl font-semibold text-black text-center md:text-left">
        <h2 className="inline-block border-b-4 border-orange-500 pb-1">
          Partner & Rider Opportunities
        </h2>
      </div>
      <div className="md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center md:mx-0 ">
        {/* First image section */}
        <div className="relative mx-auto w-[400px] h-[230px] md:w-[570px] md:h-[330px] overflow-hidden rounded-lg group border-t-3 border-r-3 border-amber-950">
          <Image
            src={img1}
            alt="Chef"
            width={570}
            height={330}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent transition-all duration-500 group-hover:from-black/60" />

          {/* Overlay content — scaled for mobile */}
          <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-white">
            <p className="text-[10px] md:text-sm uppercase tracking-widest transition-all">
              Join Our{" "}
              <span className="font-bold text-orange-500 underline decoration-2">
                Culinary Network
              </span>
            </p>

            <h1 className="text-lg md:text-3xl font-mono font-bold mt-1 transition-colors">
              Partner With Excellence
            </h1>

            <button className="mt-2 md:mt-3 text-sm md:text-base font-mono px-3 md:px-5 py-1 md:py-2 bg-red-600 rounded shadow-lg hover:bg-red-700 hover:scale-105 transform transition-all">
              Get Started
            </button>
          </div>
        </div>

        {/* Second image section */}
        <div className="relative mx-auto w-[400px] h-[230px] md:w-[570px] md:h-[330px] overflow-hidden rounded-lg group border-t-3 border-r-3 border-amber-950">
          <Image
            src={img2}
            alt="Food Delivery"
            width={570}
            height={330}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent transition-all duration-500 group-hover:from-black/60" />

          <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-white">
            <p className="text-[10px] md:text-sm uppercase tracking-widest transition-all">
              Become a{" "}
              <span className="font-bold text-orange-500 underline decoration-2">
                Food Rider
              </span>
            </p>

            <h1 className="text-lg md:text-3xl font-mono font-bold mt-1 transition-colors">
              Ride With Confidence
            </h1>

            <button className="mt-2 md:mt-3 text-sm md:text-base font-mono px-3 md:px-5 py-1 md:py-2 bg-red-600 rounded shadow-lg hover:bg-red-700 hover:scale-105 transform transition-all">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
