"use client";

import { useState } from "react";
import Image from "next/image";

export default function FlyerCarousel({ flyers }: { flyers: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalFlyers = flyers?.length || 0;

  if (totalFlyers === 0) return null;

  const next = () =>
    setCurrentIndex((prev) => (prev === totalFlyers - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? totalFlyers - 1 : prev - 1));

  return (
    <div className="relative w-full max-w-lg mx-auto group px-6 sm:px-0">
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl shadow-2xl border border-neutral-800/60 bg-black/40 backdrop-blur-sm">
        <Image
          src={flyers[currentIndex]}
          alt={`Flyer ${currentIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {totalFlyers > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute z-10 left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/90 text-white rounded-full p-2 md:p-3 backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 border border-white/10 cursor-pointer touch-manipulation"
            aria-label="Previous flyer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute z-10 right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/90 text-white rounded-full p-2 md:p-3 backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 border border-white/10 cursor-pointer touch-manipulation"
            aria-label="Next flyer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-6 relative z-10">
            {flyers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer touch-manipulation ${
                  currentIndex === i
                    ? "bg-white"
                    : "bg-neutral-600 hover:bg-neutral-400"
                }`}
                aria-label={`Go to flyer ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
