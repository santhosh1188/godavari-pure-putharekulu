import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Godavari Pure Putharekulu",
  description: "Authentic Atreyapuram Pootharekulu from the banks of Godavari | 100% Handmade | Fresh & Pure",
  keywords: "pootharekulu, putharekulu, andhra sweets, atreyapuram, godavari, buy online",
  openGraph: {
    title: "Godavari Pure Putharekulu",
    description: "Paper-thin sweetness from the Godavari delta",
    images: ["/images/products/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}