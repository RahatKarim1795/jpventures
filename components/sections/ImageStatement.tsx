'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const LINES = [
  { text: 'The best', top: 'top-[33%]', delay: 0 },
  { text: 'comes as', top: 'top-[59%]', delay: 0.08 },
  { text: 'standard', top: 'top-[85%]', delay: 0.16 },
] as const;

export default function ImageStatement() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#1d1410] text-white">
      <div className="absolute inset-x-[5%] top-[33%] bottom-[15%]">
        <Image src="/images/10.jpeg" alt="JP Ventures feature image" fill className="object-cover" />
      </div>

      {LINES.map((line) => (
        <motion.p
          key={line.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: line.delay }}
          className={`absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-7xl font-semibold md:text-9xl ${line.top}`}
        >
          {line.text}
        </motion.p>
      ))}
    </section>
  );
}
