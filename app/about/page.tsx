import AboutHero from "@/components/about/Hero";
import MissionVision from "@/components/about/MissionVision";
import NarrationStory from "@/components/about/NarrationStory";
import WhyUs from "@/components/about/WhyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Agency & Mission",
  description: "Learn about SoftZeniq's story, values, and vision. We are a team of expert engineers, designers, and growth partners committed to digital excellence.",
  keywords: ["about SoftZeniq", "software development team", "agency story", "tech team", "digital product design"],
  openGraph: {
    title: "About SoftZeniq | Our Agency & Mission",
    description: "Learn about SoftZeniq's story, values, and vision. We are a team of expert engineers, designers, and growth partners committed to digital excellence.",
  }
};

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

