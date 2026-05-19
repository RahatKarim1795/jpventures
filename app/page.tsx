import Hero from '@/components/sections/Hero';
import AtAGlance from '@/components/sections/AtAGlance';
import OurStory from '@/components/sections/OurStory';
import Features from '@/components/sections/Features';
import ImageStatement from '@/components/sections/ImageStatement';

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
      <OurStory />
      <Features />
      <ImageStatement />
    </>
  );
}
