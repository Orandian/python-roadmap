import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Python Learning Roadmap",
  description: "A structured, milestone-based roadmap for learning Python from beginner to specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
