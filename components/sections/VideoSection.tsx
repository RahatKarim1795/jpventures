'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { Play } from 'lucide-react';

const THUMBNAIL_HEIGHT = '60vh';
const VIDEO_HEIGHT = '100vh';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      void videoRef.current?.play();
    });
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#17100d] transition-[height] duration-700 ease-in-out"
      style={{ height: isPlaying ? VIDEO_HEIGHT : THUMBNAIL_HEIGHT }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/aerial_1.mp4"
        playsInline
        controls={isPlaying}
        preload="metadata"
      />

      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="thumbnail-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10"
          >
            <Image
              src="/images/10.jpg"
              alt="Virtual tour thumbnail"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/30" />

            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play virtual tour"
              className="absolute inset-0 z-20 flex items-center justify-center"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm md:h-24 md:w-24"
              >
                <Play
                  size={36}
                  className="ml-1 text-white"
                  fill="white"
                  strokeWidth={0}
                />
              </motion.span>
            </button>

            <p className="font-brand-garamond absolute bottom-8 left-8 z-20 text-5xl font-normal text-white md:text-7xl lg:text-8xl">
              Virtual Tour
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
