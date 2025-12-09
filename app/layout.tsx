import type { Metadata } from "next";
import "./globals.css";
import "phosphor-icons/src/css/icons.css";
import "../public/scss/default.scss";
import "../public/scss/section.scss";

export const metadata: Metadata = {
  title: "Blaze - Complete Event Management System",
  description:
    "A smart solution for managing events, tracking participants, handling ticketing, and analyzing event performance with real-time insights.",
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
