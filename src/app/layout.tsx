import type { Metadata } from "next";
import "@/styles/fonts.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Paldar | Homepage",
  description: "Palestine dar for the Arabization of sciences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
