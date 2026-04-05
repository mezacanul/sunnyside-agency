import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import Reels from "@/components/Home/Reels";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Reels />
    </section>
  );
}
