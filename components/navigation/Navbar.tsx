'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const LEFT_LINKS = [
  { label: 'Home', href: '/#top' },
  { label: 'Projects', href: '/#projects' },
] as const;

const CTA_LINK = { label: 'Schedule a Visit', href: '/contact' } as const;

const SCROLL_DELTA = 8;
const REVEAL_THRESHOLD = 120;
const TOP_OFFSET = 40;

const linkClassName =
  'font-serif text-xl font-medium tracking-wide text-white transition-opacity hover:opacity-70';

const glassClassName =
  'items-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 font-serif text-xl font-medium tracking-wide text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 transition-all hover:bg-white/15 hover:border-white/35';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full">
      <nav
        aria-label="Main navigation"
        className={`w-full transition-all duration-300 ease-out ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex w-full items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          {/* Desktop left links */}
          <ul className="hidden items-center gap-6 md:flex md:gap-10">
            {LEFT_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href={CTA_LINK.href} className={`${glassClassName} hidden md:inline-flex`}>
            {CTA_LINK.label}
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="relative z-50 ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-xl backdrop-saturate-150 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 origin-center bg-white transition-all duration-300 ${
                  menuOpen ? '-translate-y-1/2 rotate-45' : '-translate-y-[8px]'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 origin-center bg-white transition-all duration-300 ${
                  menuOpen ? '-translate-y-1/2 -rotate-45' : 'translate-y-[6px]'
                }`}
              />
            </span>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div
          id="mobile-nav-menu"
          className={`fixed inset-0 z-40 bg-[#17100d] transition-opacity duration-300 md:hidden ${
            menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={!menuOpen}
          onClick={closeMenu}
        >
          <div
            className={`absolute right-5 top-[4.5rem] w-[min(calc(100%-2.5rem),20rem)] rounded-2xl border border-white/20 bg-[#17100d] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 sm:right-8 ${
              menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-5">
              {LEFT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClassName} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={CTA_LINK.href} className={`${glassClassName} inline-flex`} onClick={closeMenu}>
                  {CTA_LINK.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
