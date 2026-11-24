import React from 'react';
import { StudentProfile, WORKS_CITED } from '../data/portfolioData';

interface FooterProps {
  profile: StudentProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="bg-[#0B0D10] py-14 text-[#F3F0E8]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl font-semibold text-[#F3F0E8]">
              My Literary Journey
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-[#9CA3AF]">
              Great Books Final Digital Portfolio · {profile.institution} ·{' '}
              {profile.department}
            </p>
          </div>

          <div className="lg:col-span-8">
            <h3 className="font-serif text-lg font-semibold text-[#F3F0E8]">
              Works Cited & Acknowledgments
            </h3>
            <ol className="mt-3 space-y-2 text-xs leading-relaxed text-[#9CA3AF]">
              {WORKS_CITED.map((citation, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <span className="font-mono tabular-nums text-[#D4A853]">
                    [{idx + 1}]
                  </span>
                  <span>{citation}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#9CA3AF]">
          <span>
            Submitted by {profile.fullName} · {profile.course}
          </span>
        </div>
      </div>
    </footer>
  );
};
