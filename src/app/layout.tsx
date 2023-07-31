import { ActiveLink } from "@ju/components/ActiveLink";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ju.am",
  description: "Personal website of Julian Kempff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 flex flex-row items-baseline justify-center py-3 md:py-6 bg-gradient-to-b from-50% from-background to-background/0">
          <ActiveLink exactMatch href="/">
            About
          </ActiveLink>
          <ActiveLink href="/signals">Signals</ActiveLink>
        </nav>

        {children}
      </body>
    </html>
  );
}
