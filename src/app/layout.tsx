import type { Metadata } from "next";
import "./globals.css";
import { Alexandria as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import ConvexClientProvider from "./ConvexClientProvider";
import { ClerkProvider } from '@clerk/nextjs'

const fontSans = FontSans({
  subsets: ["arabic"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.className
      )}>
        <ClerkProvider >
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
