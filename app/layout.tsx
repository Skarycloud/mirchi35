import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ... (keep metadata as is, I will skip it in replacement chunk if possible, but I need to be contiguous)
// Actually, I can just replace the imports and definitions, and then the body class separately if I used multi_replace, but replace_file_content needs contiguous.
// The file is small enough (100 lines) but I should avoid replacing unrelated metadata in the middle.
// I will use multi_replace to target the top imports/defs and the bottom body tag.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mirchi35.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mirchi35 | India's First Live Discovery Platform",
    template: "%s | Mirchi35",
  },
  description:
    "Discover what's hot and spicy nearby! Mirchi35 is India's first live discovery app where local vendors post LIVE updates. See deals, offers, and what's happening around you right now.",
  keywords: [
    "local discovery",
    "live deals",
    "nearby offers",
    "local business",
    "hyperlocal",
    "India",
    "Mirchi35",
    "live updates",
    "local vendors",
    "neighborhood deals",
  ],
  authors: [{ name: "Mirchi35" }],
  creator: "Mirchi35",
  publisher: "Mirchi35",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Mirchi35",
    title: "Mirchi35 – India's First Live Discovery Platform",
    description:
      "Discover what's hot and spicy nearby! See live deals, offers, and what's happening around you right now.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mirchi35 – Discover Local Deals Live",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirchi35 – India's First Live Discovery Platform",
    description:
      "Discover what's hot and spicy nearby! See live deals, offers, and what's happening around you right now.",
    images: ["/og.png"],
    creator: "@mirchi35",
  },
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
  verification: {
    // Add your verification codes here after setting up
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
