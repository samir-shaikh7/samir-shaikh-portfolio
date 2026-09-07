import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Certifications from "@/components/sections/Certifications";
import AboutUs from "@/components/sections/AboutUs";
import CareerFocus from "@/components/sections/CareerFocus";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col hide-scrollbar overflow-x-hidden selection:bg-accent/30 selection:text-white">

      <Navbar />

      <Hero />
      <TrustedBy />
      <Services />
      <TechStack />
      <Portfolio />
      <Process />
      <Certifications />
      <AboutUs />
      <CareerFocus />

      <Footer />
    </main>
  );
}
