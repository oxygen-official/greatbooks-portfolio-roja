import React from 'react';

interface LiteraryPlateProps {
  workId: string;
  title: string;
  romanIndex: string;
  className?: string;
}

export const LiteraryPlate: React.FC<LiteraryPlateProps> = ({
  workId,
  title,
  romanIndex,
  className = '',
}) => {
  const renderArtwork = () => {
    switch (workId) {
      case 'job-38':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            role="img"
            aria-label={`Gold-foil engraving plate for ${title}`}
          >
            <rect width="400" height="300" fill="#0F1218" />
            <g stroke="#D4A853" strokeOpacity="0.3" fill="none" strokeWidth="1">
              <circle cx="200" cy="145" r="108" />
              <circle cx="200" cy="145" r="82" strokeDasharray="3 4" />
              <circle cx="200" cy="145" r="56" />
              <circle cx="200" cy="145" r="30" strokeDasharray="2 3" />
            </g>
            <g stroke="#F3F0E8" fill="none" strokeWidth="1.35" strokeLinecap="round">
              <path d="M 105 90 Q 170 42 250 75 T 292 150 Q 275 215 200 220 Q 135 218 126 165 Q 124 125 170 118 Q 212 114 222 145 Q 225 168 198 172" />
              <path d="M 85 118 Q 160 65 268 96" strokeOpacity="0.5" />
              <path d="M 70 245 Q 135 232 200 245 T 330 245" stroke="#D4A853" />
              <path d="M 90 258 Q 150 247 210 258 T 315 258" stroke="#D4A853" strokeOpacity="0.45" />
              <line x1="200" y1="22" x2="200" y2="278" strokeOpacity="0.2" strokeDasharray="4 4" />
              <line x1="50" y1="145" x2="350" y2="145" strokeOpacity="0.18" />
            </g>
            <g fill="#D4A853">
              <circle cx="295" cy="56" r="2.4" />
              <circle cx="308" cy="49" r="1.9" />
              <circle cx="315" cy="60" r="2.6" />
              <circle cx="302" cy="67" r="1.7" />
              <circle cx="324" cy="53" r="1.8" />
              <circle cx="96" cy="58" r="2.1" />
              <circle cx="110" cy="46" r="1.7" />
            </g>
          </svg>
        );

      case 'panchatantra':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            role="img"
            aria-label={`Gold-foil engraving plate for ${title}`}
          >
            <rect width="400" height="300" fill="#0F1218" />
            <g fill="none" stroke="#F3F0E8" strokeWidth="1.2">
              <rect x="44" y="34" width="312" height="232" strokeOpacity="0.24" />
              <rect x="64" y="50" width="272" height="200" strokeOpacity="0.38" />
              <rect x="84" y="66" width="232" height="168" strokeOpacity="0.52" />
              <rect x="104" y="82" width="192" height="136" stroke="#D4A853" strokeOpacity="0.65" />
              <rect x="124" y="98" width="152" height="104" stroke="#D4A853" />
            </g>
            <g stroke="#F3F0E8" fill="none" strokeWidth="1.35">
              <circle cx="200" cy="150" r="36" stroke="#D4A853" />
              <path d="M 200 104 C 216 126, 216 144, 200 150 C 184 144, 184 126, 200 104 Z" />
              <path d="M 244 136 C 228 156, 212 158, 200 150 C 208 136, 224 130, 244 136 Z" />
              <path d="M 156 136 C 172 156, 188 158, 200 150 C 192 136, 176 130, 156 136 Z" />
              <path d="M 228 186 C 208 178, 202 164, 200 150 C 214 152, 226 166, 228 186 Z" />
              <path d="M 172 186 C 192 178, 198 164, 200 150 C 186 152, 174 166, 172 186 Z" />
              <circle cx="200" cy="150" r="4.5" fill="#D4A853" stroke="none" />
            </g>
          </svg>
        );

      case 'mahabharata':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            role="img"
            aria-label={`Gold-foil engraving plate for ${title}`}
          >
            <rect width="400" height="300" fill="#0F1218" />
            <g stroke="#F3F0E8" fill="none" strokeWidth="1.3">
              <circle cx="200" cy="150" r="92" />
              <circle cx="200" cy="150" r="82" strokeOpacity="0.45" />
              <circle cx="200" cy="150" r="22" stroke="#D4A853" strokeWidth="1.6" />
              <circle cx="200" cy="150" r="6" fill="#D4A853" stroke="none" />
            </g>
            <g stroke="#F3F0E8" strokeWidth="1.1" strokeOpacity="0.68">
              {Array.from({ length: 18 }).map((_, idx) => {
                const angle = (idx * 20 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 22;
                const y1 = 150 + Math.sin(angle) * 22;
                const x2 = 200 + Math.cos(angle) * 82;
                const y2 = 150 + Math.sin(angle) * 82;
                return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </g>
            <path d="M 76 62 Q 112 150 76 238" fill="none" stroke="#D4A853" strokeWidth="1.75" />
            <line x1="76" y1="62" x2="76" y2="238" stroke="#F3F0E8" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 324 62 Q 288 150 324 238" fill="none" stroke="#D4A853" strokeWidth="1.75" />
            <line x1="324" y1="62" x2="324" y2="238" stroke="#F3F0E8" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        );

      case 'iliad':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            role="img"
            aria-label={`Gold-foil engraving plate for ${title}`}
          >
            <rect width="400" height="300" fill="#0F1218" />
            <g fill="none" stroke="#F3F0E8" strokeWidth="1.3">
              <circle cx="200" cy="150" r="102" strokeWidth="1.8" />
              <circle cx="200" cy="150" r="88" stroke="#D4A853" strokeDasharray="6 3" />
              <circle cx="200" cy="150" r="68" strokeOpacity="0.7" />
              <circle cx="200" cy="150" r="46" stroke="#D4A853" />
              <circle cx="200" cy="150" r="20" />
            </g>
            <g stroke="#F3F0E8" strokeWidth="1.2" fill="none">
              <line x1="88" y1="262" x2="312" y2="38" strokeOpacity="0.35" />
              <line x1="88" y1="38" x2="312" y2="262" strokeOpacity="0.35" />
              <path
                d="M 164 150 L 180 132 L 200 144 L 220 132 L 236 150 L 220 168 L 200 156 L 180 168 Z"
                stroke="#D4A853"
              />
            </g>
            <circle cx="200" cy="150" r="4.5" fill="#D4A853" />
          </svg>
        );

      case 'odyssey':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            role="img"
            aria-label={`Gold-foil engraving plate for ${title}`}
          >
            <rect width="400" height="300" fill="#0F1218" />
            <g fill="none" stroke="#D4A853" strokeWidth="1.2" strokeOpacity="0.35">
              <circle cx="200" cy="130" r="84" />
              <circle cx="200" cy="130" r="64" strokeDasharray="3 4" />
              <line x1="90" y1="130" x2="310" y2="130" />
              <line x1="200" y1="30" x2="200" y2="230" />
            </g>
            <g fill="none" stroke="#F3F0E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 120 185 Q 200 220 280 185 Q 298 168 302 154" />
              <path d="M 120 185 Q 102 168 98 156" />
              <line x1="200" y1="74" x2="200" y2="196" />
              <path d="M 200 84 Q 256 112 246 164 Q 200 154 200 164" stroke="#D4A853" />
              <path d="M 54 226 Q 90 214 126 226 T 198 226 T 270 226 T 346 226" stroke="#D4A853" strokeWidth="1.25" />
              <path d="M 70 244 Q 106 234 142 244 T 214 244 T 286 244 T 330 244" strokeOpacity="0.45" strokeWidth="1.1" />
            </g>
            <polygon points="200,44 203,53 212,56 203,59 200,68 197,59 188,56 197,53" fill="#D4A853" />
          </svg>
        );

      case 'song-of-roland':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            role="img"
            aria-label={`Gold-foil engraving plate for ${title}`}
          >
            <rect width="400" height="300" fill="#0F1218" />
            <g fill="none" stroke="#F3F0E8" strokeWidth="1.35">
              <path d="M 40 245 L 125 110 L 185 190 L 245 95 L 360 245" strokeOpacity="0.4" />
              <path d="M 70 245 L 155 155 L 200 205 L 275 135 L 340 245" strokeOpacity="0.22" />
            </g>
            <g fill="none" stroke="#F3F0E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 122 175 C 155 198, 222 184, 272 104" stroke="#D4A853" />
              <path d="M 116 164 C 145 182, 204 166, 250 96" stroke="#D4A853" />
              <ellipse cx="261" cy="100" rx="14" ry="8" transform="rotate(-35 261 100)" stroke="#F3F0E8" />
              <circle cx="118" cy="170" r="5" fill="#D4A853" stroke="none" />
              <path d="M 284 74 A 24 24 0 0 1 298 106" stroke="#D4A853" strokeWidth="1.2" />
              <path d="M 296 62 A 38 38 0 0 1 316 112" stroke="#D4A853" strokeWidth="1.1" strokeOpacity="0.6" />
              <path d="M 308 50 A 52 52 0 0 1 334 118" stroke="#D4A853" strokeWidth="1" strokeOpacity="0.35" />
            </g>
            <g stroke="#F3F0E8" strokeWidth="1.4">
              <line x1="200" y1="196" x2="200" y2="264" />
              <line x1="178" y1="216" x2="222" y2="216" />
            </g>
          </svg>
        );

      case 'tale-of-genji':
      default:
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            role="img"
            aria-label={`Gold-foil engraving plate for ${title}`}
          >
            <rect width="400" height="300" fill="#0F1218" />
            <g fill="none" stroke="#F3F0E8" strokeWidth="1.2">
              <polygon points="75,65 138,52 138,238 75,248" strokeOpacity="0.45" />
              <polygon points="138,52 200,65 200,248 138,238" strokeOpacity="0.65" />
              <polygon points="200,65 262,52 262,238 200,248" strokeOpacity="0.65" />
              <polygon points="262,52 325,65 325,248 262,238" strokeOpacity="0.45" />
            </g>
            <circle cx="232" cy="112" r="24" fill="none" stroke="#D4A853" strokeWidth="1.3" />
            <path
              d="M 88 188 Q 145 142 205 156 T 312 118"
              fill="none"
              stroke="#F3F0E8"
              strokeWidth="1.5"
            />
            <g fill="#D4A853" fillOpacity="0.9">
              <ellipse cx="146" cy="154" rx="4" ry="2.2" transform="rotate(-25 146 154)" />
              <ellipse cx="176" cy="138" rx="3.5" ry="2" transform="rotate(20 176 138)" />
              <ellipse cx="268" cy="144" rx="4" ry="2.2" transform="rotate(-15 268 144)" />
              <ellipse cx="292" cy="168" rx="3.2" ry="1.8" transform="rotate(35 292 168)" />
              <ellipse cx="122" cy="196" rx="3" ry="1.7" transform="rotate(15 122 196)" />
            </g>
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden border border-white/12 bg-[#0F1218] ${className}`}>
      {renderArtwork()}
      <div className="pointer-events-none absolute top-3 left-3 font-mono text-[11px] tracking-widest text-[#D4A853]">
        PLATE {romanIndex}
      </div>
    </div>
  );
};
