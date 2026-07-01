'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const TAGLINE_LINES = [
  'Architecture Excellence—',
  'A landmark commercial address',
  'in Bashundhara R/A',
] as const;

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineLineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      const lines = taglineLineRefs.current.filter(Boolean);
      if (lines.length > 0) {
        gsap.from(lines, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          delay: 0.4,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#120F17] text-white"
      style={{ height: 'max(100svh, calc(100vw * (3456 / 4888)))' }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/05.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute left-0 top-24 z-10 flex w-full flex-col items-center justify-start px-6 sm:top-28 sm:px-8 md:left-1/2 md:top-0 md:h-1/3 md:w-1/2 md:items-end md:justify-end md:p-10">
        <h1
          ref={titleRef}
          className="relative text-center font-serif text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-left lg:text-7xl"
        >
          <span
            className="block pl-0 text-[2.36em] font-normal text-[#D3D6D8]"
            style={{ fontFamily: 'var(--font-italianno), cursive' }}
          >
            <span className="relative inline-block">
              <span className="invisible">JP</span>
              <Image
                src="/images/Asset_24x.png"
                alt="JP"
                fill
                className="object-contain"
              />
            </span>
          </span>
          <span
            className="block font-light text-white"
          >
            {/* [#D3D6D8] - platinum */}
            BUSINESS CENTER
          </span>
          <span className="pointer-events-none absolute left-1/2 top-full mt-2 block w-max -translate-x-1/2 text-[0.72em] font-light leading-none text-white/90 md:left-0 md:translate-x-0">
            <span className="inline-flex items-center justify-center gap-4 align-middle md:justify-start">
              <span>By</span>
              <span className="relative inline-block h-[1.9em] w-[9.6em]">
                <Image
                  src="/images/Jams _ Patron logo.png"
                  alt="Jams Patron logo"
                  fill
                  className="object-contain object-left"
                />
              </span>
            </span>
          </span>
        </h1>
      </div>

      <div className="absolute top-[60%] left-[20%] z-10 w-[60%]">
        <p className="text-left font-serif text-2xl leading-snug font-medium lg:text-4xl">
          {TAGLINE_LINES.map((line, index) => (
            <span
              key={line}
              ref={(el) => {
                taglineLineRefs.current[index] = el;
              }}
              className="block"
            >
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
