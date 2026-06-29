import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HighlightsSection from '@/components/HighlightsSection';
import ThemesSection from '@/components/ThemesSection';
import SubmissionSection from '@/components/SubmissionSection';
import VenueSection from '@/components/VenueSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <ThemesSection />
        <SubmissionSection />
        <VenueSection />
      </main>
      <FooterSection />
    </>
  );
}
