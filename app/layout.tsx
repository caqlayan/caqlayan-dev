import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arda Caglayan Ercan — Next.js & Mobile App Developer",
  description:
    "Full-stack engineer specializing in Next.js web apps and Flutter mobile apps. 110,000+ downloads shipped. Available for freelance.",
  openGraph: {
    title: "Arda Caglayan Ercan — Next.js & Mobile App Developer",
    description:
      "Full-stack engineer specializing in Next.js web apps and Flutter mobile apps. 110,000+ downloads shipped.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
