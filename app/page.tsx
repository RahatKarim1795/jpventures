import Hero from '@/components/sections/Hero';
import AtAGlance from '@/components/sections/AtAGlance';
import OurStory from '@/components/sections/OurStory';
import Features from '@/components/sections/Features';
import Amenities from '@/components/sections/Amenities';
import ImageStatement from '@/components/sections/ImageStatement';
import Gallery from '@/components/sections/Gallery';
import VideoSection from '@/components/sections/VideoSection';
import ContactFooterShell from '@/components/sections/ContactFooterShell';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const AMENITIES_SET_ONE = [
  { title: '24/7 Security' },
  { title: 'High-Speed Elevators' },
  { title: 'Power Backup' },
  { title: 'Fire Safety' },
] as const;

const AMENITIES_SET_TWO = [
  { title: 'Dedicated Parking' },
  { title: 'Smart Access' },
  { title: 'Common Lounge' },
  { title: 'Green Terrace' },
] as const;

export default function Home() {
  return (
    <div id="top">
      <Hero />
      {/* <AtAGlance /> */}
      <OurStory />
      <Features />
      <ImageStatement />
      <Amenities items={[...AMENITIES_SET_ONE]} />
      <Amenities items={[...AMENITIES_SET_TWO]} reverse />
      <Gallery />
      <VideoSection />
      <ContactFooterShell>
        <ContactSection />
        <Footer />
      </ContactFooterShell>
    </div>
  );
}
