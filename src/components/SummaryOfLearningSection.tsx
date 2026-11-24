import React from 'react';
import { LearningPillar, LiteraryWork } from '../data/portfolioData';

interface SummaryOfLearningSectionProps {
  pillars: LearningPillar[];
  works: LiteraryWork[];
  onInspectWork: (workId: string) => void;
}

export const SummaryOfLearningSection: React.FC<SummaryOfLearningSectionProps> = ({
  pillars,
  works,
  onInspectWork,
}) => {
  return (
    <section id="summary" className="border-b border-white/10 bg-[#0B0D10] py-16 lg:py-22">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="border-b border-white/10 pb-6">
          <p className="font-mono text-xs tracking-wider text-[#D4A853]">
            04 · LEARNING SYNTHESIS
          </p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold tracking-tight text-[#F3F0E8] sm:text-4xl">
            Summary of Learning
          </h2>
        </div>

        {/* Four Unboxed Editorial Pillars Separated by Hairlines */}
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="flex flex-col justify-between border-t border-white/15 pt-5"
            >
              <div>
                <span className="font-mono text-xs tabular-nums text-[#D4A853]">
                  {pillar.index}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-[#F3F0E8]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] tracking-[0.01em] text-[#D1D5DB]">
                  {pillar.summary}
                </p>
              </div>
              {pillar.evidenceWorks && (
                <p className="mt-5 text-xs text-[#9CA3AF]">
                  {pillar.evidenceWorks}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Chronological Exhibition Timeline */}
        <div className="mt-14 rounded-lg border border-white/10 bg-[#13161C] p-6 sm:p-8">
          <div className="border-b border-white/10 pb-4">
            <h3 className="font-serif text-2xl font-semibold text-[#F3F0E8]">
              Historical & Critical Lenses Chronology
            </h3>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-medium text-[#9CA3AF]">
                  <th className="py-3 pr-4">No.</th>
                  <th className="py-3 pr-4">Masterpiece</th>
                  <th className="py-3 pr-4">Tradition & Era</th>
                  <th className="py-3 pr-4">Date</th>
                  <th className="py-3">Critical Lens Applied</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8">
                {works.map((work) => (
                  <tr
                    key={work.id}
                    className="transition-colors duration-150 hover:bg-white/[0.03]"
                  >
                    <td className="py-3.5 pr-4 font-mono text-xs tabular-nums text-[#D4A853]">
                      {work.numericIndex}
                    </td>
                    <td className="py-3.5 pr-4 font-serif text-base font-semibold text-[#F3F0E8]">
                      <a
                        href="#analyses"
                        onClick={() => onInspectWork(work.id)}
                        className="underline decoration-white/20 underline-offset-4 hover:text-[#D4A853] hover:decoration-[#D4A853]"
                      >
                        {work.title}
                      </a>
                    </td>
                    <td className="py-3.5 pr-4 text-xs text-[#D1D5DB]">
                      {work.tradition} · {work.era}
                    </td>
                    <td className="py-3.5 pr-4 font-mono text-xs tabular-nums text-[#9CA3AF]">
                      {work.approximateDate}
                    </td>
                    <td className="py-3.5 text-xs font-medium text-[#D4A853]">
                      {work.literaryLens}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
