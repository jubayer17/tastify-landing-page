import React from "react";
import Image from "next/image";
import logo from "@/assets/tastify_main.png";
import appStoreBadge from "@/assets/apple-store.png";
import googlePlayBadge from "@/assets/google-play.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 md:px-20 border-t-2 border-orange-600 rounded-t-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo & App Badges */}
        <div>
          <Image
            height={60}
            width={160}
            src={logo}
            alt="Tastify Logo"
            className="mb-4"
          />
          <p className="text-sm text-gray-600 mb-4">
            Discover the best places to eat, right at your fingertips.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://apps.apple.com/app/your-app-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={appStoreBadge}
                alt="Download on the App Store"
                width={130}
                height={40}
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=your.app.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={googlePlayBadge}
                alt="Get it on Google Play"
                width={130}
                height={40}
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>

        {/* Column 2: About */}
        <div className="-ml-4 mr-5">
          <h4 className="text-lg font-semibold mb-3 ">About Us</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            We are a team of passionate food lovers, dedicated to bringing you
            the best dining experiences, curated from top restaurants near you.
          </p>
        </div>

        {/* Column 3: Links */}
        <div className="grid grid-cols-2 gap-6">
          {/* Column: Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Important Links</h4>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>
                <a href="/about" className="hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-black transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-black transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-black transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-black transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-black transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="hover:text-black transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:text-black transition-colors">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Tastify. All rights reserved.
      </div>
    </footer>
  );
}
