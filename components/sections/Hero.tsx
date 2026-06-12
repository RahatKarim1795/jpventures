'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const TAGLINE_LINES = [
  'Architecture Excellence—',
  'Your prestigious address',
  'for generations',
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

      <div className="absolute top-0 left-1/2 z-10 flex h-1/3 w-1/2 flex-col items-end justify-end p-6 sm:p-8 md:p-10">
        <h1
          ref={titleRef}
          className="text-left text-5xl font-semibold leading-[0.95] lg:text-7xl"
        >
          <span
            className="block text-[1.18em] font-normal"
            style={{ fontFamily: 'var(--font-italianno), cursive' }}
          >
            JP
          </span>
          <span
            className="block font-light"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            BUSINESS CENTER
          </span>
        </h1>
      </div>

      <div className="absolute top-[60%] left-[20%] z-10 w-[60%]">
        <p className="text-left text-2xl leading-snug font-medium lg:text-4xl">
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
