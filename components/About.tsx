"use client";

import { SiteSettings } from "@/types";

interface AboutProps {
  settings: SiteSettings;
}

export default function About({ settings }: AboutProps) {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-8xl animate-float">🦋</div>
        <div
          className="absolute top-32 right-20 text-7xl animate-float"
          style={{ animationDelay: "1s" }}
        >
          🌺
        </div>
        <div
          className="absolute bottom-20 left-1/4 text-6xl animate-float"
          style={{ animationDelay: "2s" }}
        >
          🎈
        </div>
        <div
          className="absolute top-1/2 right-1/4 text-5xl animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          ☁️
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with reading character */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="animate-bounce-gentle">
                <svg viewBox="0 0 160 160" className="w-48 h-48">
                  <circle cx="80" cy="60" r="30" fill="#FFB6C1" />
                  <circle cx="70" cy="55" r="4" fill="#333" />
                  <circle cx="90" cy="55" r="4" fill="#333" />
                  <path
                    d="M 70 68 Q 80 73 90 68"
                    stroke="#333"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  <ellipse cx="80" cy="100" rx="25" ry="30" fill="#9370DB" />

                  <rect
                    x="50"
                    y="95"
                    width="60"
                    height="35"
                    rx="3"
                    fill="#FF6B9D"
                  />
                  <rect
                    x="50"
                    y="95"
                    width="30"
                    height="35"
                    rx="2"
                    fill="#FFB6C1"
                  />
                  <rect
                    x="80"
                    y="95"
                    width="30"
                    height="35"
                    rx="2"
                    fill="#FFE4E1"
                  />
                  <line
                    x1="80"
                    y1="95"
                    x2="80"
                    y2="130"
                    stroke="#FF1493"
                    strokeWidth="2"
                  />
                  <line
                    x1="55"
                    y1="105"
                    x2="75"
                    y2="105"
                    stroke="#333"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="55"
                    y1="110"
                    x2="73"
                    y2="110"
                    stroke="#333"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="85"
                    y1="105"
                    x2="105"
                    y2="105"
                    stroke="#333"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="85"
                    y1="110"
                    x2="103"
                    y2="110"
                    stroke="#333"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <path
                    d="M 30 50 Q 30 45 35 45 Q 40 45 40 50 Q 40 55 35 60 L 30 55 Q 25 50 30 45 Q 35 45 35 45 Z"
                    fill="#FF69B4"
                    className="animate-twinkle"
                  />
                  <path
                    d="M 125 65 Q 125 60 130 60 Q 135 60 135 65 Q 135 70 130 75 L 125 70 Q 120 65 125 60 Q 130 60 130 60 Z"
                    fill="#FF69B4"
                    className="animate-twinkle"
                    style={{ animationDelay: "0.5s" }}
                  />

                  <circle
                    cx="45"
                    cy="30"
                    r="3"
                    fill="#FFD700"
                    className="animate-twinkle"
                    style={{ animationDelay: "1s" }}
                  />
                  <circle
                    cx="115"
                    cy="35"
                    r="3"
                    fill="#FFD700"
                    className="animate-twinkle"
                    style={{ animationDelay: "1.5s" }}
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Our Storybook Journey 📖✨
            </h2>
            <p className="text-2xl text-gray-700 font-medium">
              Where imagination meets inspiration! 🌟
            </p>
          </div>

          {/* Story content */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl mb-12 border-4 border-purple-200 relative overflow-hidden">
            {/* Decorative corner ribbons */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-t-purple-400 border-r-[50px] border-r-transparent"></div>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-pink-400 border-l-[50px] border-l-transparent"></div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl font-medium ">
                {settings.aboutText ||
                  `At Lumiqraft, we believe every book is a doorway to adventure! Our magical collection brings together the most wonderful stories, coloring books, and creative activities for curious minds of all ages.`}
              </p>

              <p className="text-lg">
                Each book in our treasure chest is handpicked with love and
                care, ensuring that every page brings joy, learning, and endless
                imagination. From colorful picture books for tiny tots to
                exciting chapter books for young readers, we&apos;ve got
                something special for everyone! 🎨📚
              </p>

              <p className="text-lg">
                We&apos;ve partnered with Amazon to make sure your books arrive
                safely and quickly at your doorstep. It&apos;s like having a
                magical bookshop that comes right to your home! Plus, with
                Amazon&apos;s customer protection, you can shop with complete
                peace of mind. 🏡💝
              </p>

              <p className="text-lg font-medium text-purple-600">
                Join us on this wonderful journey through the world of stories,
                where every book is an adventure waiting to begin! 🌈✨
              </p>
            </div>
          </div>

          {/* Stats with cute characters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                value: "100+",
                label: "Amazing Books",
                icon: "📚",
                color: "from-purple-400 to-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                value: "5★",
                label: "Happy Readers",
                icon: "⭐",
                color: "from-pink-400 to-pink-600",
                bgColor: "bg-pink-50",
              },
              {
                value: "24/7",
                label: "Amazon Magic",
                icon: "🎁",
                color: "from-orange-400 to-orange-600",
                bgColor: "bg-orange-50",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-rotate-2 border-4 border-white animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="text-7xl mb-4 animate-bounce-gentle"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {stat.icon}
                </div>
                <div
                  className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <p className="text-gray-700 font-bold text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Fun fact section */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-3xl p-8 shadow-xl border-4 border-white relative">
              <div className="absolute -top-4 -right-4 text-6xl animate-bounce-gentle">
                🎉
              </div>
              <div
                className="absolute -bottom-4 -left-4 text-6xl animate-bounce-gentle"
                style={{ animationDelay: "0.5s" }}
              >
                🎨
              </div>
              <p className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-4xl">💡</span>
                <span>
                  Did you know? Reading for just 20 minutes a day exposes kids
                  to 1.8 million words a year!
                </span>
                <span className="text-4xl">📖</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(8deg);
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
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.7);
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
          animation: float 8s ease-in-out infinite;
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
