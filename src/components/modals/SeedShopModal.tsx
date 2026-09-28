import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { PlantSpecies } from '../../types';
import { SPECIES_CATALOG } from '../../utils/speciesDefs';
import { PlantRenderer } from '../plants/PlantRenderer';
import { SeedIcon, CheckStampIcon } from '../icons/CustomIcons';

interface SeedShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  userSeeds: number;
  unlockedSpecies: PlantSpecies[];
  onUnlockSpecies: (species: PlantSpecies) => void;
}

export const SeedShopModal: React.FC<SeedShopModalProps> = ({
  isOpen,
  onClose,
  userSeeds,
  unlockedSpecies,
  onUnlockSpecies,
}) => {
  const speciesKeys: PlantSpecies[] = ['fern', 'tomato', 'sunflower', 'cactus', 'bonsai'];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="The Seed Merchant Rack" maxWidth="lg">
      <div className="space-y-6 text-ink">
        {/* Balance Ledger Bar */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-butter/40 border-2 border-ink shadow-ink-sm">
          <div>
            <div className="font-serif text-lg text-ink">Botanical Seed Reserve</div>
            <p className="text-xs font-mono text-ink-muted">
              Earn +3 Seeds each time your Gardener Rank levels up.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-paper px-3 py-1.5 rounded border-2 border-ink shadow-ink-sm">
            <SeedIcon className="w-5 h-5 text-butter" />
            <span className="font-mono text-xl font-black text-ink">{userSeeds}</span>
            <span className="font-mono text-xs uppercase text-ink-muted">Seeds</span>
          </div>
        </div>

        {/* Seed Packets Rack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {speciesKeys.map((species) => {
            const meta = SPECIES_CATALOG[species];
            const isUnlocked = unlockedSpecies.includes(species);
            const canAfford = userSeeds >= meta.seedCost;

            return (
              <div
                key={species}
                className={`p-4 rounded-lg border-2 border-ink flex flex-col justify-between gap-3 ${
                  isUnlocked ? 'bg-paper shadow-ink-sm' : 'bg-paper-tint/70 shadow-ink'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Mini Preview Artwork */}
                  <div className="w-14 h-14 rounded border border-ink bg-paper p-1 flex-shrink-0 flex items-center justify-center">
                    <PlantRenderer species={species} stage="bloom" className="w-full h-full" />
                  </div>

                  <div>
                    <h4 className="font-serif text-base font-bold text-ink leading-tight">
                      {meta.commonName}
                    </h4>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-paper-tint border border-ink/40">
                      {meta.difficulty} Care
                    </span>
                  </div>
                </div>

                <p className="text-xs font-mono text-ink-muted line-clamp-2">{meta.tagline}</p>

                <div className="pt-2 border-t border-ink/20 flex items-center justify-between">
                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-moss">
                      <CheckStampIcon className="w-4 h-4" /> In Seed Sack
                    </span>
                  ) : (
                    <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                      <SeedIcon className="w-3.5 h-3.5 text-butter" /> Cost: {meta.seedCost} Seeds
                    </span>
                  )}

                  {!isUnlocked && (
                    <Button
                      variant={canAfford ? 'primary' : 'secondary'}
                      size="sm"
                      disabled={!canAfford}
                      onClick={() => onUnlockSpecies(species)}
                    >
                      {canAfford ? 'Unlock Packet' : `Need ${meta.seedCost - userSeeds} more`}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
