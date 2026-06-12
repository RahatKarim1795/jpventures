'use client';

import { motion } from 'motion/react';
import Container from '@/components/ui/Container';

const STATS = [
  { value: '38.42', label: 'Katha of Space' },
  { value: '35', label: 'Stories of Height' },
  { value: '14,000', label: 'SFT Floor Plate' },
] as const;

const FEATURE_ROWS = [
  {
    title: 'Prime Location',
    description:
      'Positioned on a highly visible corner site with strong frontage and convenient access, the project offers outstanding address value for modern businesses.',
  },
  {
    title: 'Modern Design',
    description:
      'Flexible floor plates, efficient circulation, and a contemporary architectural language make each level adaptable to evolving commercial requirements.',
  },
  {
    title: 'Sustainable Build',
    description:
      'Future-focused planning and durable construction choices support long-term performance, comfort, and reliability across the life cycle of the building.',
  },
] as const;

export default function Features() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/aerial/1.jpeg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/aerial_1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#17100d]/10 via-[#17100d]/50 to-[#17100d]" />
      <div className="absolute inset-x-0 bottom-0 h-[34vh] bg-gradient-to-b from-[#17100d]/0 via-[#17100d]/80 to-[#17100d]" />
      <div className="absolute inset-x-0 bottom-0 h-[12vh] bg-[#17100d]" />

      <div className="relative z-10 py-8 md:py-14">
        <Container>
          <div className="grid grid-cols-3 gap-4 pt-4 md:gap-8 md:pt-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <p className="text-6xl font-semibold leading-none md:text-9xl">{stat.value}</p>
                <p className="mt-3 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 md:px-5 md:py-2 md:text-xl">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 md:mt-28">
            <hr className="mx-auto w-4/5 border-white/30" />
            {FEATURE_ROWS.map((feature, index) => (
              <div key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="grid w-full gap-8 py-10 md:grid-cols-2 md:gap-12 md:py-14"
                >
                  <h3 className="text-3xl font-semibold leading-tight md:text-4xl">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-white/75 md:text-lg">{feature.description}</p>
                </motion.div>

                {index < FEATURE_ROWS.length - 1 ? <hr className="mx-auto w-4/5 border-white/30" /> : null}
              </div>
            ))}
            <hr className="mx-auto w-4/5 border-white/30" />
          </div>
        </Container>

        <div className="h-[22vh] md:h-[34vh]" />
      </div>
    </section>
  );
}
