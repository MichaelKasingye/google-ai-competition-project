import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth";

// const inter = Inter({ subsets: ["latin"] });

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

      {/* <body className={inter.className}>{children}</body> */}
      <body className="">{children}</body>
      </AuthProvider>

    </html>
  );
}
