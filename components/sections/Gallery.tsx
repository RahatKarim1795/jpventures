'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const PANELS = [
  {
    src: '/images/07.jpg',
    alt: 'JP Ventures gallery image 1',
    className: 'col-start-1 row-span-2 row-start-1',
    sizes: '33vw',
    delay: 0,
  },
  {
    src: '/images/02.jpg',
    alt: 'JP Ventures gallery image 2',
    className: 'col-start-2 row-start-1',
    sizes: '33vw',
    delay: 0.08,
  },
  {
    src: '/images/13.jpg',
    alt: 'JP Ventures gallery image 3',
    className: 'col-start-3 row-start-1',
    sizes: '33vw',
    delay: 0.16,
  },
  {
    src: '/images/15.jpeg',
    alt: 'JP Ventures gallery image 4',
    className: 'col-span-2 col-start-2 row-start-2',
    sizes: '66vw',
    delay: 0.24,
  },
] as const;

export default function Gallery() {
  return (
    <section className="h-screen w-full overflow-hidden">
      <div className="grid h-full grid-cols-3 grid-rows-2">
        {PANELS.map((panel) => (
          <motion.div
            key={panel.src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: panel.delay }}
            className={`group relative overflow-hidden ${panel.className}`}
          >
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes={panel.sizes}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
