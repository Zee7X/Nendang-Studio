import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />

        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Portfolio />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal y={32}>
          <FinalCTA />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
