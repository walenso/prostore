import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prostore',
  description: 'A modern store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}