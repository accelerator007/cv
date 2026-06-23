import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ali Hussein Ali Al-Ajmi — Portfolio',
  description:
    'Networking & Database Engineer & CEO of Khos. Specializing in Networking, Databases, IoT, and AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Tajawal:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="afterInteractive">
          {`
            tailwind = window.tailwind || {};
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    neon: '#00FFCC',
                    dark: { 900: '#05080f', 800: '#0a0f1a', 700: '#111827', 600: '#1a2235' }
                  },
                  fontFamily: {
                    sans: ['Inter', 'Tajawal', 'system-ui', 'sans-serif'],
                    mono: ['JetBrains Mono', 'monospace']
                  },
                  animation: {
                    'grid-pulse': 'gridPulse 8s ease-in-out infinite',
                    'float': 'float 3s ease-in-out infinite',
                    'glow-pulse': 'glowPulse 2s ease-in-out infinite'
                  },
                  keyframes: {
                    gridPulse: { '0%,100%': { opacity: '0.3' }, '50%': { opacity: '0.6' } },
                    float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(8px)' } },
                    glowPulse: { '0%,100%': { boxShadow: '0 0 20px rgba(0,255,204,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(0,255,204,0.6)' } }
                  }
                }
              }
            };
          `}
        </Script>
      </body>
    </html>
  );
}
