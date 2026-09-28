import React from 'react';
import { GrowthStage } from '../../types';

interface PlantSvgProps {
  stage: GrowthStage;
  isDrooping?: boolean;
  className?: string;
}

export const SunflowerSvg: React.FC<PlantSvgProps> = ({ stage, isDrooping = false, className = "w-full h-full" }) => {
  // Drooping Sulk State
  if (isDrooping) {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Bent Stem arching down */}
        <path d="M60 96 C62 76 68 56 60 42 C54 32 38 36 32 48" fill="none" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
        {/* Drooping leaves */}
        <path d="M62 78 C74 80 82 86 84 94 C76 96 68 90 62 84" fill="#524B42" stroke="#1F1B16" strokeWidth="2" />
        <path d="M60 62 C48 64 42 70 38 78 C46 80 54 74 58 68" fill="#524B42" stroke="#1F1B16" strokeWidth="2" />
        {/* Bowed Flower Head */}
        <g transform="translate(30, 52) rotate(65)">
          <circle cx="0" cy="0" r="10" fill="#524B42" stroke="#1F1B16" strokeWidth="2" />
          {/* Wilted Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-14"
              rx="3"
              ry="6"
              fill="#C8A02A"
              stroke="#1F1B16"
              strokeWidth="1.5"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>
      </svg>
    );
  }

  // Seed
  if (stage === 'seed') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Striped Sunflower Seed */}
        <ellipse cx="60" cy="94" rx="8" ry="4.5" fill="#1F1B16" />
        <line x1="55" y1="94" x2="65" y2="94" stroke="#EDE5D3" strokeWidth="1.5" />
        <line x1="57" y1="92" x2="63" y2="92" stroke="#EDE5D3" strokeWidth="1.2" />
      </svg>
    );
  }

  // Sprout
  if (stage === 'sprout') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Sturdy green stem */}
        <line x1="60" y1="96" x2="60" y2="66" stroke="#1F1B16" strokeWidth="3.2" strokeLinecap="round" />
        {/* Broad heart cotyledons */}
        <path d="M60 68 C50 60 38 64 42 74 C48 80 58 74 60 68 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M60 68 C70 60 82 64 78 74 C72 80 62 74 60 68 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        {/* Center shoot */}
        <path d="M60 66 L60 58" stroke="#1F1B16" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Sapling
  if (stage === 'sapling') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Sturdy stalk */}
        <line x1="60" y1="96" x2="60" y2="40" stroke="#1F1B16" strokeWidth="3.5" strokeLinecap="round" />
        {/* Leaves */}
        <path d="M60 80 C44 75 34 82 42 90 C50 94 58 86 60 80 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M60 68 C76 63 86 70 78 78 C70 82 62 74 60 68 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M60 54 C46 50 38 56 46 64 C52 66 58 60 60 54 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />
        {/* Developing Bud */}
        <circle cx="60" cy="38" r="7" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <polygon points="60,28 62,32 65,32 63,35 64,38 60,36 56,38 57,35 55,32 58,32" fill="#5B8C54" stroke="#1F1B16" strokeWidth="1.2" />
      </svg>
    );
  }

  // Bloom
  if (stage === 'bloom') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="38" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="30" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Stalk */}
        <line x1="60" y1="96" x2="60" y2="38" stroke="#1F1B16" strokeWidth="4" strokeLinecap="round" />
        {/* Leaves */}
        <path d="M60 82 C38 78 28 88 40 96 C50 98 58 88 60 82 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2.2" />
        <path d="M60 66 C82 62 92 72 80 80 C70 84 62 72 60 66 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2.2" />
        {/* Blooming Head with Gold Petals */}
        <g transform="translate(60, 36)">
          {/* Ray Petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-16"
              rx="4"
              ry="8"
              fill="#F2C94C"
              stroke="#1F1B16"
              strokeWidth="1.8"
              transform={`rotate(${angle})`}
            />
          ))}
          {/* Seed Disc */}
          <circle cx="0" cy="0" r="10" fill="#1F1B16" />
          <circle cx="0" cy="0" r="6" fill="#C97A56" stroke="#1F1B16" strokeWidth="1.5" />
        </g>
      </svg>
    );
  }

  // Full Stage (Radiant Giant Sunflower)
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="100" rx="40" ry="11" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
      <ellipse cx="60" cy="98" rx="32" ry="7.5" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
      {/* Heavy Stalk */}
      <line x1="60" y1="96" x2="60" y2="40" stroke="#1F1B16" strokeWidth="4.5" strokeLinecap="round" />
      {/* Massive Heart Leaves */}
      <path d="M60 84 C32 80 20 92 36 100 C48 102 58 92 60 84 Z" fill="#2E502A" stroke="#1F1B16" strokeWidth="2.5" />
      <path d="M60 68 C88 64 100 76 84 86 C72 90 62 76 60 68 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2.5" />
      <path d="M60 52 C36 46 26 56 42 64 C50 66 58 58 60 52 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />

      {/* Giant Radiant Golden Head */}
      <g transform="translate(60, 32)">
        {/* Outer Petals */}
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle) => (
          <polygon
            key={angle}
            points="0,-24 4,-12 0,-10 -4,-12"
            fill="#F2C94C"
            stroke="#1F1B16"
            strokeWidth="1.6"
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Inner Golden Ring */}
        <circle cx="0" cy="0" r="14" fill="#F8DE7E" stroke="#1F1B16" strokeWidth="2" />
        {/* Center Black & Ochre Seed Core */}
        <circle cx="0" cy="0" r="11" fill="#1F1B16" />
        <circle cx="0" cy="0" r="6" fill="#C97A56" stroke="#1F1B16" strokeWidth="1.5" />
        {/* Disk Florets Pips */}
        <circle cx="-3" cy="-3" r="1.2" fill="#F2C94C" />
        <circle cx="3" cy="2" r="1.2" fill="#F2C94C" />
        <circle cx="0" cy="3" r="1.2" fill="#F2C94C" />
      </g>
    </svg>
  );
};
