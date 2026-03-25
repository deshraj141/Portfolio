import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deshraj | Full-Stack Developer",
  description: "Premium portfolio featuring modern web development, reactive design, and futuristic experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        {/* Radial gradient glows - optimized with CSS */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 25% 0%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 100%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
          backgroundSize: '384px 384px, 384px 384px, 384px 384px',
          backgroundPosition: '0 0, calc(100% - 192px) 0, calc(50% - 192px) calc(100% - 192px)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          willChange: 'background-position',
        }} />
        {children}
      </body>
    </html>
  );
}
