import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bensen Wang — systems, ML, robots",
  description: "Systems engineer building minimal software, ML experiments, and battlebots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
