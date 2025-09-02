import React from "react";
import Image from "next/image";
import img1 from "@/assets/friends-laughing.png";
import logo from "@/assets/tastify_main.png";

import appStoreBadge from "@/assets/apple-store.svg";
import googlePlayBadge from "@/assets/google-play.svg";
import Link from "next/link";

export default function MidFeature() {
  return (
    <div className="mb-20 mt-30 md:mt-35 h-auto">
      <div className="flex mx-20 bg-gray-200 rounded-lg h-[450px] overflow-visible relative mb-0 pb-[400px] md:pb-0">
        <div className="absolute -top-10 left-10 mb-0 -ml-15 z-20">
          <Image height={730} width={625} src={img1} alt="Friends laughing" />
        </div>

        <div className="md:ml-140 ml-6 relative z-10">
          <div className=" md:-ml-10 mt-60 overflow-hidden md:mt-20 md:text-5xl font-semibold font flex text-left">
            <h1 className="flex flex-row w-full ml-1 justify-center align-middle">
              <span className="text-6xl md:mt-0 mt-2.5 mr-1 w-24 md:w-65">
                <Image
                  src={logo}
                  alt="Logo"
                  quality={100}
                  className="h-auto w-full"
                />
              </span>{" "}
              <div className="mt-3 ml-2">
                is now <span className="text-red-700 underline">more</span>
              </div>
            </h1>
          </div>

          <div className=" w-full md:w-full z-0 md:mt-5   mt-5 border-amber-800 -ml-0 md:-ml-20">
            <div className="top-4 left-0 flex justify-center items-center overflow-hidden h-[30px] mb-2 pb-2 md:pb-2  md:h-auto md:w-[680px] w-[90%] mx-auto bg-black text-white px-2 md:py-2 rounded-2xl md:rounded-r-2xl text-2xl md:text-4xl font-semibold font-mono">
              <h1 className="md:bg-transparent md:mt-0  md:ml-20 align-middle text-center md:text-left">
                <span className="text-orange-400 underline text-sm md:text-4xl">
                  Personalized
                </span>{" "}
                <span className="text-sm md:text-4xl">& Decorated</span>
              </h1>
            </div>
          </div>

          <div className="flex justify-center">
            <p className="md:pl-15 text-[11px] md:text-[18px] md:font-mono mt-2 md:mt-8 md:-mb-3 mb-0 ">
              Download our <span className="font-bold">TASTIFY</span> app for
              the faster ordering !
            </p>
          </div>

          <div className="flex justify-center items-center space-x-4 -mt-3 md:-mt-3">
            <Link href="#">
              {" "}
              <Image
                src={appStoreBadge}
                alt="Download on the App Store"
                className="w-24 h-auto md:w-40"
              />
            </Link>
            <Link href="#">
              {" "}
              <Image
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="w-24  h-auto md:w-40"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
