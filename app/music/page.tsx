import { Metadata } from "next";
import { H2, H3 } from "@/components/ui/Typography";
import Image from "next/image";
import { SpotifyEmbed } from "@/hooks/SpotifyEmbed";

export const metadata: Metadata = {
  title: "Music | Rangoo",
  description: "Listen to Rangoo's latest releases on Spotify, Apple Music, and all major streaming platforms.",
  openGraph: {
    title: "Music | Rangoo",
    description: "Listen to Rangoo's latest releases on Spotify, Apple Music, and all major streaming platforms.",
  },
};

export default function MusicPage() {
  const streamingPlatforms = [
    {
      name: "Apple Music",
      url: "https://music.apple.com",
      icon: "/assets/streaming-services-svgs/applemusic.svg",
    },
    {
      name: "YouTube Music",
      url: "https://music.youtube.com",
      icon: "/assets/streaming-services-svgs/youtubemusic.svg",
    },
    {
      name: "Tidal",
      url: "https://tidal.com",
      icon: "/assets/streaming-services-svgs/tidal.svg",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com",
      icon: "/assets/streaming-services-svgs/soundcloud.svg",
    },
    {
      name: "iTunes",
      url: "https://music.apple.com",
      icon: "/assets/streaming-services-svgs/itunes.svg",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <H2 className="text-western-darkBrown mb-4">Our Music</H2>
          <p className="text-xl text-western-brown max-w-2xl mx-auto">
            Available on all major streaming platforms.
          </p>

        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <H3 className="text-western-brown text-center mb-6">Latest Release</H3>
          <div className="bg-white/80 backdrop-blur-sm border-4 border-western-brown rounded-lg p-6 shadow-2xl">
            <SpotifyEmbed />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <H3 className="text-western-brown text-center mb-8">
            Available On:
          </H3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {streamingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center h-20 hover:scale-110 transition-all duration-300 group"
              >
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  width={50}
                  height={50}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-sm font-semibold text-western-brown text-center">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
