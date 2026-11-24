import React from 'react';
import { ReflectionEntry } from '../data/portfolioData';

interface PersonalReflectionSectionProps {
  reflections: ReflectionEntry[];
}

export const PersonalReflectionSection: React.FC<PersonalReflectionSectionProps> = ({
  reflections,
}) => {
  return (
    <section id="reflection" className="border-b border-white/10 bg-[#13161C] py-16 lg:py-22">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="border-b border-white/10 pb-6">
          <p className="font-mono text-xs tracking-wider text-[#D4A853]">
            05 · PERSONAL INQUIRY
          </p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold tracking-tight text-[#F3F0E8] sm:text-4xl">
            Personal Reflection
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {reflections.map((item) => (
            <article
              key={item.number}
              className="grid grid-cols-1 gap-6 rounded-lg border border-white/10 bg-[#0B0D10] p-6 sm:p-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <span className="font-serif text-4xl font-semibold tabular-nums text-[#D4A853]">
                  {item.number}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-[#F3F0E8]">
                  {item.question}
                </h3>
              </div>

              <div className="space-y-4 lg:col-span-7">
                {item.answer.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`max-w-prose text-[15.5px] leading-[1.8] tracking-[0.01em] text-[#D1D5DB] ${
                      pIdx === 0 ? 'drop-cap' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
