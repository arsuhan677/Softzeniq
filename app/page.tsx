import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import MarqueeService from "@/components/home/MarqueeService";
import OurMethodology from "@/components/home/OurMethodology";
import Portfolio from "@/components/home/Portfolio";
import Service from "@/components/home/Service";
import Stats from "@/components/home/Stats";
import Testimonial from "@/components/home/Testimonial";
import WhyChosseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center mt-14 sm:mt-18">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <HeroSection />
      <Stats />
      <Service />
      <WhyChosseUs />
      <Portfolio />
      <Testimonial />
      <OurMethodology />
      <MarqueeService />
      <FAQ />
      <CTA />
    </div>
  );
}
