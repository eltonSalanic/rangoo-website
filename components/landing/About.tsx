"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function About() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const scrolled = window.scrollY;
      const section = parallaxRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      //only apply parallax when section is in viewport
      if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
        const offset = (sectionTop - scrolled) * 0.5;
        section.style.backgroundPosition = `${offset}px center`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="relative min-h-screen flex items-center py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/DesertBackground.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/*dark overlay*/}
      <div className="absolute inset-0 bg-black/70"></div>

      {/*content*/}
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* border */}
              <div className="absolute -inset-4 border-4 border-western-amber opacity-50"></div>
              <div className="absolute -inset-2 border-2 border-western-amber/30"></div>

              <Image
                src="/assets/GroupShotWithCrowd.webp"
                alt="Rangoo Band"
                width={600}
                height={450}
                className="relative z-10 w-full h-auto shadow-2xl"
              />
            </div>
          </div>

          {/* about text*/}
          <div className="order-1 lg:order-2 text-western-beige">
            <h2 className="text-4xl md:text-5xl font-display text-western-amber mb-6 text-shadow-md text-center">
              Who is Rangoo?
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-center">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
