"use client";

import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 border-4 border-purple-100 hover:border-pink-300 h-[480px] flex flex-col">
      {/* Decorative corner elements */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-yellow-400 rounded-tl-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-pink-400 rounded-tr-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-blue-400 rounded-bl-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-purple-400 rounded-br-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

      {/* Floating sparkles on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <div className="absolute top-4 left-4 text-yellow-400 text-xl animate-twinkle">
          ✨
        </div>
        <div
          className="absolute top-8 right-8 text-pink-400 text-xl animate-twinkle"
          style={{ animationDelay: "0.5s" }}
        >
          ⭐
        </div>
        <div
          className="absolute bottom-12 left-8 text-purple-400 text-xl animate-twinkle"
          style={{ animationDelay: "1s" }}
        >
          💫
        </div>
      </div>

      <div className="relative h-48 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 overflow-hidden flex-shrink-0">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-6xl mb-2 animate-bounce-gentle">📚</div>
              <div className="text-gray-400 font-medium text-sm">
                Book Image
              </div>
            </div>
          </div>
        )}

        {product.featured && (
          <div className="absolute top-3 right-3 z-10">
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce-gentle flex items-center gap-1">
                <span>⭐</span>
                <span>Featured</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
            </div>
          </div>
        )}

        {/* Playful ribbon */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"></div>
      </div>

      <div className="p-4 relative flex flex-col flex-grow">
        {/* Category badge */}
        {product.category && (
          <div className="absolute -top-3 left-4">
            <div className="bg-white px-3 py-1 rounded-full shadow-lg border-2 border-purple-300 text-xs font-bold text-purple-600 flex items-center gap-1">
              <span>🏷️</span>
              <span>{product.category}</span>
            </div>
          </div>
        )}

        <div className="mt-2 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2 min-h-[3.5rem]">
            {product.title}
          </h3>

          <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed flex-grow min-h-[2.5rem]">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <div className="relative">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>

            {/* Star rating visual */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ⭐
                </span>
              ))}
            </div>
          </div>

          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden text-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover/button:opacity-100 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.895 17.611c-.168.168-.437.168-.604 0-1.897-1.897-4.395-2.928-7.035-2.928-1.447 0-2.841.316-4.132.921-.242.121-.531 0-.652-.242-.121-.242 0-.531.242-.652 1.411-.652 2.928-.987 4.542-.987 2.841 0 5.527 1.105 7.639 3.217.168.193.168.478 0 .671zm1.513-1.732c-.193.193-.507.193-.7 0-2.279-2.279-5.283-3.534-8.452-3.534-1.732 0-3.416.363-4.974 1.058-.29.121-.604-.024-.725-.315-.121-.29.024-.604.315-.725 1.679-.773 3.489-1.179 5.384-1.179 3.416 0 6.619 1.326 9.031 3.752.241.241.241.604.121.943z" />
              </svg>
              <span>Buy on Amazon</span>
              <span className="text-lg group-hover/button:animate-bounce-gentle">
                🛒
              </span>
            </span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.5) rotate(180deg);
          }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
