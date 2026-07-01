'use client';

import Image from 'next/image';

const TAGLINE_LINES = [
  'Architecture Excellence—',
  'A landmark commercial address',
  'in Bashundhara R/A',
] as const;

export default function TrialHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#120F17] text-white">
      <video
        className="absolute inset-0 h-full w-full object-[58%_center] object-cover md:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video/JP_Business_Tower_Intro.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />

      <div className="relative z-10 flex min-h-screen items-center px-6 py-20 sm:px-10">
        <div className="w-full max-w-3xl md:w-1/2">
          <h1 className="font-serif text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-7xl">
            <span
              className="block pl-0 text-[2.36em] font-normal text-[#D3D6D8]"
              style={{ fontFamily: 'var(--font-italianno), cursive' }}
            >
              <span className="relative inline-block">
                <span className="invisible">JP</span>
                <Image
                  src="/images/Asset_24x.png"
                  alt="JP"
                  fill
                  className="object-contain"
                />
              </span>
            </span>
            <span className="block font-light text-white">BUSINESS CENTER</span>
            <span className="block text-[0.72em] font-light leading-none text-white/90">
            <span className="inline-flex items-center gap-4 align-middle">
              <span>By</span>
              <span className="relative inline-block h-[1.9em] w-[9.6em]">
                <Image
                  src="/images/Jams _ Patron logo.png"
                  alt="Jams Patron logo"
                  fill
                  className="object-contain object-left"
                />
              </span>
            </span>
          </span>
          </h1>

          <p className="mt-8 font-serif text-2xl font-medium leading-snug lg:text-4xl">
            {TAGLINE_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
