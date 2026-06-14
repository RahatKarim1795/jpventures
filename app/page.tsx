import Hero from '@/components/sections/Hero';
import AtAGlance from '@/components/sections/AtAGlance';
import OurStory from '@/components/sections/OurStory';
import Features from '@/components/sections/Features';
import Amenities from '@/components/sections/Amenities';
import ImageStatement from '@/components/sections/ImageStatement';
import Gallery from '@/components/sections/Gallery';
import VideoSection from '@/components/sections/VideoSection';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactFooterShell from '@/components/sections/ContactFooterShell';
import ContactSection2 from '@/components/sections/ContactSection2';
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
      <OurStory />
      <Features />
      <ImageStatement />
      <Amenities
        items={[...AMENITIES_SET_ONE]}
        imageSrc="/images/amenities_1.jpeg"
        imageAlt="Business professionals meeting inside JP Business Centre"
      />
      <Amenities
        items={[...AMENITIES_SET_TWO]}
        imageSrc="/images/amenities_2.jpeg"
        imageAlt="Retail space inside JP Business Centre"
        reverse
      />
      <Gallery />
      <VideoSection />
      <ProcessTimeline />
      <ContactFooterShell>
        <ContactSection2 />
        <Footer />
      </ContactFooterShell>
    </div>
  );
}
