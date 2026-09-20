import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIVE10 Productions",
  description: "FIVE10 Productions — We make things happen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
