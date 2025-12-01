import { Metadata } from "next";
import { ShowsList } from "@/components/shows/ShowsList";
import './shows.css';

export const metadata: Metadata = {
  title: "Shows | Rangoo",
  description: "Tickets to Indie Surf Rock, Rangoo",
  openGraph: {
    title: "Shows | Rangoo",
    description: "Tickets to Indie Surf Rock, Rangoo",
  },
};

export default function ShowsPage() {
  return (
    <div className="shows-page-container min-h-screen relative py-24 before:inset-0 before:bg-black/50 before:absolute">
      {/* background is controlled through css */}
      <div className="section-container text-center mb-12 relative z-10">
        <h1 className="ml-3 text-6xl font-display text-western-amber">
          Upcoming Shows
        </h1>

        <p className="text-xl text-western-tan max-w-2xl mx-auto mt-4">
          Get your tickets before they're gone!
        </p>
      </div>
      <ShowsList />
    </div>
  );
}
