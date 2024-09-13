import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Wars Character Of The Day",
  description: "SWAPI based character display"
};
export const fetchCache = 'force-no-store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
