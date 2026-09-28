import React from 'react';
import { GrowthStage } from '../../types';

interface PlantSvgProps {
  stage: GrowthStage;
  isDrooping?: boolean;
  className?: string;
}

export const CactusSvg: React.FC<PlantSvgProps> = ({ stage, isDrooping = false, className = "w-full h-full" }) => {
  // Drooping Sulk State (Leaning sideways with wrinkles)
  if (isDrooping) {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Leaning cactus stem */}
        <g transform="translate(60, 96) rotate(22) translate(-60, -96)">
          <rect x="48" y="52" width="24" height="44" rx="12" fill="#524B42" stroke="#1F1B16" strokeWidth="3" />
          {/* Wrinkle lines */}
          <path d="M52 64 C58 68 64 68 68 64" stroke="#1F1B16" strokeWidth="2" fill="none" />
          <path d="M52 74 C58 78 64 78 68 74" stroke="#1F1B16" strokeWidth="2" fill="none" />
          {/* Drooping arm */}
          <path d="M72 70 C82 72 86 82 82 90" fill="none" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
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
        <circle cx="60" cy="94" r="4.5" fill="#1F1B16" />
        <circle cx="48" cy="96" r="2" fill="#C97A56" />
        <circle cx="70" cy="97" r="2" fill="#C97A56" />
      </svg>
    );
  }

  // Sprout (Small Round Barrel Pad)
  if (stage === 'sprout') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Barrel pad */}
        <ellipse cx="60" cy="80" rx="14" ry="18" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="3" />
        {/* Rib lines */}
        <line x1="60" y1="62" x2="60" y2="98" stroke="#2E502A" strokeWidth="2" />
        <path d="M53 66 C53 76 53 86 53 96" stroke="#2E502A" strokeWidth="1.8" fill="none" />
        <path d="M67 66 C67 76 67 86 67 96" stroke="#2E502A" strokeWidth="1.8" fill="none" />
        {/* Spines */}
        <line x1="43" y1="76" x2="40" y2="74" stroke="#1F1B16" strokeWidth="2" />
        <line x1="43" y1="84" x2="39" y2="84" stroke="#1F1B16" strokeWidth="2" />
        <line x1="77" y1="76" x2="80" y2="74" stroke="#1F1B16" strokeWidth="2" />
        <line x1="77" y1="84" x2="81" y2="84" stroke="#1F1B16" strokeWidth="2" />
      </svg>
    );
  }

  // Sapling (Tall Column with First Arm Nub)
  if (stage === 'sapling') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Main Column */}
        <rect x="50" y="44" width="20" height="52" rx="10" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="3" />
        <line x1="60" y1="44" x2="60" y2="96" stroke="#2E502A" strokeWidth="2" />
        {/* Left Arm Branching Out and Up */}
        <path d="M50 72 H38 C34 72 34 62 34 56" fill="none" stroke="#1F1B16" strokeWidth="8" strokeLinecap="round" />
        <path d="M50 72 H38 C34 72 34 62 34 56" fill="none" stroke="#5B8C54" strokeWidth="4.5" strokeLinecap="round" />
        {/* Spines */}
        <line x1="48" y1="52" x2="45" y2="50" stroke="#1F1B16" strokeWidth="2" />
        <line x1="72" y1="52" x2="75" y2="50" stroke="#1F1B16" strokeWidth="2" />
        <line x1="72" y1="68" x2="76" y2="68" stroke="#1F1B16" strokeWidth="2" />
      </svg>
    );
  }

  // Bloom (Classic Two-Arm Saguaro with Scarlet Flowers)
  if (stage === 'bloom') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="38" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="30" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Main Column */}
        <rect x="50" y="32" width="20" height="64" rx="10" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="3" />
        <line x1="60" y1="32" x2="60" y2="96" stroke="#2E502A" strokeWidth="2" />
        {/* Left Arm */}
        <path d="M50 68 H34 C30 68 30 52 30 44" fill="none" stroke="#1F1B16" strokeWidth="10" strokeLinecap="round" />
        <path d="M50 68 H34 C30 68 30 52 30 44" fill="none" stroke="#5B8C54" strokeWidth="6" strokeLinecap="round" />
        {/* Right Arm */}
        <path d="M70 60 H84 C88 60 88 46 88 38" fill="none" stroke="#1F1B16" strokeWidth="10" strokeLinecap="round" />
        <path d="M70 60 H84 C88 60 88 46 88 38" fill="none" stroke="#5B8C54" strokeWidth="6" strokeLinecap="round" />
        {/* Scarlet Flowers on Tips */}
        {/* Top Flower */}
        <circle cx="60" cy="28" r="5" fill="#E4572E" stroke="#1F1B16" strokeWidth="2" />
        <circle cx="60" cy="28" r="2" fill="#F2C94C" />
        {/* Left Arm Flower */}
        <circle cx="30" cy="40" r="4" fill="#E4572E" stroke="#1F1B16" strokeWidth="1.8" />
        {/* Right Arm Flower */}
        <circle cx="88" cy="34" r="4" fill="#E4572E" stroke="#1F1B16" strokeWidth="1.8" />
      </svg>
    );
  }

  // Full Stage (Desert Monument with 4 Arms & Bountiful Blooms)
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="100" rx="40" ry="11" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
      <ellipse cx="60" cy="98" rx="32" ry="7.5" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
      {/* Central Trunk */}
      <rect x="49" y="24" width="22" height="72" rx="11" fill="#2E502A" stroke="#1F1B16" strokeWidth="3.2" />
      <line x1="60" y1="24" x2="60" y2="96" stroke="#3F6B3A" strokeWidth="2.5" />
      {/* Lower Left Arm */}
      <path d="M49 70 H30 C24 70 24 54 24 44" fill="none" stroke="#1F1B16" strokeWidth="10" strokeLinecap="round" />
      <path d="M49 70 H30 C24 70 24 54 24 44" fill="none" stroke="#3F6B3A" strokeWidth="6" strokeLinecap="round" />
      {/* Upper Left Arm */}
      <path d="M49 48 H38 C34 48 34 38 34 32" fill="none" stroke="#1F1B16" strokeWidth="8" strokeLinecap="round" />
      <path d="M49 48 H38 C34 48 34 38 34 32" fill="none" stroke="#5B8C54" strokeWidth="4.5" strokeLinecap="round" />
      {/* Lower Right Arm */}
      <path d="M71 64 H88 C94 64 94 48 94 38" fill="none" stroke="#1F1B16" strokeWidth="10" strokeLinecap="round" />
      <path d="M71 64 H88 C94 64 94 48 94 38" fill="none" stroke="#3F6B3A" strokeWidth="6" strokeLinecap="round" />
      {/* Upper Right Arm */}
      <path d="M71 44 H82 C86 44 86 34 86 28" fill="none" stroke="#1F1B16" strokeWidth="8" strokeLinecap="round" />
      <path d="M71 44 H82 C86 44 86 34 86 28" fill="none" stroke="#5B8C54" strokeWidth="4.5" strokeLinecap="round" />

      {/* Brilliant Scarlet & Gold Desert Blooms */}
      <g>
        <circle cx="60" cy="20" r="6.5" fill="#E4572E" stroke="#1F1B16" strokeWidth="2.2" />
        <circle cx="60" cy="20" r="2.5" fill="#F2C94C" />
      </g>
      <g>
        <circle cx="24" cy="40" r="5" fill="#E4572E" stroke="#1F1B16" strokeWidth="2" />
        <circle cx="24" cy="40" r="1.8" fill="#F2C94C" />
      </g>
      <g>
        <circle cx="94" cy="34" r="5" fill="#E4572E" stroke="#1F1B16" strokeWidth="2" />
        <circle cx="94" cy="34" r="1.8" fill="#F2C94C" />
      </g>
      <g>
        <circle cx="34" cy="28" r="4" fill="#E4572E" stroke="#1F1B16" strokeWidth="1.8" />
      </g>
      <g>
        <circle cx="86" cy="24" r="4" fill="#E4572E" stroke="#1F1B16" strokeWidth="1.8" />
      </g>
    </svg>
  );
};
