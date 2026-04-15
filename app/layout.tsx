import type { Metadata } from "next";
import { Oswald } from "next/font/google";
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
  authors: { name: "Elton Salanic", url: "https://github.com/eltonSalanic" },
};

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="font-oswald antialiased">{children}</body>
    </html>
  );
}
