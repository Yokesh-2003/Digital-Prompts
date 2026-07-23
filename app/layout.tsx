import type { Metadata } from "next";
import { Inter, Bebas_Neue, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Prompts | Creative Digital Agency",
  description: "We build digital experiences that people remember. Premium websites, brands, and digital products with cinematic interactions.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  metadataBase: new URL("https://digitalprompts.agency"),
  openGraph: {
    title: "Digital Prompts | Creative Digital Agency",
    description: "We build digital experiences that people remember. Premium websites, brands, and digital products with cinematic interactions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Prompts | Creative Digital Agency",
    description: "We build digital experiences that people remember. Premium websites, brands, and digital products with cinematic interactions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${playfair.variable} font-sans antialiased bg-white text-dark relative min-h-screen overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
