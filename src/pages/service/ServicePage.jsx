import HeroSection from "./HeroSection";
import ExperientialSection from "./ExperientialSection";
import ChoosePathSection from "./ChoosePathSection";
import WatchSwamiSection from "./WatchSwamiSection";
import Author from "../../components/Author";

export default function ServicePage(){
    return (
    <main className="bg-cream min-h-screen pt-24">
      <HeroSection/>
      <ExperientialSection/>
      <ChoosePathSection/>
      <WatchSwamiSection/>
      <Author/>
    </main>
  );
}