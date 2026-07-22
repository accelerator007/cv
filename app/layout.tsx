import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ali Al-Ajmi — Engineer, Builder & Founder',
  description: 'Portfolio of Ali Hussein Ali Al-Ajmi — Networking & Database Engineer and CEO of Khos.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body>{children}</body></html>;
}
