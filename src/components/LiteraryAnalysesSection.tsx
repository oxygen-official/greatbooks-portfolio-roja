import React, { useMemo, useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, List } from 'lucide-react';
import { LiteraryWork } from '../data/portfolioData';
import { LiteraryPlate } from './LiteraryPlate';

interface LiteraryAnalysesSectionProps {
  works: LiteraryWork[];
  selectedWorkId: string;
  onSelectWork: (workId: string) => void;
}

const LENS_FILTERS: Array<'All' | LiteraryWork['lensCategory']> = [
  'All',
  'Mythological & Archetypal',
  'Formalist & Structural',
  'Moral & Philosophical',
  'Historical & Cultural',
  'Aesthetic & Feminist',
];

export const LiteraryAnalysesSection: React.FC<LiteraryAnalysesSectionProps> = ({
  works,
  selectedWorkId,
  onSelectWork,
}) => {
  const [lensFilter, setLensFilter] = useState<'All' | LiteraryWork['lensCategory']>('All');
  const [viewMode, setViewMode] = useState<'spread' | 'continuous'>('spread');

  const filteredWorks = useMemo(() => {
    if (lensFilter === 'All') return works;
    return works.filter((w) => w.lensCategory === lensFilter);
  }, [works, lensFilter]);

  const activeWork = useMemo(() => {
    const foundInFiltered = filteredWorks.find((w) => w.id === selectedWorkId);
    return foundInFiltered || filteredWorks[0] || works[0];
  }, [filteredWorks, selectedWorkId, works]);

  const currentIndex = filteredWorks.findIndex((w) => w.id === activeWork.id);

  const handlePrev = () => {
    if (filteredWorks.length <= 1) return;
    const prevIdx = (currentIndex - 1 + filteredWorks.length) % filteredWorks.length;
    onSelectWork(filteredWorks[prevIdx].id);
  };

  const handleNext = () => {
    if (filteredWorks.length <= 1) return;
    const nextIdx = (currentIndex + 1) % filteredWorks.length;
    onSelectWork(filteredWorks[nextIdx].id);
  };

  const renderBookSpread = (work: LiteraryWork, showIndexPrefix = false) => (
    <article
      key={work.id}
      className="grid grid-cols-1 overflow-hidden rounded-lg border border-white/12 bg-[#13161C] lg:grid-cols-12"
    >
      {/* Left Folio Page: Engraving Plate, Metadata, Epigraph */}
      <div className="flex flex-col justify-between border-b border-white/10 bg-[#0F1218] p-6 sm:p-9 lg:col-span-5 lg:border-r lg:border-b-0">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#9CA3AF]">
            <span className="font-mono tabular-nums text-[#D4A853]">
              Chapter {work.romanIndex} of VII
            </span>
            <span aria-hidden="true">·</span>
            <span>{work.tradition}</span>
            <span aria-hidden="true">·</span>
            <span>{work.approximateDate}</span>
          </div>

          <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#F3F0E8]">
            {showIndexPrefix ? `${work.numericIndex}. ${work.title}` : work.title}
          </h3>

          <dl className="mt-4 space-y-2 border-y border-white/10 py-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-xs text-[#9CA3AF]">Author</dt>
              <dd className="text-right font-medium text-[#F3F0E8]">{work.author}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-xs text-[#9CA3AF]">Literary Lens</dt>
              <dd className="text-right font-medium text-[#D4A853]">{work.literaryLens}</dd>
            </div>
            {work.syllabusLabel !== work.title && (
              <div className="flex justify-between gap-4">
                <dt className="text-xs text-[#9CA3AF]">Syllabus Entry</dt>
                <dd className="text-right text-xs text-[#D1D5DB]">{work.syllabusLabel}</dd>
              </div>
            )}
          </dl>

          <figure className="mt-6">
            <LiteraryPlate
              workId={work.id}
              title={work.title}
              romanIndex={work.romanIndex}
              className="aspect-[4/3] w-full rounded-md"
            />
            <figcaption className="mt-2.5 font-serif text-xs italic leading-relaxed text-[#9CA3AF]">
              {work.figureCaption}
            </figcaption>
          </figure>

          <blockquote className="mt-6 border-y border-white/10 py-4">
            <p className="font-serif text-lg italic leading-relaxed text-[#F3F0E8]">
              “{work.epigraph}”
            </p>
            <footer className="mt-2 text-xs text-[#9CA3AF]">
              — {work.epigraphSource}
            </footer>
          </blockquote>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-2 text-xs text-[#9CA3AF]">
          <span className="font-semibold text-[#F3F0E8]">Themes:</span>
          {work.keyThemes.map((theme, idx) => (
            <React.Fragment key={theme}>
              {idx > 0 && <span aria-hidden="true">·</span>}
              <span>{theme}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right Folio Page: Complete Critical Essay */}
      <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7">
        <div className="space-y-7">
          <div>
            <h4 className="font-mono text-xs tracking-wider text-[#D4A853]">
              WORK OVERVIEW
            </h4>
            <p className="drop-cap mt-2.5 max-w-prose text-[15.5px] leading-[1.8] tracking-[0.01em] text-[#E5E2DA]">
              {work.overview}
            </p>
          </div>

          {work.analysisSections.map((sec) => (
            <div key={sec.heading} className="max-w-prose border-t border-white/10 pt-6">
              <h4 className="font-serif text-xl font-semibold text-[#F3F0E8]">
                {sec.heading}
              </h4>
              <p className="mt-2 text-[15.5px] leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
                {sec.body}
              </p>
            </div>
          ))}

          <div className="max-w-prose border-t border-white/10 pt-6">
            <h4 className="font-serif text-xl font-semibold text-[#F3F0E8]">
              Contemporary & Real-Life Connection
            </h4>
            <p className="mt-2 text-[15.5px] leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
              {work.realLifeConnection}
            </p>
          </div>
        </div>

        {!showIndexPrefix && filteredWorks.length > 1 && (
          <div className="no-print mt-10 flex items-center justify-between border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3.5 py-2 text-xs font-medium text-[#F3F0E8] transition-colors duration-150 hover:border-[#D4A853] hover:text-[#D4A853]"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous Work</span>
            </button>
            <span className="font-mono text-xs tabular-nums text-[#9CA3AF]">
              Folio {currentIndex + 1} of {filteredWorks.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3.5 py-2 text-xs font-medium text-[#F3F0E8] transition-colors duration-150 hover:border-[#D4A853] hover:text-[#D4A853]"
            >
              <span>Next Work</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </article>
  );

  return (
    <section id="analyses" className="border-b border-white/10 bg-[#0B0D10] py-16 lg:py-22">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-xs tracking-wider text-[#D4A853]">
              02 · LITERARY ANTHOLOGY
            </p>
            <h2 className="mt-1.5 font-serif text-3xl font-semibold tracking-tight text-[#F3F0E8] sm:text-4xl">
              Compilation of Seven Literary Analyses
            </h2>
          </div>

          <div className="no-print inline-flex items-center rounded-md border border-white/12 bg-[#13161C] p-1">
            <button
              type="button"
              onClick={() => setViewMode('spread')}
              className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                viewMode === 'spread'
                  ? 'bg-[#D4A853] text-[#0B0D10]'
                  : 'text-[#9CA3AF] hover:text-[#F3F0E8]'
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Book Spread</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('continuous')}
              className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                viewMode === 'continuous'
                  ? 'bg-[#D4A853] text-[#0B0D10]'
                  : 'text-[#9CA3AF] hover:text-[#F3F0E8]'
              }`}
            >
              <List className="h-3.5 w-3.5" />
              <span>Continuous Folio</span>
            </button>
          </div>
        </div>

        {/* Lens Filter Row */}
        <div className="no-print mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs text-[#9CA3AF]">Critical Lens:</span>
          {LENS_FILTERS.map((lens) => {
            const active = lensFilter === lens;
            return (
              <button
                key={lens}
                type="button"
                onClick={() => setLensFilter(lens)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  active
                    ? 'bg-[#D4A853] text-[#0B0D10]'
                    : 'border border-white/10 bg-[#13161C] text-[#9CA3AF] hover:border-white/30 hover:text-[#F3F0E8]'
                }`}
              >
                {lens}
              </button>
            );
          })}
        </div>

        {viewMode === 'spread' ? (
          <div className="mt-8 space-y-6">
            {/* Roman Numeral Chapter Strip */}
            <div className="no-print flex flex-wrap gap-2">
              {filteredWorks.map((work) => {
                const isSelected = work.id === activeWork.id;
                return (
                  <button
                    key={work.id}
                    type="button"
                    onClick={() => onSelectWork(work.id)}
                    className={`inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-xs transition-colors duration-150 ${
                      isSelected
                        ? 'border-[#D4A853] bg-[#13161C] text-[#F3F0E8]'
                        : 'border-white/10 bg-[#0F1218] text-[#9CA3AF] hover:border-white/25 hover:text-[#F3F0E8]'
                    }`}
                  >
                    <span className="font-mono tabular-nums text-[#D4A853]">
                      {work.romanIndex}.
                    </span>
                    <span className="font-serif text-sm font-medium whitespace-nowrap">
                      {work.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {renderBookSpread(activeWork, false)}
          </div>
        ) : (
          <div className="mt-8 space-y-12">
            {filteredWorks.map((work) => renderBookSpread(work, true))}
          </div>
        )}
      </div>
    </section>
  );
};
