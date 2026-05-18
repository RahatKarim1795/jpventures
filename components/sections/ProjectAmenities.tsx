'use client';

import Container from '@/components/ui/Container';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Flower2, 
  Video, 
  Users, 
  Wifi,
  Flame,
  Car,
  Dumbbell,
  Heart,
  MonitorPlay,
  Coffee,
  LucideIcon
} from 'lucide-react';


interface ProjectAmenitiesProps {
  amenities?: string[];
}

// Map common amenities to icons
const AMENITY_ICONS: Record<string, LucideIcon> = {
  'CCTV': Video,
  'Surveillance': Video,
  'Power': Zap,
  'Generator': Zap,
  'Garden': Flower2,
  'Green': Flower2,
  'Community': Users,
  'Hall': Users,
  'Security': ShieldCheck,
  'Parking': Car,
  'Garage': Car,
  'Fire': Flame,
  'Smart': Wifi,
  'Internet': Wifi,
  'Gym': Dumbbell,
  'Fitness': Dumbbell,
  'Health': Heart,
  'Play': MonitorPlay,
  'Lounge': Coffee,
};

// Helper to find icon based on label text
const getIconForAmenity = (label: string) => {
  const lowerLabel = label.toLowerCase();
  for (const [key, icon] of Object.entries(AMENITY_ICONS)) {
    if (lowerLabel.includes(key.toLowerCase())) {
      return icon;
    }
  }
  return ShieldCheck; // Default icon
};

export default function ProjectAmenities({ amenities }: ProjectAmenitiesProps) {
  // If no amenities provided, don't render section
  if (!amenities || amenities.length === 0) return null;

  return (
    <section className="py-20 bg-brand-midnight-blue text-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Premium Amenities
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-brand-teal-sky mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((item, index) => {
            const Icon = getIconForAmenity(item);
            
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-teal-sky/50 transition-all duration-300 transform-gpu backface-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-teal-sky/20 flex items-center justify-center mb-4 text-brand-teal-sky group-hover:scale-110 transition-transform duration-300 transform-gpu backface-hidden">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-teal-sky transition-colors">
                  {item}
                </h3>
                {/* Description removed as we only have labels now */}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
