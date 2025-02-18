import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
import Head from "next/head";

export const metadata: Metadata = {
  title: "Would You Pay?",
  description: "How much would you pay per month for these SAAS products?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}