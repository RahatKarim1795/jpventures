'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home', href: '/#top' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Schedule a Visit', href: '/contact' },
] as const;

const SCROLL_DELTA = 8;
const REVEAL_THRESHOLD = 120;
const TOP_OFFSET = 40;

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const upwardAccum = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY <= TOP_OFFSET) {
        setVisible(true);
        upwardAccum.current = 0;
        lastScrollY.current = currentY;
        return;
      }

      if (Math.abs(delta) < SCROLL_DELTA) return;

      if (delta > 0) {
        upwardAccum.current = 0;
        setVisible(false);
      } else {
        upwardAccum.current += Math.abs(delta);
        if (upwardAccum.current >= REVEAL_THRESHOLD) {
          setVisible(true);
          upwardAccum.current = 0;
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ease-out ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex items-center gap-6 sm:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xl font-medium tracking-wide text-white transition-opacity hover:opacity-70 sm:text-xl"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
