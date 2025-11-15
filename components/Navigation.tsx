"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with animated book character */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Cute book character */}
              <div className="w-12 h-12 relative animate-bounce-gentle">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  {/* Book body */}
                  <rect
                    x="18"
                    y="12"
                    width="28"
                    height="40"
                    rx="2"
                    fill="#FF6B9D"
                    className="group-hover:fill-[#ff8ab3] transition-colors"
                  />
                  <rect
                    x="22"
                    y="12"
                    width="20"
                    height="40"
                    rx="1"
                    fill="#FFB6C1"
                  />

                  {/* Pages */}
                  <line
                    x1="26"
                    y1="12"
                    x2="26"
                    y2="52"
                    stroke="#fff"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="30"
                    y1="12"
                    x2="30"
                    y2="52"
                    stroke="#fff"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="34"
                    y1="12"
                    x2="34"
                    y2="52"
                    stroke="#fff"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="38"
                    y1="12"
                    x2="38"
                    y2="52"
                    stroke="#fff"
                    strokeWidth="0.5"
                  />

                  {/* Face */}
                  <circle cx="28" cy="28" r="2" fill="#333" />
                  <circle cx="36" cy="28" r="2" fill="#333" />
                  <path
                    d="M 28 34 Q 32 38 36 34"
                    stroke="#333"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="group-hover:animate-smile"
                  />

                  {/* Sparkles */}
                  <circle
                    cx="12"
                    cy="18"
                    r="1.5"
                    fill="#FFD700"
                    className="animate-twinkle"
                  />
                  <circle
                    cx="52"
                    cy="22"
                    r="1.5"
                    fill="#FFD700"
                    className="animate-twinkle"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <circle
                    cx="16"
                    cy="46"
                    r="1.5"
                    fill="#FFD700"
                    className="animate-twinkle"
                    style={{ animationDelay: "1s" }}
                  />
                </svg>
              </div>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Lumiqraft
              {/* <Image
                src="/LumIcon.png"
                alt="Lumiqraft Logo"
                fill
                className="object-contain"
              /> */}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {[
                { href: "#home", label: "Home", icon: "🏠" },
                { href: "#products", label: "Books", icon: "📚" },
                { href: "#about", label: "About", icon: "✨" },
                { href: "#contact", label: "Contact", icon: "💌" },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl group-hover:animate-bounce-gentle">
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              {!isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 shadow-xl rounded-b-3xl">
            {[
              {
                href: "#home",
                label: "Home",
                icon: "🏠",
                color: "from-purple-400 to-purple-600",
              },
              {
                href: "#products",
                label: "Books",
                icon: "📚",
                color: "from-pink-400 to-pink-600",
              },
              {
                href: "#about",
                label: "About",
                icon: "✨",
                color: "from-yellow-400 to-yellow-600",
              },
              {
                href: "#contact",
                label: "Contact",
                icon: "💌",
                color: "from-green-400 to-green-600",
              },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span
                  className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating decorative elements */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.5);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
