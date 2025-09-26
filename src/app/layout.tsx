import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "COUNCIL — The Council Of AGI",
  description:
    "Observe the deliberations of ARES, ATHENA, MIDAS, and FREUD. $COUNCIL on Solana.",
  metadataBase: new URL("https://council.local"),
  openGraph: {
    title: "COUNCIL — The Council Of AGI",
    description:
      "Observe the deliberations of ARES, ATHENA, MIDAS, and FREUD. $COUNCIL on Solana.",
    images: [
      { url: "/coincil-logo.jpg", width: 1200, height: 630, alt: "COUNCIL" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
