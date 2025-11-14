"use client";

import { SiteSettings } from "@/types";

interface HeroProps {
  settings: SiteSettings;
}

export default function Hero({ settings }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating books */}
        <div
          className="absolute top-20 left-10 animate-float"
          style={{ animationDelay: "0s" }}
        >
          <div className="text-6xl opacity-20 transform -rotate-12">📕</div>
        </div>
        <div
          className="absolute top-40 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-5xl opacity-20 transform rotate-12">📗</div>
        </div>
        <div
          className="absolute bottom-32 left-1/4 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="text-4xl opacity-20 transform rotate-6">📘</div>
        </div>
        <div
          className="absolute top-1/3 right-1/4 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="text-7xl opacity-15 transform -rotate-6">📙</div>
        </div>

        {/* Stars and sparkles - using deterministic positions */}
        {[
          { left: 15, top: 20, delay: 0, color: "yellow" },
          { left: 25, top: 60, delay: 0.5, color: "pink" },
          { left: 40, top: 15, delay: 1, color: "yellow" },
          { left: 55, top: 75, delay: 1.5, color: "pink" },
          { left: 70, top: 30, delay: 2, color: "yellow" },
          { left: 85, top: 50, delay: 2.5, color: "pink" },
          { left: 10, top: 80, delay: 0.7, color: "yellow" },
          { left: 90, top: 25, delay: 1.2, color: "pink" },
          { left: 35, top: 90, delay: 1.8, color: "yellow" },
          { left: 50, top: 40, delay: 0.3, color: "pink" },
          { left: 65, top: 10, delay: 2.2, color: "yellow" },
          { left: 80, top: 65, delay: 1.4, color: "pink" },
          { left: 20, top: 45, delay: 0.9, color: "yellow" },
          { left: 45, top: 85, delay: 2.7, color: "pink" },
          { left: 75, top: 20, delay: 1.1, color: "yellow" },
          { left: 30, top: 70, delay: 0.4, color: "pink" },
          { left: 60, top: 35, delay: 1.9, color: "yellow" },
          { left: 12, top: 55, delay: 2.4, color: "pink" },
          { left: 88, top: 40, delay: 0.6, color: "yellow" },
          { left: 48, top: 95, delay: 1.6, color: "pink" },
        ].map((sparkle, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
            }}
          >
            <div className={`text-${sparkle.color}-400 text-xl`}>✨</div>
          </div>
        ))}

        {/* Colorful clouds */}
        <div className="absolute top-10 left-1/3 w-32 h-20 bg-white/30 rounded-full blur-xl animate-float-slow"></div>
        <div
          className="absolute top-1/4 right-1/3 w-40 h-24 bg-pink-200/20 rounded-full blur-xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Cute character mascots */}
          <div className="flex justify-center gap-8 mb-8 animate-slide-up">
            <div
              className="animate-bounce-gentle"
              style={{ animationDelay: "0s" }}
            >
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                {/* Happy book character */}
                <rect
                  x="25"
                  y="20"
                  width="50"
                  height="60"
                  rx="5"
                  fill="#FF6B9D"
                />
                <rect
                  x="30"
                  y="20"
                  width="40"
                  height="60"
                  rx="3"
                  fill="#FFB6C1"
                />
                <circle cx="40" cy="45" r="4" fill="#333" />
                <circle cx="60" cy="45" r="4" fill="#333" />
                <path
                  d="M 40 60 Q 50 68 60 60"
                  stroke="#333"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  cx="20"
                  cy="25"
                  r="3"
                  fill="#FFD700"
                  className="animate-twinkle"
                />
              </svg>
            </div>
            <div
              className="animate-bounce-gentle"
              style={{ animationDelay: "0.5s" }}
            >
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                {/* Pencil character */}
                <rect
                  x="35"
                  y="10"
                  width="30"
                  height="70"
                  rx="15"
                  fill="#FFD700"
                />
                <polygon points="50,80 35,95 50,90 65,95" fill="#FFB347" />
                <circle cx="42" cy="35" r="3" fill="#333" />
                <circle cx="58" cy="35" r="3" fill="#333" />
                <path
                  d="M 42 48 Q 50 52 58 48"
                  stroke="#333"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  cx="75"
                  cy="20"
                  r="3"
                  fill="#FF69B4"
                  className="animate-twinkle"
                />
              </svg>
            </div>
            <div
              className="animate-bounce-gentle"
              style={{ animationDelay: "1s" }}
            >
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                {/* Crayon character */}
                <rect
                  x="30"
                  y="15"
                  width="40"
                  height="65"
                  rx="5"
                  fill="#9370DB"
                />
                <polygon points="50,80 40,90 50,85 60,90" fill="#7B68EE" />
                <circle cx="45" cy="40" r="3.5" fill="#333" />
                <circle cx="55" cy="40" r="3.5" fill="#333" />
                <path
                  d="M 43 53 Q 50 58 57 53"
                  stroke="#333"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  cx="80"
                  cy="30"
                  r="3"
                  fill="#00CED1"
                  className="animate-twinkle"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              {settings.heroTitle || "Welcome to Lumiqraft"}
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-gray-700 mb-12 animate-slide-up font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            {settings.heroSubtitle ||
              "Where Stories Come to Life! 🌈 Discover Amazing Books for Kids & Adults"}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#products"
              className="group relative px-8 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Browse Books</span>
                <span className="text-2xl group-hover:animate-bounce-gentle">
                  📚
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#about"
              className="group px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-4 border-purple-500 hover:border-pink-500"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Learn More</span>
                <span className="text-2xl group-hover:animate-bounce-gentle">
                  ✨
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Feature cards with cute icons */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "📖",
              title: "Quality Stories",
              description:
                "Carefully selected books that inspire imagination and learning",
              color: "from-purple-400 to-purple-600",
              bgColor: "bg-purple-50",
            },
            {
              icon: "🎨",
              title: "Creative Fun",
              description: "Drawing books and activities that spark creativity",
              color: "from-pink-400 to-pink-600",
              bgColor: "bg-pink-50",
            },
            {
              icon: "⭐",
              title: "Fast Delivery",
              description: "Quick shipping through Amazon for your convenience",
              color: "from-orange-400 to-orange-600",
              bgColor: "bg-orange-50",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-rotate-1 animate-slide-up border-4 border-white`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div
                className="text-6xl mb-4 animate-bounce-gentle"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-700 font-medium">{feature.description}</p>
            </div>
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
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(30px) translateY(-30px);
          }
        }
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.7) rotate(180deg);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
