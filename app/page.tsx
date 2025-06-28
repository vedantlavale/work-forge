import {Faq1} from "@/components/faq1";
import Footer from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import FeaturesSection from "@/components/features";

export default function Home() {
  return (
      <div className="min-h-screen w-full relative bg-black">
        {/* Indigo Cosmos Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
          }}
        />

        {/* Your Content/Components */}

        <HeroHeader />
        <section id="home">
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="pricing">
          <Pricing/>
        </section>
        <section id="faq">
          <Faq1/>
        </section>
        <section id="contact">
          <Footer/>   
        </section>
      </div>
  );
}

