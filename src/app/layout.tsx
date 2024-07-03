import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Help2Dev IA",
  description: "Help2Dev IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
