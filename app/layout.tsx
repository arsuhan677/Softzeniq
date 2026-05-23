import { Navbar } from "@/components/shared/Navbar";
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/shared/Footer";
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
  title: "SoftZeniq — Build. Scale. Transform.",
  description:
    "Premium IT solutions and software agency. Web, mobile, custom software, UI/UX, SEO and growth for startups and businesses worldwide.",
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
      </body>
    </html>
  );
}
