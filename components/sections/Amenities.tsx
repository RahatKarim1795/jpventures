'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Car,
  Dumbbell,
  Flame,
  Leaf,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export interface AmenityItem {
  title: string;
  description?: string;
}

interface AmenitiesProps {
  items: AmenityItem[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  heading?: string;
}

const AMENITY_ICONS: Record<string, LucideIcon> = {
  security: ShieldCheck,
  lift: Zap,
  elevator: Zap,
  power: Zap,
  backup: Zap,
  fire: Flame,
  basement: Car,
  parking: Car,
  smart: Smartphone,
  access: Smartphone,
  reception: Users,
  lobby: Users,
  corridor: Users,
  lounge: Users,
  common: Users,
  garden: Leaf,
  green: Leaf,
  terrace: Leaf,
  gym: Dumbbell,
  fitness: Dumbbell,
};

const getIconForAmenity = (title: string): LucideIcon => {
  const lowerTitle = title.toLowerCase();
  for (const [key, icon] of Object.entries(AMENITY_ICONS)) {
    if (lowerTitle.includes(key)) {
      return icon;
    }
  }
  return ShieldCheck;
};

export default function Amenities({
  items,
  imageSrc = '/images/09.jpg',
  imageAlt = 'JP Business Centre amenities',
  reverse = false,
  heading = 'Amenities',
}: AmenitiesProps) {
  const imagePanel = (
    <div className="relative min-h-[240px] md:min-h-[480px] lg:min-h-[520px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
  );

  const contentPanel = (
    <div className="flex flex-col justify-center bg-brand-brown-600 px-6 py-10 md:px-10 md:py-12 lg:px-14">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl"
      >
        {heading}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '90px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-5 h-[2px] rounded-full bg-[#d1a893]"
      />

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {items.map((item, index) => {
          const Icon = getIconForAmenity(item.title);

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#d1a893]/30 bg-[#d1a893]/10">
                <Icon size={24} color="#d1a893" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
              {item.description ? (
                <p className="text-sm leading-relaxed text-white/75 md:text-base">{item.description}</p>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="w-full overflow-hidden bg-[#17100d] font-serif text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {reverse ? (
          <>
            {contentPanel}
            {imagePanel}
          </>
        ) : (
          <>
            {imagePanel}
            {contentPanel}
          </>
        )}
      </div>
    </section>
  );
}
