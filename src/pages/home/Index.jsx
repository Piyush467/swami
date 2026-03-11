import HeroSection from "./HeroSection";
import StorytellingMastery from "./StorytellingMastery";
import ServicesSection from "./ServicesSection";
import CourseSection from "./CourseSection";
import CommunitySection from "./CommunitySection";
import BlogsSection from "./BlogsSection";
import FaqSection from "./FaqSection";
import Author from "../../components/Author";

export default function Home() {
  return (
    <main className="bg-cream min-h-screen">

      <HeroSection />
      <StorytellingMastery />
      <ServicesSection />
      <CourseSection />
      <CommunitySection />
      <BlogsSection />
      <FaqSection />
      <Author/>
    </main>
  );
}
