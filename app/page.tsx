import Hero from '@/components/sections/Hero';
import AtAGlance from '@/components/sections/AtAGlance';

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="JP Ventures"
        title="Future-Ready Spaces"
        description="Purposeful design. Lasting value."
        ctaLabel="Get In Touch"
        ctaHref="/contact"
      />
      <AtAGlance />
    </>
  );
}
