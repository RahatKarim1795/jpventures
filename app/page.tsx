import Hero from '@/components/sections/Hero';
import AtAGlance from '@/components/sections/AtAGlance';
import OurStory from '@/components/sections/OurStory';
import Features from '@/components/sections/Features';
import ImageStatement from '@/components/sections/ImageStatement';

export default function Home() {
  return (
    <div id="top">
      <Hero />
      <AtAGlance />
      <OurStory />
      <Features />
      <ImageStatement />
    </div>
  );
}
