import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bram Bronswijk - Curriculum Vitae",
  description: "Bram Bronswijk's Curriculum Vitae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
