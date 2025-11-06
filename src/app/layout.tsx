import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
  title: "Alex Olyaiy | Developer",
  description: "Full-stack AI developer and computer science student at UBC. Co-founder of High Tide Digital, specializing in modern web development.",
  keywords: ["Alex Olyaiy", "Web Developer", "UBC", "Computer Science", "High Tide Digital", "Full Stack Developer", "Vancouver"],
  authors: [{ name: "Alex Olyaiy" }],
  creator: "Alex Olyaiy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexolyaiy.com",
    title: "Alex Olyaiy | Developer",
    description: "Full-stack developer and computer science student at UBC. Co-founder of High Tide Digital, specializing in modern web development.",
    siteName: "Alex Olyaiy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Olyaiy | Developer",
    description: "Full-stack developer and computer science student at UBC. Co-founder of High Tide Digital, specializing in modern web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
