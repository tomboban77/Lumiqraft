"use client";

import { SiteSettings } from "@/types";

interface ContactProps {
  settings: SiteSettings;
}

export default function Contact({ settings }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 relative overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 text-6xl animate-float">
          💌
        </div>
        <div
          className="absolute bottom-20 left-10 text-5xl animate-float"
          style={{ animationDelay: "1s" }}
        >
          ✉️
        </div>
        <div
          className="absolute top-1/2 left-1/4 text-4xl animate-float"
          style={{ animationDelay: "2s" }}
        >
          💖
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header with character */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="animate-bounce-gentle">
                <svg viewBox="0 0 140 140" className="w-40 h-40">
                  {/* Mailbox character */}
                  <rect
                    x="40"
                    y="50"
                    width="60"
                    height="50"
                    rx="8"
                    fill="#FF6B9D"
                  />
                  <rect
                    x="40"
                    y="50"
                    width="60"
                    height="20"
                    rx="8"
                    fill="#FF8AB3"
                  />
                  <circle cx="60" cy="70" r="4" fill="#333" />
                  <circle cx="80" cy="70" r="4" fill="#333" />
                  <path
                    d="M 60 82 Q 70 88 80 82"
                    stroke="#333"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Flag */}
                  <rect x="100" y="55" width="4" height="25" fill="#FFD700" />
                  <rect
                    x="100"
                    y="55"
                    width="15"
                    height="8"
                    fill="#FF4444"
                    rx="1"
                  />

                  {/* Mail slot */}
                  <rect x="55" y="90" width="30" height="3" fill="#333" />

                  {/* Base */}
                  <rect x="65" y="100" width="10" height="20" fill="#8B7355" />

                  {/* Sparkles */}
                  <circle
                    cx="30"
                    cy="40"
                    r="3"
                    fill="#FFD700"
                    className="animate-twinkle"
                  />
                  <circle
                    cx="110"
                    cy="45"
                    r="3"
                    fill="#FFD700"
                    className="animate-twinkle"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <circle
                    cx="70"
                    cy="30"
                    r="3"
                    fill="#FFD700"
                    className="animate-twinkle"
                    style={{ animationDelay: "1s" }}
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Let&apos;s Be Friends! 💌
            </h2>
            <p className="text-2xl text-gray-700 mb-8 font-medium">
              We&apos;d love to hear from you! Drop us a message anytime! 🌟
            </p>
          </div>

          {/* Contact card */}
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
            <div
              className="absolute -top-4 -right-4 w-12 h-12 bg-pink-400 rounded-full opacity-50 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full opacity-50 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-50 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-purple-200 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 text-4xl">⭐</div>
                <div className="absolute top-4 right-4 text-4xl">💫</div>
                <div className="absolute bottom-4 left-4 text-4xl">✨</div>
                <div className="absolute bottom-4 right-4 text-4xl">🌟</div>
              </div>

              <div className="relative z-10">
                {/* Email section */}
                <div className="mb-10 text-center">
                  <div className="inline-block mb-6 p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full">
                    <svg
                      className="w-20 h-20 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                    <span>📧</span>
                    <span>Send Us an Email!</span>
                    <span>📧</span>
                  </h3>
                  <a
                    href={`mailto:${settings.contactEmail || "lumiqraft@gmail.com"}`}
                    className="group inline-block px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                  >
                    <span className="flex items-center gap-2">
                      <span>
                        {settings.contactEmail || "lumiqraft@gmail.com"}
                      </span>
                      <span className="text-2xl group-hover:animate-bounce-gentle">
                        💌
                      </span>
                    </span>
                  </a>
                </div>

                {/* Social links */}
                <div className="border-t-4 border-purple-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                    <span>🌈</span>
                    <span>Follow Our Adventures!</span>
                    <span>🌈</span>
                  </h3>
                  <div className="flex justify-center gap-6">
                    {settings.socialLinks?.facebook ? (
                      <a
                        href={settings.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl"
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    ) : (
                      <div className="group w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                    )}

                    {settings.socialLinks?.instagram ? (
                      <a
                        href={settings.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl"
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                        </svg>
                      </a>
                    ) : (
                      <div className="group w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                        </svg>
                      </div>
                    )}

                    {/* {settings.socialLinks?.twitter ? (
                      <a
                        href={settings.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl"
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    ) : (
                      <div className="group w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
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
            transform: translateY(-20px) rotate(10deg);
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
