import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BNKR Club Orizaba - Reservas",
  description: "Mapa interactivo y reservas para BNKR Club Orizaba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-bnkr-darkBg text-white`}>
        {children}
      </body>
    </html>
  );
}
