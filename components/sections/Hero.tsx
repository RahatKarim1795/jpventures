'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import DotField from '@/components/effects/DotField';

interface HeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({
  title,
  description,
  eyebrow,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4,
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.6,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#120F17]">
      <div className="absolute inset-0 z-0">
        <DotField
          backgroundImage="/images/1.jpeg"
          dotRadius={2}
          dotSpacing={12}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(209, 168, 147, 0.95)"
          gradientTo="rgba(29, 20, 16, 0.7)"
          glowColor="#1d1410"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-black/25" />

      <div className="absolute left-4 top-1/2 z-10 w-[calc(100%-2rem)] max-w-2xl -translate-y-1/2 text-white sm:left-6 md:left-10 lg:left-16">
        <div>
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/90">
              {eyebrow}
            </p>
          )}

          <h1
            ref={titleRef}
            className="text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
          >
            {title}
          </h1>

          {description && (
            <p
              ref={descriptionRef}
              className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-200 md:text-base"
            >
              {description}
            </p>
          )}

          {ctaLabel && ctaHref && (
            <Link
              ref={ctaRef}
              href={ctaHref}
              className="mt-7 inline-flex items-center justify-center rounded-full border border-violet-300/40 bg-violet-500/20 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500/35"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
