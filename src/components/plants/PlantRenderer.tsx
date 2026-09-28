import React from 'react';
import { PlantSpecies, GrowthStage } from '../../types';
import { FernSvg } from './FernSvg';
import { TomatoSvg } from './TomatoSvg';
import { SunflowerSvg } from './SunflowerSvg';
import { CactusSvg } from './CactusSvg';
import { BonsaiSvg } from './BonsaiSvg';

interface PlantRendererProps {
  species: PlantSpecies;
  stage: GrowthStage;
  isDrooping?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const PlantRenderer: React.FC<PlantRendererProps> = ({
  species,
  stage,
  isDrooping = false,
  className = "w-full h-full",
  ariaLabel,
}) => {
  const label = ariaLabel || `${species} at ${stage} stage${isDrooping ? ' (drooping)' : ''}`;

  const renderSpecies = () => {
    switch (species) {
      case 'fern':
        return <FernSvg stage={stage} isDrooping={isDrooping} className={className} />;
      case 'tomato':
        return <TomatoSvg stage={stage} isDrooping={isDrooping} className={className} />;
      case 'sunflower':
        return <SunflowerSvg stage={stage} isDrooping={isDrooping} className={className} />;
      case 'cactus':
        return <CactusSvg stage={stage} isDrooping={isDrooping} className={className} />;
      case 'bonsai':
        return <BonsaiSvg stage={stage} isDrooping={isDrooping} className={className} />;
      default:
        return <FernSvg stage={stage} isDrooping={isDrooping} className={className} />;
    }
  };

  return (
    <div
      role="img"
      aria-label={label}
      className="relative flex items-center justify-center select-none"
    >
      {renderSpecies()}
    </div>
  );
};
