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
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title:
    "Placeholder Image Generator - Create Placeholder Images | placeholder-image",
  description:
    "Free online placeholder image generator. Create custom placeholder images with configurable dimensions, colors, text, and formats. Download as PNG, JPEG, or WebP.",
  keywords: [
    "placeholder image generator",
    "placeholder image",
    "dummy image",
    "test image generator",
    "placeholder graphic",
    "mockup image",
  ],
  authors: [{ name: "placeholder-image" }],
  openGraph: {
    title: "Placeholder Image Generator - Create Placeholder Images",
    description:
      "Free online tool to create custom placeholder images with configurable dimensions, colors, text, and formats.",
    url: "https://placeholder-image.vercel.app",
    siteName: "placeholder-image",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Placeholder Image Generator - Create Placeholder Images",
    description:
      "Free online tool to create custom placeholder images with configurable dimensions, colors, text, and formats.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://placeholder-image.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Placeholder Image Generator",
              description:
                "Free online placeholder image generator. Create custom placeholder images with configurable dimensions, colors, text, and formats.",
              url: "https://placeholder-image.vercel.app",
              applicationCategory: "DesignApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Custom width and height",
                "Background and text color picker",
                "Custom text overlay",
                "PNG, JPEG, WebP export",
                "Common size presets",
                "Live canvas preview",
                "Copy as data URI",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
