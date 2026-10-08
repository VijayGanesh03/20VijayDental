import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vijay Dental — Modern Dentistry in Chennai",
  description: "Personalised modern dental care, treatments and WhatsApp appointments at Vijay Dental Studio, Chennai.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
