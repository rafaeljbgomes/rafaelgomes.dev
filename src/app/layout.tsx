import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
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
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rafael Gomes | Junior Backend Engineer & DevOps",
    description: "Backend engineering, delivery discipline, and practical systems architecture.",
    url: siteUrl ? "/" : undefined,
    siteName: "Rafael Gomes Portfolio",
  },
  twitter: {
    card: "summary_large_image",
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
