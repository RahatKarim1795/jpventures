'use client';

import Container from '@/components/ui/Container';
import { motion } from 'motion/react';
import { Layers, MapPin, Maximize2, Navigation } from 'lucide-react';

const STATS = [
  {
    icon: Layers,
    value: '35 Stories',
    label: 'Total Tower Height',
    description: '5 basements + 30 premium commercial floors above grade.',
  },
  {
    icon: MapPin,
    value: '38.42 Katha',
    label: 'Land Area',
    description: 'Corner plot with 3-side road access in Block I-Ext, Bashundhara R/A.',
  },
  {
    icon: Maximize2,
    value: '~14,000 SFT',
    label: 'Maximum Floor Plate',
    description: 'Expansive floor layout designed for flexible office configurations.',
  },
  {
    icon: Navigation,
    value: '130ft Frontage',
    label: 'Main Road Presence',
    description: 'Prominent visibility and direct access from the major corridor.',
  },
] as const;

export default function AtAGlance() {
  return (
    <section className="py-16 md:py-24 text-white" style={{ backgroundColor: '#1d1410' }}>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold"
          >
            At a Glance
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '90px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-[2px] mx-auto mt-5 rounded-full"
            style={{ backgroundColor: '#d1a893' }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-xl p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <div className="mb-5">
                  <Icon size={34} color="#d1a893" strokeWidth={1.8} />
                </div>
                <p className="text-2xl md:text-[1.75rem] font-semibold leading-tight">{stat.value}</p>
                <p className="mt-2 text-base font-medium" style={{ color: '#d1a893' }}>
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{stat.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
