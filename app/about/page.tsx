import AboutHero from "@/components/about/Hero";
import MissionVision from "@/components/about/MissionVision";
import NarrationStory from "@/components/about/NarrationStory";
import WhyUs from "@/components/about/WhyUs";

export default function about() {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center ">
      <AboutHero />
      <MissionVision />
      <NarrationStory />
      <WhyUs />
      {/* <Team/> */}
      {/* <Timeline /> */}
    </div>
  );
}
