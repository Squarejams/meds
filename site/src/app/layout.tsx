import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divine Fitness — Women's Fitness Website",
  description:
    "Empowering women to transform their bodies and minds through personalized fitness programs.",
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
