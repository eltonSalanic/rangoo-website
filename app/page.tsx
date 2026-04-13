import Image from "next/image";
import type { Metadata } from "next";
import BandsInTownWidget from "./components/BandsInTownWidget";

export const metadata: Metadata = {
  title: "Rangoo",
  description:
    "Rangoo – music, tour dates, and more. Stream on Spotify, Apple Music, and beyond.",
};

/* ─── Inline SVG paths for streaming platforms ────────────────────── */

const SpotifyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const AppleMusicIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.762-.69c-.656-.122-1.316-.177-1.979-.191-.079-.004-.298-.012-.328-.013H6.495c-.03.001-.25.009-.328.013-.663.014-1.323.069-1.979.191a5.022 5.022 0 0 0-1.762.69C1.307 1.625.562 2.625.245 3.934A9.23 9.23 0 0 0 .005 6.124c-.004.082-.005.198-.006.282v11.189c.001.084.002.2.006.282a9.23 9.23 0 0 0 .24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 0 0 1.762.69c.656.122 1.316.177 1.979.191.078.004.298.012.328.013h11.011c.03-.001.249-.009.328-.013.663-.014 1.323-.069 1.979-.191a5.022 5.022 0 0 0 1.762-.69c1.117-.734 1.862-1.733 2.18-3.043a9.23 9.23 0 0 0 .24-2.19c.004-.082.005-.198.006-.282V6.406c-.001-.084-.002-.2-.006-.282zM12.003 3.24c.97 0 1.893.383 2.601 1.079l-1.025 1.069A2.282 2.282 0 0 0 12.003 4.8a2.285 2.285 0 0 0-2.275 2.275v7.253a2.285 2.285 0 0 0 2.275 2.275 2.285 2.285 0 0 0 2.275-2.275v-1.42l-2.275-.002V11.3h3.835v3.028a3.843 3.843 0 0 1-3.835 3.836 3.843 3.843 0 0 1-3.835-3.836V7.075A3.843 3.843 0 0 1 12.003 3.24z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);

const SoundCloudIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M1.175 12.225c-.015 0-.024.009-.024.024l-.315 2.154.315 2.07c0 .015.01.024.024.024s.024-.009.024-.024l.36-2.07-.36-2.154c0-.015-.009-.024-.024-.024zm-.899.828c-.02 0-.03.01-.03.03L0 14.403l.246 1.308c0 .02.01.03.03.03s.03-.01.03-.03l.277-1.308-.277-1.32c0-.02-.01-.03-.03-.03zm1.81-.477c-.024 0-.044.02-.044.044l-.3 1.783.3 1.727c0 .024.02.044.044.044s.044-.02.044-.044l.338-1.727-.338-1.783c0-.024-.02-.044-.044-.044zm.942-.4c-.027 0-.05.023-.05.05l-.284 2.182.284 2.055c0 .027.023.05.05.05s.05-.023.05-.05l.322-2.055-.322-2.182c0-.027-.023-.05-.05-.05zm.96-.093c-.034 0-.06.025-.06.06L3.68 14.4l.25 2.054c0 .034.026.06.06.06.034 0 .06-.026.06-.06l.282-2.054-.282-2.255c0-.034-.026-.06-.06-.06zm.972-.078c-.04 0-.07.03-.07.07l-.236 2.333.236 2.023c0 .04.03.07.07.07s.07-.03.07-.07l.27-2.023-.27-2.333c0-.04-.03-.07-.07-.07zm.975-.066c-.044 0-.077.033-.077.077l-.22 2.4.22 1.99c0 .044.033.077.077.077s.077-.033.077-.077l.25-1.99-.25-2.4c0-.044-.033-.077-.077-.077zM8.9 11.68c-.05 0-.088.038-.088.088l-.205 2.633.205 1.965c0 .05.038.088.088.088s.088-.038.088-.088l.235-1.965-.235-2.633c0-.05-.038-.088-.088-.088zm.98-.198c-.056 0-.1.044-.1.1l-.188 2.82.188 1.93c0 .056.044.1.1.1s.1-.044.1-.1l.215-1.93-.215-2.82c0-.056-.044-.1-.1-.1zm1.93 8.155c3.105 0 4.62-2.293 4.62-4.29 0-1.96-1.3-3.65-3.293-3.973-.165-1.62-1.53-2.883-3.2-2.883-.688 0-1.34.24-1.857.634-.2.158-.248.464-.058.634.19.17.45.16.67-.01.36-.268.8-.418 1.245-.418 1.2 0 2.175.975 2.175 2.175 0 .12-.01.237-.03.352-.055.31.175.6.49.6h.235c1.41 0 2.55 1.14 2.55 2.55 0 1.41-1.14 2.55-2.55 2.55H8.01c-.14 0-.26-.11-.26-.25V9.9c0-.138-.11-.25-.25-.25-.14 0-.25.112-.25.25v9.512c0 .138.11.25.25.25h3.63z" />
  </svg>
);

const BandcampIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z" />
  </svg>
);

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

        <nav className="site-nav" aria-label="Main navigation">
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
            <li className="nav-item nav-item--disabled">
              <span aria-disabled="true">Contact</span>
            </li>
          </ul>
        </nav>
      </header>

      <div className="section-divider" />

      {/* ─── Music ────────────────────────────────────────────────── */}
      <section id="music" className="section music-section" aria-label="Music">
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
    </>
  );
}
