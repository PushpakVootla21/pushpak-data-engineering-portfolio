import { HeroSection } from "@/components/sections/HeroSection";
import { ContactCtaSection, EngineeringApproachSection, FeaturedProjectsSection, ProfessionalProfileSection, TechnologyStackSection } from "@/components/sections/HomeSections";

export default function Home() {
  return <><HeroSection /><TechnologyStackSection /><FeaturedProjectsSection /><EngineeringApproachSection /><ProfessionalProfileSection /><ContactCtaSection /></>;
}
