import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: "Enes Talip",
  description: "Welcome to my personal website where I showcase my work and share my thoughts.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className={`${inter.className} min-h-screen bg-white text-black dark:bg-black dark:text-white`}>
            <ClientLayout>{children}</ClientLayout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
