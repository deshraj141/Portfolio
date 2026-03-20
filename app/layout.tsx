import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deshraj | Full-Stack Developer",
  description: "Premium portfolio featuring modern web development, reactive design, and futuristic experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body 
        className="min-h-full flex flex-col relative"
        style={{
          backgroundColor: '#050505',
          color: '#ffffff',
        }}
      >
        {/* Radial gradient glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" 
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
            }}
          />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15" 
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent)',
            }}
          />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-10" 
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15), transparent)',
            }}
          />
        </div>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
