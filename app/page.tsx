import AnimationDemo from "../AnimationDemo";
import { Hero } from '@/components/sections/hero';
import { Reviews } from '@/components/sections/reviews';
import { AboutTimeline } from '@/components/sections/about-timeline';
import { BookingCalendar } from '@/components/sections/booking-calendar';
import { Gallery } from '@/components/sections/gallery';
import { Pricing } from '@/components/sections/pricing';
import { Contacts } from '@/components/sections/contacts';
import { Footer } from '@/components/sections/footer';
import { SectionDivider } from '@/components/ui/section-divider';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <SectionDivider topColor="#1C2526" bottomColor="#260705" />
      <AboutTimeline />
      <SectionDivider topColor="#260705" bottomColor="#1C2526" />
      <Reviews />
      <SectionDivider topColor="#1C2526" bottomColor="#1C2526" />
      <BookingCalendar />
      <SectionDivider topColor="#1C2526" bottomColor="#1C2526" />
      <Gallery />
      <SectionDivider topColor="#1C2526" bottomColor="#1C2526" flipY={true} />
      <Pricing />
      <SectionDivider topColor="#1C2526" bottomColor="#1C2526" />
      <Contacts />
      <Footer />
    </main>
  );
}