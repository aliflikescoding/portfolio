import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alif Wibowo",
  description: "Alif Wibowo's portfolio/personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" /> {/* Add this line for favicon */}
      </head>
      <body className="bg-customCream text-customBlack font-roboto scroll-smooth">
        {children}
      </body>
    </html>
  );
}
