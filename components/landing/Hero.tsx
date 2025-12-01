import Image from "next/image";
import heroBackground from "@/public/assets/MicToCrowd.webp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-center bg-cover before:absolute before:inset-0 before:bg-black/70" style={{ backgroundImage: `url('${heroBackground.src}')` }}>

      {/* content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fadeIn">
        {/* logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/assets/SkullLogo.webp"
            alt="Rangoo Logo"
            width={200}
            height={200}
            className="w-50 auto sm:w-48 sm:h-48 drop-shadow-2xl animate-slideUp"
            priority
          />
        </div>

        {/* tagline */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-western-tan mb-12 max-w-2xl mx-auto text-shadow-md">
          Indie Surf Rock
        </p>


        {/* decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-western-amber"></div>
          <Image
            src="/assets/Rose.webp"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <div className="h-px w-24 bg-western-amber"></div>
        </div>
      </div>
    </section>
  );
}
