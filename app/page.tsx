import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HighlightsSection from '@/components/HighlightsSection';
import SpeakersSection from '@/components/SpeakersSection';
import ThemesSection from '@/components/ThemesSection';
import SubmissionSection from '@/components/SubmissionSection';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import TrainingSessionsSection from '@/components/TrainingSessionsSection';
import VenueSection from '@/components/VenueSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <SpeakersSection />
        <ThemesSection />
        <SubmissionSection />
        <ImportantDatesSection />
        <TrainingSessionsSection />
        <VenueSection />
      </main>
      <FooterSection />
    </>
  );
}
