import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Ivan - Visual Designer",
  description: "Innovative designer for a digital age",
};

function Navigation() {
  return (
    <nav className="fixed top-0 right-0 p-6 z-50">
      <div className="flex space-x-6">
        <Link 
          href="/" 
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
        >
          Home
        </Link>
        <Link 
          href="/contact" 
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
