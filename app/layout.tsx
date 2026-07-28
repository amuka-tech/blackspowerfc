import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/lib/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blacks Power FC | The Black Warriors",
  description: "Official website of Blacks Power FC, the reigning FUFA Big League 2025/2026 Champions.",
  icons: {
    icon: '/logo.png',
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
      className={`${inter.variable} ${oswald.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-brand-dark text-brand-light font-body">
        <CartProvider>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
