import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rangoo",
  description:
    "Rangoo – music, tour dates, and more. Stream on Spotify, Apple Music, and more.",
  openGraph: {
    title: "Rangoo",
    description: "Music, tour dates, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
