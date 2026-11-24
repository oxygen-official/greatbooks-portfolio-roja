import React from 'react';
import { LiteraryWork } from '../data/portfolioData';
import { LiteraryPlate } from './LiteraryPlate';

interface FavoriteMasterpieceSectionProps {
  favoriteWork: LiteraryWork;
  allWorks: LiteraryWork[];
  onChangeFavorite: (workId: string) => void;
}

export const FavoriteMasterpieceSection: React.FC<FavoriteMasterpieceSectionProps> = ({
  favoriteWork,
  allWorks,
  onChangeFavorite,
}) => {
  return (
    <section id="favorite" className="border-b border-white/10 bg-[#13161C] py-16 lg:py-22">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-xs tracking-wider text-[#D4A853]">
              03 · CURATORIAL SPOTLIGHT
            </p>
            <h2 className="mt-1.5 font-serif text-3xl font-semibold tracking-tight text-[#F3F0E8] sm:text-4xl">
              My Favorite Literary Masterpiece
            </h2>
          </div>

          <div className="no-print flex items-center gap-2.5">
            <label htmlFor="favorite-select" className="text-xs font-medium text-[#9CA3AF]">
              Featured Work:
            </label>
            <select
              id="favorite-select"
              value={favoriteWork.id}
              onChange={(e) => onChangeFavorite(e.target.value)}
              className="rounded-md border border-white/15 bg-[#0B0D10] px-3 py-1.5 text-xs font-medium text-[#F3F0E8] focus:border-[#D4A853] focus:outline-none"
            >
              {allWorks.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.numericIndex}. {w.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Full-Width Spotlight Banner */}
        <div className="mt-10 grid grid-cols-1 gap-8 rounded-lg border border-white/12 bg-[#0B0D10] p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <LiteraryPlate
              workId={favoriteWork.id}
              title={favoriteWork.title}
              romanIndex={favoriteWork.romanIndex}
              className="aspect-[4/3] w-full rounded-md"
            />
          </div>

          <div className="lg:col-span-7">
            <p className="font-mono text-xs text-[#D4A853]">
              {favoriteWork.tradition} · {favoriteWork.era} · {favoriteWork.approximateDate}
            </p>
            <h3 className="mt-2 font-serif text-3xl font-semibold text-[#F3F0E8] sm:text-4xl">
              {favoriteWork.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#9CA3AF]">
              By {favoriteWork.author}
            </p>

            <blockquote className="mt-6 border-y border-white/10 py-4">
              <p className="font-serif text-xl italic leading-relaxed text-[#F3F0E8]">
                “{favoriteWork.epigraph}”
              </p>
              <footer className="mt-2 text-xs text-[#9CA3AF]">
                — {favoriteWork.epigraphSource}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* 2x2 Rubric Discussion Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border-t border-white/12 pt-6">
            <h4 className="font-serif text-xl font-semibold text-[#F3F0E8]">
              Brief Overview of the Literary Work
            </h4>
            <p className="drop-cap mt-3 text-[15px] leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
              {favoriteWork.overview}
            </p>
          </div>

          <div className="border-t border-white/12 pt-6">
            <h4 className="font-serif text-xl font-semibold text-[#F3F0E8]">
              Reasons for Choosing It as My Favorite
            </h4>
            <p className="mt-3 text-[15px] leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
              {favoriteWork.favoriteStudy.reasonsForChoosing}
            </p>
          </div>

          <div className="border-t border-white/12 pt-6">
            <h4 className="font-serif text-xl font-semibold text-[#F3F0E8]">
              Significant Themes, Characters, & Lessons
            </h4>
            <p className="mt-3 text-[15px] leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
              {favoriteWork.favoriteStudy.themesCharactersLessons}
            </p>
          </div>

          <div className="border-t border-white/12 pt-6">
            <h4 className="font-serif text-xl font-semibold text-[#F3F0E8]">
              Personal Connections & Realizations
            </h4>
            <p className="mt-3 text-[15px] leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
              {favoriteWork.favoriteStudy.personalRealizations}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
