'use client';
import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="relative z-10 bg-black/80 backdrop-blur-sm border-t border-white/10 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Tailark Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Tailark</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Tailark is your launchpad to a modern coding journey. Learn,
              build, and grow with us.
            </p>
          </div>

          {/* Navigation Section 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Section 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pricing"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Getting Started & Social Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  href="/signup"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/forgot-password"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Forgot Password
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Social</h3>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md">
            Subscribe to our newsletter for the latest coding tips, project
            ideas, and platform updates.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-medium rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-white/50 text-xs mt-4 max-w-2xl">
            By submitting your email address, you agree to receive Tailark&apos;s
            monthly newsletter. For more information, please read our{" "}
            <Link
              href="/privacy-policy"
              className="text-white/70 hover:text-white underline"
            >
              privacy policy
            </Link>
            . You can always withdraw your consent.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Watermark */}
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm text-white/70">
              Made with <span className="text-red-400 mx-1">♥</span> by Vedant
            </span>
          </div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-xs text-white/50">
              Copyright © 2025 Tailark. All rights reserved.
            </span>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-white/50 hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-white/50 hover:text-white/70 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
