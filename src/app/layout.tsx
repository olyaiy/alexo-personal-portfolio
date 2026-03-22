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
  title: "Alex Olyaiy | Engineer & AI Educator",
  description:
    "Full-stack engineer and AI educator reaching 1.5M people. Computer science student at UBC and founder of High Tide Digital.",
  keywords: [
    "Alex Olyaiy",
    "Software Engineer",
    "AI Educator",
    "UBC",
    "Computer Science",
    "High Tide Digital",
    "Full Stack Developer",
    "Vancouver",
  ],
  authors: [{ name: "Alex Olyaiy" }],
  creator: "Alex Olyaiy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexolyaiy.com",
    title: "Alex Olyaiy | Engineer & AI Educator",
    description:
      "Full-stack engineer and AI educator reaching 1.5M people. Computer science student at UBC and founder of High Tide Digital.",
    siteName: "Alex Olyaiy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Olyaiy | Engineer & AI Educator",
    description:
      "Full-stack engineer and AI educator reaching 1.5M people. Computer science student at UBC and founder of High Tide Digital.",
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
