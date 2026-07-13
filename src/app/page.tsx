import { HeroSection } from "@/components/sections/HeroSection";
import { CertificationSnapshotSection, ContactCtaSection, EngineeringApproachSection, FeaturedProjectsSection, ProfessionalProfileSection, TechnologyStackSection } from "@/components/sections/HomeSections";

export default function Home() {
  return <><HeroSection /><TechnologyStackSection /><FeaturedProjectsSection /><EngineeringApproachSection /><ProfessionalProfileSection /><CertificationSnapshotSection /><ContactCtaSection /></>;
}
