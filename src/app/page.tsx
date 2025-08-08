
import FeaturedCourses from "@/components/FeaturedModules";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import HeroClientWrapper from "@/components/HeroClientWrapper";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
      <HeroClientWrapper />
      <FeaturedCourses />
     
      <Instructors />
      <Footer />
    </main>
  );
}