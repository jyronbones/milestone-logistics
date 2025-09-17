import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Milestone Group Logistics",
  description: "Trusted logistics, transportation, and supply chain solutions.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Milestone Group Logistics",
    description: "Your trusted partner for logistics and transportation.",
    url: "https://www.milestone.com", // TODO: Update site URL
    siteName: "Milestone Group Logistics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
