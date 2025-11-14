"use client";
import { SiteSettings } from "@/types";

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Starry background - using deterministic positions */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 8, top: 12, delay: 0 },
          { left: 15, top: 25, delay: 0.5 },
          { left: 22, top: 38, delay: 1 },
          { left: 28, top: 51, delay: 1.5 },
          { left: 35, top: 64, delay: 2 },
          { left: 42, top: 77, delay: 2.5 },
          { left: 48, top: 15, delay: 0.7 },
          { left: 55, top: 28, delay: 1.2 },
          { left: 62, top: 41, delay: 1.7 },
          { left: 68, top: 54, delay: 2.2 },
          { left: 75, top: 67, delay: 2.7 },
          { left: 82, top: 80, delay: 0.3 },
          { left: 88, top: 20, delay: 0.8 },
          { left: 92, top: 33, delay: 1.3 },
          { left: 5, top: 46, delay: 1.8 },
          { left: 12, top: 59, delay: 2.3 },
          { left: 18, top: 72, delay: 2.8 },
          { left: 25, top: 10, delay: 0.4 },
          { left: 32, top: 85, delay: 0.9 },
          { left: 38, top: 23, delay: 1.4 },
          { left: 45, top: 36, delay: 1.9 },
          { left: 52, top: 49, delay: 2.4 },
          { left: 58, top: 62, delay: 2.9 },
          { left: 65, top: 75, delay: 0.2 },
          { left: 72, top: 18, delay: 0.6 },
          { left: 78, top: 31, delay: 1.1 },
          { left: 85, top: 44, delay: 1.6 },
          { left: 90, top: 57, delay: 2.1 },
          { left: 95, top: 70, delay: 2.6 },
          { left: 10, top: 88, delay: 1 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div className="text-yellow-200 text-sm">✨</div>
          </div>
        ))}
      </div>

      {/* Floating book elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute bottom-20 left-10 text-6xl animate-float">
          📖
        </div>
        <div
          className="absolute top-10 right-20 text-5xl animate-float"
          style={{ animationDelay: "1s" }}
        >
          ✏️
        </div>
        <div
          className="absolute bottom-32 right-1/4 text-4xl animate-float"
          style={{ animationDelay: "2s" }}
        >
          🎨
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              {/* Cute footer mascot */}
              <div className="animate-bounce-gentle">
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                  <circle cx="30" cy="25" r="18" fill="#FFB6C1" />
                  <circle cx="23" cy="22" r="3" fill="#333" />
                  <circle cx="37" cy="22" r="3" fill="#333" />
                  <path
                    d="M 23 30 Q 30 35 37 30"
                    stroke="#333"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  <rect
                    x="20"
                    y="38"
                    width="20"
                    height="15"
                    rx="2"
                    fill="#FF6B9D"
                  />
                  <rect
                    x="23"
                    y="38"
                    width="14"
                    height="15"
                    rx="1"
                    fill="#FFB6C1"
                  />

                  <circle
                    cx="12"
                    cy="15"
                    r="2"
                    fill="#FFD700"
                    className="animate-twinkle"
                  />
                  <circle
                    cx="48"
                    cy="18"
                    r="2"
                    fill="#FFD700"
                    className="animate-twinkle"
                    style={{ animationDelay: "0.5s" }}
                  />
                </svg>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Lumiqraft
              </h3>
            </div>
            <p className="text-xl text-purple-200 mb-2 font-medium">
              {settings.tagline || "Where Stories Come Alive! 📚✨"}
            </p>
            <p className="text-purple-300 flex items-center justify-center md:justify-start gap-2">
              <span>Made with</span>
              <span className="text-pink-300 text-2xl animate-pulse">💖</span>
              <span>for book lovers everywhere</span>
            </p>
          </div>

          {/* Copyright and info section */}
          <div className="text-center md:text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border-2 border-white/20">
              <p className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-end gap-2">
                <span className="text-2xl">©</span>
                <span>{currentYear} Lumiqraft</span>
              </p>
              <p className="text-purple-200 mb-2">All rights reserved</p>
              <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-purple-300">
                <span>Powered by</span>
                <svg
                  className="w-16 h-5"
                  viewBox="0 0 80 20"
                  fill="currentColor"
                >
                  <path d="M14.5 3.5c-1.2 0-2.3.3-3.2.9-.8-.6-1.9-.9-3.2-.9-2.8 0-5.1 2.3-5.1 5.1 0 3.5 4.6 6.9 8.3 9.4.8.6 2 .6 2.8 0 3.7-2.5 8.3-5.9 8.3-9.4 0-2.8-2.3-5.1-5.1-5.1h-.8z" />
                  <text
                    x="25"
                    y="14"
                    className="text-xs font-bold"
                    fill="currentColor"
                  >
                    Amazon
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300 text-sm">
            <span className="animate-bounce-gentle">🌙</span>
            <span>Sweet dreams are made of books</span>
            <span
              className="animate-bounce-gentle"
              style={{ animationDelay: "0.5s" }}
            >
              ⭐
            </span>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
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
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2.5s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
