'use client';
import React, { useState } from "react";
import Link from "next/link";

const SocialIcon = ({ type }: { type: string }) => {
  const iconProps = {
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }

  switch (type) {
    case 'github':
      return (
        <svg {...iconProps}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...iconProps}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    case 'portfolio':
      return (
        <svg {...iconProps}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )
  }
}

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
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
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
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
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
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  API Docs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/vedantlavale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <SocialIcon type="github" />
              </Link>
              <Link
                href="https://linkedin.com/in/vedantlavale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <SocialIcon type="linkedin" />
              </Link>
              <Link
                href="https://www.vedant.works"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Portfolio"
              >
                <SocialIcon type="portfolio" />
              </Link>
            </div>
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
              href="#"
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
                href="#"
                className="text-xs text-white/50 hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
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
