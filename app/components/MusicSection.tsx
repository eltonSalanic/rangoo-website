import {
  SiSpotify as SpotifyIcon,
  SiApplemusic as AppleMusicIcon,
  SiYoutube as YouTubeIcon,
  SiSoundcloud as SoundCloudIcon,
  SiYoutubemusic as YoutubeMusicIcon,
  SiTidal as TidalIcon,
  SiDeezer as DeezerIcon,
} from "@icons-pack/react-simple-icons";
import PageSection from "./PageSection";

const streamingLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/7cVETDMpgkNTkat8uTwETx",
    Icon: SpotifyIcon,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/rangoo/1700507900",
    Icon: AppleMusicIcon,
  },
  {
    label: "Youtube Music",
    href: "https://music.apple.com/us/artist/rangoo/1700507900",
    Icon: YoutubeMusicIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC-IZ-FlBkl-1l9tpVLLMVHA",
    Icon: YouTubeIcon,
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/rangoo-sc",
    Icon: SoundCloudIcon,
  },
  {
    label: "Tidal",
    href: "https://tidal.com/artist/26211974",
    Icon: TidalIcon,
  },
  {
    label: "Deezer",
    href: "https://www.deezer.com/en/artist/136788932",
    Icon: DeezerIcon,
  },
];

export default function MusicSection() {
  return (
    <>
      <PageSection id="music" ariaLabel="Music" className="xl:px-80">
        <header className="music-header animate-fade-up">
          <p className="section-label">Listen</p>
          <h2 className="music-title">
            <span className="music-title-line">Music</span>
          </h2>
        </header>

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

        <div
          className="streaming-strip animate-fade-up animate-fade-up--delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          aria-label="Also available on"
        >
          <span className="streaming-label">Also on</span>
          <div className="flex flex-row justify-center gap-4 flex-wrap">
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
      </PageSection>

      <div className="section-divider" />
    </>
  );
}
