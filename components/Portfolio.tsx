'use client';

import { useEffect, useRef } from 'react';
import { initPortfolio } from '@/lib/portfolio-init';

export default function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;

    fetch('/portfolio-markup.html')
      .then((res) => res.text())
      .then((html) => {
        if (cancelled || !rootRef.current) return;
        rootRef.current.innerHTML = html;
        initPortfolio();
      })
      .catch(console.error);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="portfolio-root relative z-[1] font-sans antialiased"
    />
  );
}
