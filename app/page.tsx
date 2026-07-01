import Hero from '@/components/sections/Hero';
import Trial_Hero from '@/components/sections/Trial_Hero';
// import AtAGlance from '@/components/sections/AtAGlance';
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
  { title: 'High-Speed Lift Banks' },
  { title: 'Dual Lobby Cores' },
  { title: '5 Basement Levels' },
  { title: 'Service Lobby on Each Floor' },
] as const;

const AMENITIES_SET_TWO = [
  { title: 'Ground-Floor Reception Lounge' },
  { title: 'Garden Terrace' },
  { title: '7\'-6" Wide Corridors' },
  { title: 'Smart Access' },
] as const;

export default function Home() {
  return (
    <div id="top">
      <Hero />
      <Trial_Hero />
      <OurStory />
      <Features />
      <ImageStatement />
      <section className="bg-[#17100d] text-white">
        <div className="px-6 pt-14 md:px-10 lg:px-14">
          <h2 className="text-center text-4xl font-semibold md:text-5xl lg:text-6xl">Amenities</h2>
        </div>
        <Amenities
          heading="Core Infrastructure"
          items={[...AMENITIES_SET_ONE]}
          imageSrc="/images/amenities_1.jpeg"
          imageAlt="Business professionals meeting inside JP Business Center"
        />
        <Amenities
          heading="Business Amenities"
          items={[...AMENITIES_SET_TWO]}
          imageSrc="/images/amenities_2.jpeg"
          imageAlt="Retail space inside JP Business Center"
          reverse
        />
      </section>
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
