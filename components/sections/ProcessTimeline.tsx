'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Building2,
  KeyRound,
  Paintbrush,
  Search,
  type LucideIcon,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { DEVELOPMENT_PROCESS } from '@/lib/utils/constants';
import { scrollToContactSection } from '@/lib/utils/scrollToContactSection';

const ICON_MAP: Record<string, LucideIcon> = {
  search: Search,
  design: Paintbrush,
  construction: Building2,
  handover: KeyRound,
};

function TimelineStep({
  step,
  title,
  description,
  icon,
  isLast,
  index,
}: {
  step: string;
  title: string;
  description: string;
  icon: string;
  isLast: boolean;
  index: number;
}) {
  const Icon = ICON_MAP[icon] ?? Search;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative"
    >
      {!isLast ? (
        <div
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%+2.5rem)] hidden h-px w-[calc(100%-5rem)] bg-[#d1a893]/25 lg:block"
        />
      ) : null}

      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#d1a893]/35 bg-[#d1a893]/10">
          <span className="text-2xl font-semibold tracking-wide text-[#d1a893]">
            {step}
          </span>
        </div>

        <article className="flex w-full flex-col items-center rounded-lg border border-white/10 bg-white/5 px-6 py-8 transition-colors duration-300 hover:border-[#d1a893]/30 hover:bg-white/[0.07]">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-[#d1a893]/30 bg-[#d1a893]/10">
            <Icon size={26} color="#d1a893" strokeWidth={1.8} />
          </div>

          <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">{title}</h3>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">{description}</p>
        </article>
      </div>
    </motion.div>
  );
}

export default function ProcessTimeline() {
  return (
    <section className="w-full bg-brand-brown-600 py-20 font-serif text-white md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <p className="text-sm tracking-[0.18em] text-[#d1a893] uppercase md:text-base">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
          Your Ownership Journey 
          </h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '90px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 h-[2px] rounded-full bg-[#d1a893]"
          />
          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
          A guided journey from project briefing to booking, progress updates and handover
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
          {DEVELOPMENT_PROCESS.map((process, index) => (
            <TimelineStep
              key={process.step}
              step={process.step}
              title={process.title}
              description={process.description}
              icon={process.icon}
              isLast={index === DEVELOPMENT_PROCESS.length - 1}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-16 max-w-4xl md:mt-20"
        >
          <div className="flex flex-col items-center gap-8 rounded-lg border border-white/10 bg-white/5 px-8 py-10 md:flex-row md:justify-between md:px-12 md:py-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold md:text-3xl">Private Project Consultation</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Book a dedicated session to review layouts, availability and ownership options
              </p>
            </div>
            <Link
              href="/#contact"
              onClick={(event) => {
                if (!scrollToContactSection()) return;
                event.preventDefault();
              }}
              className="inline-flex shrink-0 items-center bg-[#d1a893] px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-brand-brown transition-opacity hover:opacity-90"
            >
              Start Your Journey
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
