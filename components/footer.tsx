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
          {/* WriteForge Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">WriteForge</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              AI-powered content creation platform that helps businesses generate high-quality marketing content 10x faster. Transform your content strategy today.
            </p>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
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
                  href="/templates"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
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
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  href="/help"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/api-docs"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  API Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md">
            Get the latest AI content tips, feature updates, and industry insights delivered to your inbox.
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
            By submitting your email address, you agree to receive WriteForge&apos;s
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
              Copyright © 2025 WriteForge. All rights reserved.
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
