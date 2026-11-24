import React, { useEffect, useState } from 'react';
import { RotateCcw, X } from 'lucide-react';
import { LiteraryWork, StudentProfile } from '../data/portfolioData';

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  favoriteWorkId: string;
  works: LiteraryWork[];
  onSave: (updatedProfile: StudentProfile, updatedFavoriteId: string) => void;
  onReset: () => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  isOpen,
  onClose,
  profile,
  favoriteWorkId,
  works,
  onSave,
  onReset,
}) => {
  const [draft, setDraft] = useState<StudentProfile>(profile);
  const [draftFavoriteId, setDraftFavoriteId] = useState<string>(favoriteWorkId);

  useEffect(() => {
    setDraft(profile);
    setDraftFavoriteId(favoriteWorkId);
  }, [profile, favoriteWorkId, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(draft, draftFavoriteId);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="customize-modal-title"
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-white/15 bg-[#13161C] p-6 text-[#F3F0E8] sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2
              id="customize-modal-title"
              className="font-serif text-2xl font-semibold text-[#F3F0E8]"
            >
              Personalize Student Portfolio
            </h2>
            <p className="mt-1 text-xs text-[#9CA3AF]">
              Update your academic credentials, personal introduction, and featured favorite
              work. Changes save automatically in your browser.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close editor"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-[#0B0D10] text-[#F3F0E8] hover:border-[#D4A853]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="student-name" className="block text-xs font-medium text-[#D1D5DB]">
                Complete Name
              </label>
              <input
                id="student-name"
                type="text"
                required
                value={draft.fullName}
                onChange={(e) => setDraft({ ...draft, fullName: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-white/12 bg-[#0B0D10] px-3 py-2 text-sm text-[#F3F0E8] focus:border-[#D4A853] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="student-year" className="block text-xs font-medium text-[#D1D5DB]">
                Year & Section
              </label>
              <input
                id="student-year"
                type="text"
                required
                value={draft.yearAndSection}
                onChange={(e) => setDraft({ ...draft, yearAndSection: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-white/12 bg-[#0B0D10] px-3 py-2 text-sm text-[#F3F0E8] focus:border-[#D4A853] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="student-course" className="block text-xs font-medium text-[#D1D5DB]">
                Course / Program
              </label>
              <input
                id="student-course"
                type="text"
                required
                value={draft.course}
                onChange={(e) => setDraft({ ...draft, course: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-white/12 bg-[#0B0D10] px-3 py-2 text-sm text-[#F3F0E8] focus:border-[#D4A853] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="favorite-work-modal" className="block text-xs font-medium text-[#D1D5DB]">
                Favorite Masterpiece
              </label>
              <select
                id="favorite-work-modal"
                value={draftFavoriteId}
                onChange={(e) => setDraftFavoriteId(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-white/12 bg-[#0B0D10] px-3 py-2 text-sm text-[#F3F0E8] focus:border-[#D4A853] focus:outline-none"
              >
                {works.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.numericIndex}. {w.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="personal-intro" className="block text-xs font-medium text-[#D1D5DB]">
              Brief Personal Introduction
            </label>
            <textarea
              id="personal-intro"
              rows={3}
              required
              value={draft.personalIntro}
              onChange={(e) => setDraft({ ...draft, personalIntro: e.target.value })}
              className="mt-1.5 w-full rounded-md border border-white/12 bg-[#0B0D10] px-3 py-2 text-sm leading-relaxed text-[#F3F0E8] focus:border-[#D4A853] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="reading-interests" className="block text-xs font-medium text-[#D1D5DB]">
              Reading Interests & Experiences
            </label>
            <textarea
              id="reading-interests"
              rows={3}
              required
              value={draft.readingInterests}
              onChange={(e) => setDraft({ ...draft, readingInterests: e.target.value })}
              className="mt-1.5 w-full rounded-md border border-white/12 bg-[#0B0D10] px-3 py-2 text-sm leading-relaxed text-[#F3F0E8] focus:border-[#D4A853] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="great-books-statement" className="block text-xs font-medium text-[#D1D5DB]">
              Expectations & Learning Experience Statement
            </label>
            <textarea
              id="great-books-statement"
              rows={3}
              required
              value={draft.greatBooksStatement}
              onChange={(e) => setDraft({ ...draft, greatBooksStatement: e.target.value })}
              className="mt-1.5 w-full rounded-md border border-white/12 bg-[#0B0D10] px-3 py-2 text-sm leading-relaxed text-[#F3F0E8] focus:border-[#D4A853] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-[#0B0D10] px-3.5 py-2 text-xs font-medium text-[#9CA3AF] hover:border-white/40 hover:text-[#F3F0E8]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-white/15 bg-[#0B0D10] px-4 py-2 text-xs font-medium text-[#F3F0E8] hover:border-white/40"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#D4A853] px-5 py-2 text-xs font-semibold text-[#0B0D10] hover:bg-[#E2BC72]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
