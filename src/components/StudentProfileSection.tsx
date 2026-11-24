import React, { useRef } from 'react';
import { Camera } from 'lucide-react';
import { StudentProfile } from '../data/portfolioData';

interface StudentProfileSectionProps {
  profile: StudentProfile;
  onUpdatePhoto: (dataUrl: string) => void;
}

export const StudentProfileSection: React.FC<StudentProfileSectionProps> = ({
  profile,
  onUpdatePhoto,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUpdatePhoto(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const initials = profile.fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  return (
    <section id="profile" className="border-b border-white/10 bg-[#13161C] py-16 lg:py-22">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="border-b border-white/10 pb-6">
          <p className="font-mono text-xs tracking-wider text-[#D4A853]">
            01 · STUDENT DOSSIER
          </p>
          <h2 className="mt-1.5 font-serif text-3xl font-semibold tracking-tight text-[#F3F0E8] sm:text-4xl">
            Student Profile
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: Academic Credential Strip + 3-Part Narrative */}
          <div className="space-y-8 lg:col-span-8">
            <dl className="grid grid-cols-1 gap-6 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-xs text-[#9CA3AF]">Complete Name</dt>
                <dd className="mt-1 font-serif text-lg font-semibold text-[#F3F0E8]">
                  {profile.fullName}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#9CA3AF]">Program / Course</dt>
                <dd className="mt-1 text-sm font-medium text-[#F3F0E8]">
                  {profile.course}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#9CA3AF]">Year Level</dt>
                <dd className="mt-1 text-sm font-medium text-[#D4A853]">
                  {profile.yearAndSection}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#9CA3AF]">Institution</dt>
                <dd className="mt-1 text-sm text-[#E5E7EB]">
                  {profile.institution}
                </dd>
              </div>
            </dl>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#F3F0E8]">
                  Personal Introduction
                </h3>
                <p className="drop-cap mt-3 text-sm leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
                  {profile.personalIntro}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-[#F3F0E8]">
                  Reading Interests
                </h3>
                <p className="mt-3 text-sm leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
                  {profile.readingInterests}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-[#F3F0E8]">
                  Great Books Experience
                </h3>
                <p className="mt-3 text-sm leading-[1.8] tracking-[0.01em] text-[#D1D5DB]">
                  {profile.greatBooksStatement}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Portrait Plate */}
          <div className="lg:col-span-4">
            <div className="rounded-lg border border-white/10 bg-[#0B0D10] p-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-white/10 bg-[#161B22]">
                {profile.photoDataUrl ? (
                  <img
                    src={profile.photoDataUrl}
                    alt={`Portrait of ${profile.fullName}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center text-[#9CA3AF]">
                    <svg
                      viewBox="0 0 160 160"
                      className="h-32 w-32 text-[#D4A853]/80"
                      aria-hidden="true"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.25"
                        strokeWidth="1"
                      />
                      <circle
                        cx="80"
                        cy="60"
                        r="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M 38 134 C 42 104, 118 104, 122 134"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                    <span className="mt-2 font-serif text-lg font-semibold tracking-widest text-[#D4A853]">
                      {initials || 'MR'}
                    </span>
                    <span className="mt-1 text-xs text-[#9CA3AF]">
                      {profile.fullName}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#9CA3AF]">
                  PORTRAIT FOLIO
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  aria-label="Upload student photograph"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="no-print inline-flex items-center gap-1.5 text-xs font-medium text-[#D4A853] underline decoration-[#D4A853]/35 underline-offset-4 hover:decoration-[#D4A853]"
                >
                  <Camera className="h-3.5 w-3.5" />
                  <span>{profile.photoDataUrl ? 'Change Photo' : 'Upload Photo'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
