import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Would You Pay?",
  description: "How much would you pay per month for these products?",
  
  // Open Graph (OG) for Facebook, LinkedIn, etc.
  openGraph: {
    title: "Would You Pay?",
    description: "How much would you pay per month for these products?",
    url: "https://wouldyoupay.vercel.app",
    siteName: "Would You Pay?",
    images: [
      {
        url: "https://glfrhzonunwevxkhjgqg.supabase.co/storage/v1/object/public/websites/seo/og-image.jpeg",
        width: 3724,
        height: 4660,
        alt: "Would You Pay? Preview",
      },
    ],
    type: "website",
  },

  // Twitter Card for Twitter previews
  twitter: {
    card: "summary_large_image",
    title: "Would You Pay?",
    description: "How much would you pay per month for these products?",
    images: ["https://glfrhzonunwevxkhjgqg.supabase.co/storage/v1/object/public/websites/seo/og-image.jpeg"], 
  },

  // Favicon & Icons
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💸</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💸</text></svg>",
  },

  // Canonical URL for SEO
  alternates: {
    canonical: "https://wouldyoupay.vercel.app"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
      <Analytics />
    </html>
  );
}