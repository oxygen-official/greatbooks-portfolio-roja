import { useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_STUDENT_PROFILE,
  LEARNING_PILLARS,
  PERSONAL_REFLECTIONS,
  SEVEN_LITERARY_WORKS,
  StudentProfile,
} from './data/portfolioData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StudentProfileSection } from './components/StudentProfileSection';
import { LiteraryAnalysesSection } from './components/LiteraryAnalysesSection';
import { FavoriteMasterpieceSection } from './components/FavoriteMasterpieceSection';
import { SummaryOfLearningSection } from './components/SummaryOfLearningSection';
import { PersonalReflectionSection } from './components/PersonalReflectionSection';
import { Footer } from './components/Footer';

const STORAGE_KEY_PROFILE = 'great_books_portfolio_profile_v2';
const STORAGE_KEY_FAVORITE = 'great_books_portfolio_favorite_v1';

export default function App() {
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        const isOldDefaultPhoto =
          !parsed.photoDataUrl ||
          parsed.photoDataUrl === '/assets/aistudio/image_a9f9ca96.png';
        const cleanedYear =
          parsed.yearAndSection === '2nd Year · Section A'
            ? DEFAULT_STUDENT_PROFILE.yearAndSection
            : parsed.yearAndSection;
        return {
          ...DEFAULT_STUDENT_PROFILE,
          ...parsed,
          yearAndSection: cleanedYear || DEFAULT_STUDENT_PROFILE.yearAndSection,
          photoDataUrl: isOldDefaultPhoto
            ? DEFAULT_STUDENT_PROFILE.photoDataUrl
            : parsed.photoDataUrl,
        };
      }
    } catch {
      // Ignore storage read errors and fall back to defaults
    }
    return DEFAULT_STUDENT_PROFILE;
  });

  const [favoriteWorkId, setFavoriteWorkId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITE);
      if (saved && SEVEN_LITERARY_WORKS.some((w) => w.id === saved)) {
        return saved;
      }
    } catch {
      // Ignore storage read errors
    }
    return 'odyssey';
  });

  const [selectedWorkId, setSelectedWorkId] = useState<string>(SEVEN_LITERARY_WORKS[0].id);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch {
      // Ignore storage quota errors
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FAVORITE, favoriteWorkId);
    } catch {
      // Ignore storage errors
    }
  }, [favoriteWorkId]);

  const favoriteWork = useMemo(
    () =>
      SEVEN_LITERARY_WORKS.find((w) => w.id === favoriteWorkId) ||
      SEVEN_LITERARY_WORKS[4],
    [favoriteWorkId],
  );

  const handleUpdatePhoto = (dataUrl: string) => {
    setProfile((prev) => ({ ...prev, photoDataUrl: dataUrl }));
  };

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F3F0E8]">
      <Header />

      <main>
        <HeroSection
          profile={profile}
          works={SEVEN_LITERARY_WORKS}
          onSelectWork={setSelectedWorkId}
        />

        <StudentProfileSection
          profile={profile}
          onUpdatePhoto={handleUpdatePhoto}
        />

        <LiteraryAnalysesSection
          works={SEVEN_LITERARY_WORKS}
          selectedWorkId={selectedWorkId}
          onSelectWork={setSelectedWorkId}
        />

        <FavoriteMasterpieceSection
          favoriteWork={favoriteWork}
          allWorks={SEVEN_LITERARY_WORKS}
          onChangeFavorite={setFavoriteWorkId}
        />

        <SummaryOfLearningSection
          pillars={LEARNING_PILLARS}
          works={SEVEN_LITERARY_WORKS}
          onInspectWork={setSelectedWorkId}
        />

        <PersonalReflectionSection reflections={PERSONAL_REFLECTIONS} />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
