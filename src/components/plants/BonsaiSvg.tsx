import React from 'react';
import { GrowthStage } from '../../types';

interface PlantSvgProps {
  stage: GrowthStage;
  isDrooping?: boolean;
  className?: string;
}

export const BonsaiSvg: React.FC<PlantSvgProps> = ({ stage, isDrooping = false, className = "w-full h-full" }) => {
  // Drooping Sulk State
  if (isDrooping) {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Ceramic Basin */}
        <path d="M30 94 L34 104 H86 L90 94 Z" fill="#C97A56" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="94" rx="30" ry="5" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2" />
        {/* Sagging Trunk */}
        <path d="M60 92 C58 76 46 68 34 76" fill="none" stroke="#1F1B16" strokeWidth="4.5" strokeLinecap="round" />
        {/* Wilting desaturated foliage cloud */}
        <ellipse cx="32" cy="78" rx="14" ry="7" fill="#524B42" stroke="#1F1B16" strokeWidth="2" />
        {/* Fallen needles on basin rim */}
        <line x1="42" y1="92" x2="48" y2="93" stroke="#1F1B16" strokeWidth="1.5" />
        <line x1="72" y1="93" x2="78" y2="92" stroke="#1F1B16" strokeWidth="1.5" />
      </svg>
    );
  }

  // Seed
  if (stage === 'seed') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M36 94 L39 104 H81 L84 94 Z" fill="#C97A56" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="94" rx="24" ry="4" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2" />
        <circle cx="60" cy="92" r="4.5" fill="#1F1B16" />
        <circle cx="58" cy="91" r="1.5" fill="#EDE5D3" />
      </svg>
    );
  }

  // Sprout
  if (stage === 'sprout') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M34 94 L38 104 H82 L86 94 Z" fill="#C97A56" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="94" rx="26" ry="4.5" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2" />
        {/* Gracefully curving young stem */}
        <path d="M60 92 C56 82 54 74 62 66" fill="none" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
        {/* Tiny jade cloud pad */}
        <ellipse cx="64" cy="64" rx="10" ry="5" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
      </svg>
    );
  }

  // Sapling (With Training Wire & Two Pads)
  if (stage === 'sapling') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M30 94 L34 104 H86 L90 94 Z" fill="#C97A56" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="94" rx="30" ry="5" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2" />
        {/* Moss mound in tray */}
        <ellipse cx="60" cy="92" rx="20" ry="3.5" fill="#3F6B3A" />
        {/* Sculpted S-curve trunk */}
        <path d="M58 92 C52 78 68 68 56 50" fill="none" stroke="#1F1B16" strokeWidth="4.5" strokeLinecap="round" />
        {/* Copper wire marks */}
        <line x1="56" y1="80" x2="62" y2="76" stroke="#C97A56" strokeWidth="1.5" />
        {/* Lower Left Cloud Pad */}
        <ellipse cx="44" cy="62" rx="12" ry="5.5" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        {/* Top Crown Cloud Pad */}
        <ellipse cx="58" cy="46" rx="14" ry="6" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />
      </svg>
    );
  }

  // Bloom (Sculpted Cloud Foliage in Ceramic Basin)
  if (stage === 'bloom') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Ceramic Basin */}
        <path d="M26 94 L30 106 H90 L94 94 Z" fill="#C97A56" stroke="#1F1B16" strokeWidth="2.8" />
        <ellipse cx="60" cy="94" rx="34" ry="5.5" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2" />
        <ellipse cx="60" cy="92" rx="24" ry="4" fill="#2E502A" />

        {/* Sculpted Gnarly Trunk */}
        <path d="M56 92 C46 76 74 62 54 40 C50 34 56 28 62 26" fill="none" stroke="#1F1B16" strokeWidth="6" strokeLinecap="round" />
        <path d="M56 92 C46 76 74 62 54 40 C50 34 56 28 62 26" fill="none" stroke="#524B42" strokeWidth="3" strokeLinecap="round" />

        {/* Cloud Foliage Tier 1 (Low Right) */}
        <ellipse cx="78" cy="58" rx="14" ry="6.5" fill="#2E502A" stroke="#1F1B16" strokeWidth="2.2" />
        {/* Cloud Foliage Tier 2 (Mid Left) */}
        <ellipse cx="38" cy="50" rx="16" ry="7" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2.2" />
        {/* Cloud Foliage Tier 3 (Crown Top) */}
        <ellipse cx="64" cy="24" rx="18" ry="8" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2.2" />
      </svg>
    );
  }

  // Full Stage (Masterpiece Ancient Bonsai)
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Glazed Earthenware Basin with Feet */}
      <path d="M22 92 L26 106 H94 L98 92 Z" fill="#C97A56" stroke="#1F1B16" strokeWidth="3" />
      <rect x="32" y="106" width="6" height="4" fill="#1F1B16" />
      <rect x="82" y="106" width="6" height="4" fill="#1F1B16" />
      <ellipse cx="60" cy="92" rx="38" ry="6" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.2" />
      {/* Ancient Moss & Exposed Surface Roots */}
      <ellipse cx="60" cy="90" rx="28" ry="4" fill="#2E502A" />
      <path d="M50 92 C44 94 40 92 36 93" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M68 92 C74 94 80 92 84 93" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Heavy Twisted Wood Trunk */}
      <path d="M58 90 C42 72 78 58 52 36 C48 30 54 22 62 18" fill="none" stroke="#1F1B16" strokeWidth="8" strokeLinecap="round" />
      <path d="M58 90 C42 72 78 58 52 36 C48 30 54 22 62 18" fill="none" stroke="#524B42" strokeWidth="4.5" strokeLinecap="round" />

      {/* Tier 1 Cloud (Low Right) */}
      <g>
        <ellipse cx="84" cy="56" rx="16" ry="7" fill="#2E502A" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="86" cy="53" rx="12" ry="4.5" fill="#3F6B3A" />
      </g>

      {/* Tier 2 Cloud (Far Left Arch) */}
      <g>
        <ellipse cx="32" cy="46" rx="18" ry="8" fill="#2E502A" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="34" cy="43" rx="14" ry="5.5" fill="#3F6B3A" />
      </g>

      {/* Tier 3 Cloud (Mid Center) */}
      <g>
        <ellipse cx="68" cy="36" rx="15" ry="6.5" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2.2" />
        <ellipse cx="70" cy="33" rx="10" ry="4" fill="#5B8C54" />
      </g>

      {/* Masterpiece Crown Cloud (Lush Jade Green) */}
      <g>
        <ellipse cx="60" cy="16" rx="22" ry="9.5" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="62" cy="13" rx="16" ry="6" fill="#5B8C54" />
      </g>
    </svg>
  );
};
