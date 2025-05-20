import AnimationDemo from "../AnimationDemo";
import { Hero } from '@/components/sections/hero';
import { Reviews } from '@/components/sections/reviews';
import { AboutTimeline } from '@/components/sections/about-timeline';
import { BookingCalendar } from '@/components/sections/booking-calendar';
import { Gallery } from '@/components/sections/gallery';
import { Pricing } from '@/components/sections/pricing';
import { Contacts } from '@/components/sections/contacts';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <AboutTimeline />
      <Reviews />
      <BookingCalendar />
      <Gallery />
      <Pricing />
      <Contacts />
      <Footer />
    </main>
  );
}