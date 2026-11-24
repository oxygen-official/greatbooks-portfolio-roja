import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { LiteraryWork, StudentProfile } from '../data/portfolioData';
import { LiteraryPlate } from './LiteraryPlate';

interface HeroSectionProps {
  profile: StudentProfile;
  works: LiteraryWork[];
  onSelectWork: (workId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  works,
  onSelectWork,
}) => {
  return (
    <section id="top" className="border-b border-white/10 bg-[#0B0D10]">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 lg:pt-24 lg:pb-20">
        {/* Centered Exhibition Cover */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs tracking-wide text-[#9CA3AF]">
            <span>{profile.institution}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.department}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#D4A853]">{profile.courseTitle}</span>
          </div>

          <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight text-[#F3F0E8] sm:text-6xl lg:text-[4.25rem] lg:leading-[1.03]">
            My Literary Journey
          </h1>
          <p className="mt-3 font-serif text-xl italic text-[#D4A853] sm:text-2xl">
            A Great Books Digital Portfolio
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed tracking-[0.01em] text-[#D1D5DB] sm:text-base">
            Compiled by <span className="font-semibold text-[#F3F0E8]">{profile.fullName}</span>{' '}
            <span aria-hidden="true">·</span> {profile.course}{' '}
            <span aria-hidden="true">·</span> {profile.yearAndSection}. Seven foundational
            literary analyses spanning three millennia of human wisdom, struggle, and artistry.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href="#analyses"
              className="inline-flex items-center gap-2 rounded-md bg-[#D4A853] px-6 py-3 text-sm font-semibold text-[#0B0D10] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#E2BC72] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A853]"
            >
              <span>Enter the Anthology</span>
              <ArrowDownRight className="h-4 w-4" />
            </a>

            <a
              href="#profile"
              className="py-2 text-sm font-medium text-[#E5E7EB] whitespace-nowrap shrink-0 underline decoration-white/25 underline-offset-4 transition-colors duration-150 hover:text-[#D4A853] hover:decoration-[#D4A853]"
            >
              Student Dossier
            </a>
          </div>
        </div>

        {/* Interactive 7-Plate Visual Exhibition Strip */}
        <div className="mt-14">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
            <span className="font-mono text-xs tracking-wider text-[#9CA3AF]">
              EXHIBITION PLATES · FIRST 7 CHOSEN WORKS
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {works.map((work) => (
              <a
                key={work.id}
                href="#analyses"
                onClick={() => onSelectWork(work.id)}
                className="group flex flex-col rounded-md border border-white/10 bg-[#13161C] p-2.5 transition-colors duration-150 hover:border-[#D4A853]"
              >
                <LiteraryPlate
                  workId={work.id}
                  title={work.title}
                  romanIndex={work.romanIndex}
                  className="aspect-[4/3] w-full rounded-sm border-0"
                />
                <span className="mt-2.5 font-serif text-sm font-semibold leading-snug text-[#F3F0E8] line-clamp-2 group-hover:text-[#D4A853]">
                  {work.title}
                </span>
                <span className="mt-1 text-[11px] text-[#9CA3AF] truncate">
                  {work.tradition}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
