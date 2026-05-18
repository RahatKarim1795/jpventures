'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export default function Hero_old({ title, description, backgroundImage }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      // Animate description
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4,
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative min-h-[450px] md:min-h-[500px] flex items-center pt-20">
      {/* Background Image (optional) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            quality={85}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight-blue/90 via-brand-midnight-blue/70 to-brand-midnight-blue/90"></div>
        </div>
      )}

      {/* Solid Background (if no image) */}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0 bg-brand-midnight-blue"></div>
      )}

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl text-white">
          <h1 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          >
            {title}
          </h1>
          {description && (
            <p 
              ref={descriptionRef}
              className="text-lg md:text-xl text-brand-ceramic leading-relaxed"
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

