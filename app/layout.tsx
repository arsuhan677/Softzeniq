import { Navbar } from "@/components/shared/Navbar";
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softzeniqit.xyz"),
  title: {
    default: "SoftZeniq | Build. Scale. Transform.",
    template: "%s | SoftZeniq",
  },
  description:
    "Premium IT solutions and software agency. We build and scale custom web apps, mobile apps, bespoke software, UI/UX, and SEO strategy for startups and brands worldwide.",
  keywords: [
    "software agency",
    "web development",
    "mobile app development",
    "UI/UX design",
    "custom software",
    "SEO optimization",
    "SoftZeniq",
    "tech agency"
  ],
  authors: [{ name: "SoftZeniq Team", url: "https://softzeniqit.xyz" }],
  creator: "SoftZeniq",
  publisher: "SoftZeniq",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softzeniqit.xyz",
    title: "SoftZeniq | Premium Web & Software Development Agency",
    description: "Premium IT solutions and software agency. We build and scale custom web apps, mobile apps, bespoke software, UI/UX, and SEO strategy for startups and brands worldwide.",
    siteName: "SoftZeniq IT",
    images: [
      {
        url: "/images/logo2.png",
        width: 1200,
        height: 630,
        alt: "SoftZeniq - Build. Scale. Transform.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftZeniq | Premium Web & Software Development Agency",
    description: "Premium IT solutions and software agency. We build and scale custom web apps, mobile apps, bespoke software, UI/UX, and SEO strategy for startups and brands worldwide.",
    images: ["/images/logo2.png"],
    creator: "@softzeniq",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} `}>
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
