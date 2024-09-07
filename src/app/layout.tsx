import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/auth";

import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: "Muhumuza Ai",
  description: "Your Friendly Chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <AuthProvider>

      <body className="">
        {children}
      <Analytics/>
        </body>
      </AuthProvider>
    </html>
  );
}
