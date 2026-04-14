import Image from "next/image";
import type { Metadata } from "next";
import BandsInTownWidget from "./components/BandsInTownWidget";
import FlyerCarousel from "./components/FlyerCarousel";
import {
  SiSpotify as SpotifyIcon,
  SiApplemusic as AppleMusicIcon,
  SiYoutube as YouTubeIcon,
  SiSoundcloud as SoundCloudIcon,
  SiBandcamp as BandcampIcon,
} from "@icons-pack/react-simple-icons";

export const metadata: Metadata = {
  title: "Rangoo",
  description:
    "Rangoo – music, tour dates, and more. Stream on Spotify, Apple Music, and beyond.",
};

const streamingLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/7cVETDMpgkNTkat8uTwETx",
    Icon: SpotifyIcon,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com",
    Icon: AppleMusicIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    Icon: YouTubeIcon,
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com",
    Icon: SoundCloudIcon,
  },
  {
    label: "Bandcamp",
    href: "https://bandcamp.com",
    Icon: BandcampIcon,
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Header ───────────────────────────────────────────────── */}
      <header className="site-header">
        <div className="header-logo-wrap animate-fade-up">
          <Image
            src="/MainLogo.PNG"
            alt="Rangoo"
            width={220}
            height={100}
            priority
            className="header-logo"
          />
        </div>

        <nav className="site-nav mb-2" aria-label="Main navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#music">Music</a>
            </li>
            <li className="nav-item">
              <a href="#tour">Tour</a>
            </li>
            <li className="nav-item nav-item--disabled">
              <span aria-disabled="true">Merch</span>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="section-divider" />

      {/* ─── Flyers ───────────────────────────────────────────────── */}
      <section className="section" aria-label="Flyers">
        <div className="section-inner">
          <div className="animate-fade-up">
            <FlyerCarousel />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Music ────────────────────────────────────────────────── */}
      <section
        id="music"
        className="section music-section px-6"
        aria-label="Music"
      >
        <div className="section-inner">
          <header className="music-header animate-fade-up">
            <p className="section-label">Listen</p>
            <h2 className="music-title">
              <span className="music-title-line">Music</span>
            </h2>
          </header>

          {/* Spotify Embed */}
          <div className="spotify-wrapper animate-fade-up animate-fade-up--delay-1">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px", display: "block" }}
              src="https://open.spotify.com/embed/artist/7cVETDMpgkNTkat8uTwETx?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Rangoo on Spotify"
            />
          </div>

          {/* Streaming Icons */}
          <div
            className="streaming-strip animate-fade-up animate-fade-up--delay-2 flex flex-col sm:flex-row"
            aria-label="Also available on"
          >
            <span className="streaming-label">Also on</span>
            <div className="flex flex-row gap-4">
              {streamingLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="streaming-icon-link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Tour ─────────────────────────────────────────────────── */}
      <section
        id="tour"
        className="section tour-section"
        aria-label="Tour dates"
      >
        <div className="section-inner">
          <header className="tour-header animate-fade-up">
            <p className="section-label">Live</p>
            <h2 className="tour-title">Tour Dates</h2>
          </header>

          <div className="animate-fade-up animate-fade-up--delay-1">
            <BandsInTownWidget />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Contact ──────────────────────────────────────────────── */}
      <section
        id="contact"
        className="section contact-section border-t border-site-white/5 bg-linear-to-b from-near-black to-site-black"
        aria-label="Contact"
      >
        <div className="section-inner text-center py-20">
          <header className="animate-fade-up">
            <p className="section-label">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-widest uppercase text-cream mb-8">
              Contact
            </h2>
          </header>

          <div className="animate-fade-up animate-fade-up--delay-1">
            <p className="text-neutral-400 mb-2 uppercase tracking-[0.2em] text-sm font-light">
              Booking
            </p>
            <a
              href="mailto:tissi@eleventhhourbooking.com"
              className="inline-block mt-2 text-lg sm:text-2xl text-orange hover:text-orange-bright transition-colors border-b border-orange/30 hover:border-orange-bright pb-1"
            >
              tissi@eleventhhourbooking.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
