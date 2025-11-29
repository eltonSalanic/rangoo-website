import type { Metadata } from "next";
import { Inter, Rye } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReactQueryProvider } from "@/lib/queryClient";
import { ScrollingTumbleweed } from "@/components/effects/ScrollingTumbleweed";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rye",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rangoo | Western Rock Band",
  description: "Indie Surf Rock",
  keywords: ["Rangoo", "indie surf rock", "IE indie rock", "IE band", "live music"],
  authors: [{ name: "Rangoo" }],
  openGraph: {
    title: "Rangoo Band",
    description: "Indie Surf Rock",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Rangoo",
    images: [
      {
        url: "/assets/SkullLogo.webp",
        width: 800,
        height: 800,
        alt: "Rangoo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangoo Band",
    description: "IE Indie Surf Rock",
    images: ["/assets/SkullLogo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rye.variable}`}>
      <body className="antialiased">
        <ReactQueryProvider>
          <Navbar />
          <ScrollingTumbleweed />
          <main>{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
