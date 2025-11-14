"use client";

import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { useState } from "react";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Category icons mapping
  const categoryIcons: Record<string, string> = {
    all: "🌈",
    children: "👶",
    kids: "🧒",
    drawing: "🎨",
    coloring: "🖍️",
    educational: "📚",
    fiction: "📖",
    adventure: "🗺️",
    fantasy: "🦄",
    science: "🔬",
    art: "🎭",
    books: "📚",
  };

  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    return categoryIcons[lowerCategory] || "📘";
  };

  return (
    <section
      id="products"
      className="py-12 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 text-7xl animate-float">📚</div>
        <div
          className="absolute top-20 right-20 text-6xl animate-float"
          style={{ animationDelay: "1s" }}
        >
          ✏️
        </div>
        <div
          className="absolute bottom-20 left-1/4 text-6xl animate-float"
          style={{ animationDelay: "2s" }}
        >
          🎨
        </div>
        <div
          className="absolute top-1/2 right-1/3 text-5xl animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          🌟
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with cute character */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="animate-bounce-gentle">
              <svg viewBox="0 0 120 120" className="w-24 h-24">
                {/* Owl librarian character */}
                <ellipse cx="60" cy="70" rx="35" ry="40" fill="#8B7355" />
                <circle cx="45" cy="60" r="12" fill="white" />
                <circle cx="75" cy="60" r="12" fill="white" />
                <circle cx="45" cy="60" r="6" fill="#333" />
                <circle cx="75" cy="60" r="6" fill="#333" />
                <polygon points="60,70 55,75 65,75" fill="#FF8C00" />
                <path
                  d="M 35 45 Q 30 35 35 30"
                  stroke="#8B7355"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M 85 45 Q 90 35 85 30"
                  stroke="#8B7355"
                  strokeWidth="3"
                  fill="none"
                />
                <rect
                  x="50"
                  y="85"
                  width="20"
                  height="15"
                  rx="2"
                  fill="#FF6B9D"
                />
                <rect
                  x="53"
                  y="85"
                  width="14"
                  height="15"
                  rx="1"
                  fill="#FFB6C1"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="4"
                  fill="#FFD700"
                  className="animate-twinkle"
                />
                <circle
                  cx="80"
                  cy="40"
                  r="4"
                  fill="#FFD700"
                  className="animate-twinkle"
                  style={{ animationDelay: "0.5s" }}
                />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Our Magical Collection ✨
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Discover amazing books and activities that spark joy and creativity!
            🎨📚
          </p>
        </div>

        {/* Category filters */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-5 py-2 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg flex items-center gap-2 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-2xl scale-110"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100"
                }`}
              >
                <span className="text-xl group-hover:animate-bounce-gentle">
                  {getCategoryIcon(category)}
                </span>
                <span className="capitalize">{category}</span>
                {selectedCategory === category && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping"></span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product._id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <div className="text-8xl animate-bounce-gentle">📚</div>
            </div>
            <p className="text-gray-600 text-xl font-medium mb-2">
              Oops! No books found here yet...
            </p>
            <p className="text-gray-500 text-lg">
              But don&apos;t worry! Amazing stories are coming soon! 🌟
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
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
            opacity: 0.3;
            transform: scale(0.5);
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
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
