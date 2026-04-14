import type { Metadata } from "next";
import ContactSection from "./components/ContactSection";
import FlyerSection from "./components/FlyerSection";
import MusicSection from "./components/MusicSection";
import SiteHeader from "./components/SiteHeader";
import TourSection from "./components/TourSection";

export const metadata: Metadata = {
  title: "Rangoo",
  description:
    "Rangoo – music, tour dates, and more. Stream on Spotify, Apple Music, and beyond.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <FlyerSection />
      <MusicSection />
      <TourSection />
      <ContactSection />
    </>
  );
}
