import Comments from "@/components/shared/Comment";
import MainBanner from "@/components/shared/MainBanner";
import OurMission from "@/components/shared/OurMission";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <OurMission />
      <Comments />
    </div>
  );
}
