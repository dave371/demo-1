import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimoninals';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}
