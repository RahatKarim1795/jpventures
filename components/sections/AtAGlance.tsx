'use client';

import Container from '@/components/ui/Container';
import { motion } from 'motion/react';
import Antigravity from '@/components/effects/Antigravity';
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
    <section className="relative overflow-hidden py-16 md:py-24 text-white" style={{ backgroundColor: '#1d1410' }}>
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Antigravity
          count={220}
          magnetRadius={8}
          ringRadius={8}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.2}
          lerpSpeed={0.05}
          color="#d1a893"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none bg-[#1d1410]/70" />

      <div className="relative z-10 pointer-events-none">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-12">
            <div>
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
                className="h-[2px] mt-5 rounded-full"
                style={{ backgroundColor: '#d1a893' }}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-8 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
              >
                JP Business Center — Key Specifications
              </motion.p>
            </div>

            <div className="flex flex-col gap-5">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.article
                    key={stat.value}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="flex items-start gap-4 rounded-xl p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    <div className="mt-1 shrink-0">
                      <Icon size={30} color="#d1a893" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold leading-tight md:text-3xl">{stat.value}</p>
                      <p className="mt-1.5 text-sm font-medium md:text-base" style={{ color: '#d1a893' }}>
                        {stat.label}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-white/80">{stat.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
