import Image from "next/image";

import Hero from "@/components/hero/Hero";
import Navigation from "@/components/navigation/Navigation";
import Timeline from "@/components/timeline/Timeline";
import Features from "@/components/features/Features";
import Pricing from "@/components/pricing/Pricing";
import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <>
      <div className="bg-[url('../public/images/background.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
        <Hero />
      </div>
      <Timeline />
      <Features />
      <Pricing />
      <Faq />
    </>
  );
}
