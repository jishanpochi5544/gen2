
import type { Metadata } from 'next';
// import { GeistSans } from 'geist/font/sans'; // Removed
// import { GeistMono } from 'geist/font/mono'; // Removed
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: 'GenX Secure | Advanced Security Solutions',
    template: '%s | GenX Secure',
  },
  description: 'GenX Secure offers cutting-edge security solutions including CCTV, DVRs, NVRs, access control, and more. Protect your assets with our reliable technology.',
  keywords: ['security systems', 'CCTV', 'DVR', 'NVR', 'access control', 'surveillance', 'GenX Secure'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}> {/* Removed GeistSans.variable and GeistMono.variable */}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
