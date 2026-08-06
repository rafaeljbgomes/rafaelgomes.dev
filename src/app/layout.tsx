import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: "Rafael Gomes | Junior Backend Engineer & DevOps",
    template: "%s | Rafael Gomes",
  },
  description:
    "Rafael Gomes is a junior backend engineer focused on reliable APIs, service design, containers, CI/CD, and practical architecture.",
  applicationName: "Rafael Gomes Portfolio",
  authors: [{ name: "Rafael Gomes" }],
  keywords: ["backend engineer", "DevOps", "platform engineering", "software architecture", "Rafael Gomes"],
  robots: { index: true, follow: true },
  alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rafael Gomes | Junior Backend Engineer & DevOps",
    description: "Backend engineering, delivery discipline, and practical systems architecture.",
    url: process.env.NEXT_PUBLIC_SITE_URL ? "/" : undefined,
    siteName: "Rafael Gomes Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Rafael Gomes | Junior Backend Engineer & DevOps",
    description: "Backend engineering, delivery discipline, and practical systems architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
