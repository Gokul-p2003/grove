import React from 'react';
import { GrowthStage } from '../../types';

interface PlantSvgProps {
  stage: GrowthStage;
  isDrooping?: boolean;
  className?: string;
}

export const TomatoSvg: React.FC<PlantSvgProps> = ({ stage, isDrooping = false, className = "w-full h-full" }) => {
  // Drooping Sulk State
  if (isDrooping) {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Wooden stake */}
        <line x1="52" y1="40" x2="52" y2="98" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
        {/* Limp vine draped over */}
        <path d="M52 96 C50 78 48 55 58 48 C68 42 78 50 82 72 C84 84 82 92 84 94" fill="none" stroke="#1F1B16" strokeWidth="2.8" strokeLinecap="round" />
        {/* Drooping leaves */}
        <path d="M60 54 C54 62 48 68 46 76" stroke="#1F1B16" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="45" cy="78" rx="4" ry="7" fill="#524B42" stroke="#1F1B16" strokeWidth="1.8" />
        <path d="M78 68 C84 76 86 82 90 88" stroke="#1F1B16" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="90" cy="89" rx="4" ry="6" fill="#524B42" stroke="#1F1B16" strokeWidth="1.8" />
        {/* Drooping single pale fruit */}
        <circle cx="82" cy="74" r="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
      </svg>
    );
  }

  // Seed
  if (stage === 'seed') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        <circle cx="60" cy="94" r="5" fill="#1F1B16" />
        <line x1="58" y1="94" x2="62" y2="94" stroke="#F4EEE0" strokeWidth="1.5" />
        {/* Little furrow stick label */}
        <line x1="45" y1="88" x2="45" y2="98" stroke="#1F1B16" strokeWidth="2" />
        <rect x="38" y="80" width="14" height="8" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="1.5" />
      </svg>
    );
  }

  // Sprout
  if (stage === 'sprout') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        <path d="M60 96 L60 68" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
        {/* Two Cotyledon Leaves */}
        <path d="M60 68 C52 64 42 66 44 74 C48 78 58 74 60 68 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M60 68 C68 64 78 66 76 74 C72 78 62 74 60 68 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        {/* Emerging center notch */}
        <circle cx="60" cy="65" r="2.5" fill="#5B8C54" stroke="#1F1B16" strokeWidth="1.5" />
      </svg>
    );
  }

  // Sapling (With Bamboo Stake)
  if (stage === 'sapling') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="36" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="28" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Wooden Stake */}
        <line x1="52" y1="35" x2="52" y2="98" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
        {/* Vine twisting up */}
        <path d="M60 96 C62 82 50 72 58 58 C64 48 54 42 56 36" fill="none" stroke="#1F1B16" strokeWidth="2.8" strokeLinecap="round" />
        {/* Serrated Leaves */}
        <path d="M54 75 C44 72 38 80 44 86 C50 86 54 80 54 75 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M58 58 C68 54 74 62 68 68 C62 68 58 62 58 58 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M55 45 C46 40 42 48 48 52 C52 52 54 48 55 45 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />
        {/* String Tie */}
        <ellipse cx="54" cy="58" rx="4" ry="2" fill="none" stroke="#F2C94C" strokeWidth="2" />
      </svg>
    );
  }

  // Bloom (Yellow Flowers + Green Marble)
  if (stage === 'bloom') {
    return (
      <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="100" rx="38" ry="10" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="60" cy="98" rx="30" ry="7" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
        {/* Bamboo Stake */}
        <line x1="50" y1="24" x2="50" y2="98" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
        {/* Vine */}
        <path d="M60 96 C64 80 48 68 58 48 C64 36 52 28 54 22" fill="none" stroke="#1F1B16" strokeWidth="2.8" strokeLinecap="round" />
        {/* Leaves */}
        <path d="M52 78 C38 72 34 82 42 88 C48 88 52 82 52 78 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M60 52 C74 48 80 58 72 64 C64 64 60 56 60 52 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
        <path d="M55 36 C42 30 38 40 46 44 C52 44 54 38 55 36 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />
        {/* Yellow Star Blossom */}
        <polygon points="68,36 71,40 76,40 72,43 74,48 70,45 66,48 68,43 64,40 69,40" fill="#F2C94C" stroke="#1F1B16" strokeWidth="1.5" />
        {/* Unripe Green Tomato */}
        <circle cx="68" cy="62" r="7" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />
        <path d="M68 55 L68 58 M65 56 L68 58 L71 56" stroke="#1F1B16" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Full Stage (Ripe Heirloom Tomato Bountiful Harvest)
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="100" rx="40" ry="11" fill="#EDE5D3" stroke="#1F1B16" strokeWidth="2.5" />
      <ellipse cx="60" cy="98" rx="32" ry="7.5" fill="#C97A56" stroke="#1F1B16" strokeWidth="2" />
      {/* Heavy Timber Stake */}
      <line x1="48" y1="16" x2="48" y2="98" stroke="#1F1B16" strokeWidth="3.5" strokeLinecap="round" />
      {/* Rich Twisting Vine */}
      <path d="M58 96 C64 78 46 64 56 42 C64 28 50 18 52 14" fill="none" stroke="#1F1B16" strokeWidth="3" strokeLinecap="round" />
      {/* Heavy Foliage */}
      <path d="M52 82 C34 76 30 88 40 94 C48 94 52 86 52 82 Z" fill="#2E502A" stroke="#1F1B16" strokeWidth="2" />
      <path d="M62 48 C78 42 86 54 78 62 C68 62 62 54 62 48 Z" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="2" />
      <path d="M54 30 C38 24 34 36 44 42 C52 42 54 34 54 30 Z" fill="#5B8C54" stroke="#1F1B16" strokeWidth="2" />
      
      {/* Ripe Tomato #1 (Large Heirloom Red) */}
      <g>
        <circle cx="70" cy="74" r="12" fill="#E4572E" stroke="#1F1B16" strokeWidth="2.5" />
        <ellipse cx="66" cy="70" rx="3" ry="1.5" fill="#F4EEE0" opacity="0.6" />
        {/* Calyx Star */}
        <polygon points="70,62 72,65 75,64 73,67 76,69 72,69 70,72 68,69 64,69 67,67 65,64 68,65" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="1.5" />
      </g>

      {/* Ripe Tomato #2 (Mid-size Vine Red) */}
      <g>
        <circle cx="36" cy="58" r="9.5" fill="#E4572E" stroke="#1F1B16" strokeWidth="2.2" />
        <polygon points="36,48 38,51 41,50 39,53 41,55 38,55 36,57 34,55 31,55 33,53 31,50 34,51" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="1.2" />
      </g>

      {/* Ripe Tomato #3 (Small Cluster Gold-Orange) */}
      <g>
        <circle cx="78" cy="45" r="7.5" fill="#F2C94C" stroke="#1F1B16" strokeWidth="2" />
        <polygon points="78,38 79,40 81,40 80,42 81,44 79,43 78,45 77,43 75,44 76,42 75,40 77,40" fill="#3F6B3A" stroke="#1F1B16" strokeWidth="1" />
      </g>
    </svg>
  );
};
