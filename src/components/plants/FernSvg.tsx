import React from 'react';
import { GrowthStage } from '../../types';

interface PlantSvgProps {
  stage: GrowthStage;
  isDrooping?: boolean;
  className?: string;
}

export const FernSvg: React.FC<PlantSvgProps> = ({ stage, isDrooping = false, className = "w-full h-full" }) => {
  // If drooping, render sulking fern with curled tips
  if (isDrooping) {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Soil Mound */}
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        
        {/* Sulking Fern Fronds (curving down towards ground) */}
        <g stroke="#1F1B16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main arching down stem */}
          <path d="M60 96 C58 75 42 68 28 85" fill="none" />
          <path d="M60 96 C62 70 76 65 92 84" fill="none" />
          <path d="M60 96 C59 78 50 62 42 75" fill="none" />
          
          {/* Sulking curved leaflets */}
          <path d="M36 78 C30 84 28 90 32 94 C36 94 40 86 42 80" fill="#524B42" />
          <path d="M48 72 C42 80 40 86 46 88 C50 86 52 78 52 72" fill="#524B42" />
          <path d="M84 76 C90 82 92 88 88 92 C84 92 80 84 78 78" fill="#524B42" />
          <path d="M72 70 C78 78 80 84 74 86 C70 84 68 76 68 70" fill="#524B42" />

          {/* Sulking head droplets */}
          <circle cx="26" cy="88" r="3" fill="#EDE5D3" />
        </g>
      </svg>
    );
  }

  // Seed Stage
  if (stage === 'seed') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Seed in soil with crack */}
        <ellipse cx="60" cy="94" rx="8" ry="5" fill="#1F1B16" />
        <path d="M57 93 L61 95 L63 92" stroke="#F4EEE0" strokeWidth="1.5" strokeLinecap="round" />
        {/* Soil pebbles */}
        <circle cx="48" cy="98" r="2" fill="#1F1B16" />
        <circle cx="72" cy="97" r="1.5" fill="#1F1B16" />
      </svg>
    );
  }

  // Sprout Stage (Single Fiddlehead Curl)
  if (stage === 'sprout') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Emerging fiddlehead stem */}
        <path d="M60 96 C60 82 56 68 56 60 C56 52 64 50 66 56 C68 62 62 66 58 64" fill="none" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
        <circle cx="61" cy="58" r="4.5" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        {/* Little leaf wing */}
        <path d="M57 78 C50 74 48 78 52 82 C56 82 58 80 58 78 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />
      </svg>
    );
  }

  // Sapling Stage (3 Fronds)
  if (stage === 'sapling') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        
        {/* Left Frond */}
        <path d="M60 96 C56 80 44 65 30 55" fill="none" stroke="#1F1B16" strokeWidth="2.5" />
        <path d="M30 55 C36 54 44 60 48 66 C42 68 34 62 30 55 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M42 68 C48 66 54 74 56 78 C50 80 44 74 42 68 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />

        {/* Right Frond */}
        <path d="M60 96 C64 80 76 65 90 55" fill="none" stroke="#1F1B16" strokeWidth="2.5" />
        <path d="M90 55 C84 54 76 60 72 66 C78 68 86 62 90 55 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M78 68 C72 66 66 74 64 78 C70 80 76 74 78 68 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />

        {/* Center Upright Fiddlehead */}
        <path d="M60 96 C60 72 58 48 62 40 C65 34 71 36 70 42 C69 47 63 48 60 45" fill="none" stroke="#1F1B16" strokeWidth="2.8" />
        <circle cx="66" cy="41" r="4" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
      </svg>
    );
  }

  // Bloom Stage (Rich Fan with Golden Spores)
  if (stage === 'bloom') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="38" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="30" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />

        {/* Side fronds */}
        <path d="M60 96 C50 75 30 65 18 52" fill="none" stroke="#1F1B16" strokeWidth="2.5" />
        <path d="M18 52 C26 50 36 60 40 68 C32 70 22 62 18 52 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M60 96 C70 75 90 65 102 52" fill="none" stroke="#1F1B16" strokeWidth="2.5" />
        <path d="M102 52 C94 50 84 60 80 68 C88 70 98 62 102 52 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />

        {/* Central fronds */}
        <path d="M60 96 C56 68 45 42 40 28" fill="none" stroke="#1F1B16" strokeWidth="2.5" />
        <path d="M40 28 C48 30 52 44 52 54 C46 54 42 42 40 28 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />

        <path d="M60 96 C64 68 75 42 80 28" fill="none" stroke="#1F1B16" strokeWidth="2.5" />
        <path d="M80 28 C72 30 68 44 68 54 C74 54 78 42 80 28 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />

        {/* Upright Center Crown with Golden Spores */}
        <path d="M60 96 L60 22" stroke="#1F1B16" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="60" cy="20" r="5" fill="#F2C94C" stroke="#1F1B16" strokeWidth="2" />
        <circle cx="50" cy="36" r="3" fill="#F2C94C" stroke="#1F1B16" strokeWidth="1.5" />
        <circle cx="70" cy="36" r="3" fill="#F2C94C" stroke="#1F1B16" strokeWidth="1.5" />
      </svg>
    );
  }

  // Full Stage (Lush Arching Canopy)
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="100" rx="40" ry="11" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
      <ellipse cx="60" cy="98" rx="32" ry="7.5" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />

      {/* Deep Lush Fronds Layer */}
      <path d="M60 96 C40 70 20 60 10 44" fill="none" stroke="#1F1B16" strokeWidth="2.8" />
      <path d="M10 44 C20 40 32 54 38 64 C28 66 16 56 10 44 Z" fill="#2E502A" stroke="#1F1B16" strokeWidth="2" />

      <path d="M60 96 C80 70 100 60 110 44" fill="none" stroke="#1F1B16" strokeWidth="2.8" />
      <path d="M110 44 C100 40 88 54 82 64 C92 66 104 56 110 44 Z" fill="#2E502A" stroke="#1F1B16" strokeWidth="2" />

      {/* Mid Layer Fronds */}
      <path d="M60 96 C50 62 34 38 28 22" fill="none" stroke="#1F1B16" strokeWidth="2.8" />
      <path d="M28 22 C38 24 46 38 48 50 C40 50 32 36 28 22 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />

      <path d="M60 96 C70 62 86 38 92 22" fill="none" stroke="#1F1B16" strokeWidth="2.8" />
      <path d="M92 22 C82 24 74 38 72 50 C80 50 88 36 92 22 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />

      {/* Center Crown */}
      <path d="M60 96 C60 55 58 25 60 14" fill="none" stroke="#1F1B16" strokeWidth="3" />
      <circle cx="60" cy="12" r="6" fill="#F2C94C" stroke="#1F1B16" strokeWidth="2" />
      <circle cx="48" cy="24" r="3.5" fill="#F2C94C" stroke="#1F1B16" strokeWidth="1.5" />
      <circle cx="72" cy="24" r="3.5" fill="#F2C94C" stroke="#1F1B16" strokeWidth="1.5" />
      <circle cx="36" cy="40" r="3" fill="#F2C94C" stroke="#1F1B16" strokeWidth="1.5" />
      <circle cx="84" cy="40" r="3" fill="#F2C94C" stroke="#1F1B16" strokeWidth="1.5" />
    </svg>
  );
};
