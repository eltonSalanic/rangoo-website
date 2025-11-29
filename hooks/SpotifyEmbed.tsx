"use client";

import { useState } from "react";

export function SpotifyEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full" style={{ height: "352px" }}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl z-10">
          <p className="text-white text-lg font-semibold">Loading Spotify Player...</p>
        </div>
      )}
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/5gW3HMUXLWNcjbmnB7hUPS?utm_source=generator&theme=0"
        width="100%"
        height="352"
        onLoad={() => { setLoaded(true); console.log("Spotify loaded!") }}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title="Spotify Player"
      />
    </div>
  )
}
