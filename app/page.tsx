import { Navbar } from "@/components/sections/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { TierHero } from "@/components/sections/TierHero";
import { TierSkills } from "@/components/sections/TierSkills";
import { TierProjects } from "@/components/sections/TierProjects";
import { TierExperience } from "@/components/sections/TierExperience";
import { TierCertifications } from "@/components/sections/TierCertifications";
import { TierContact } from "@/components/sections/TierContact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <TierHero />
        <TierSkills />
        <TierProjects />
        <TierExperience />
        <TierCertifications />
        <TierContact />
      </main>
      <FooterSection />
    </div>
  );
}
