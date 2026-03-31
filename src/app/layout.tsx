import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alex Intelligence Inc. | Software Engineering & AI Consulting",
  description:
    "Alex Intelligence Inc. — Software engineering, content creation, and AI consulting. Led by Alex Olyaiy, software engineer and AI educator based in Vancouver.",
  keywords: [
    "Alex Intelligence Inc",
    "Alex Olyaiy",
    "Software Engineering",
    "AI Consulting",
    "Content Creator",
    "AI Educator",
    "Vancouver",
    "React",
    "TypeScript",
    "Full Stack Developer",
  ],
  authors: [{ name: "Alex Olyaiy" }],
  creator: "Alex Olyaiy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexintelligence.co",
    title: "Alex Intelligence Inc. | Software Engineering & AI Consulting",
    description:
      "Software engineering, content creation, and AI consulting. Led by Alex Olyaiy, software engineer and AI educator based in Vancouver.",
    siteName: "Alex Intelligence Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Intelligence Inc. | Software Engineering & AI Consulting",
    description:
      "Software engineering, content creation, and AI consulting. Led by Alex Olyaiy, software engineer and AI educator based in Vancouver.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <main className="flex-1">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
