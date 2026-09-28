import React from 'react';
import { SparkleIcon, TrashIcon } from '../icons/CustomIcons';

interface GardenFooterProps {
  onSeedDemoData: () => void;
  onResetAllData: () => void;
}

export const GardenFooter: React.FC<GardenFooterProps> = ({
  onSeedDemoData,
  onResetAllData,
}) => {
  return (
    <footer className="mt-12 pt-6 pb-8 border-t-2 border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
      <div>
        <span className="font-bold text-ink">GROVE // BOTANICAL HABIT LEDGER</span>
        <span className="mx-2">&bull;</span>
        <span>100% Inline SVG Botanical Illustrations &bull; Risograph Aesthetic</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onSeedDemoData}
          className="px-2.5 py-1 rounded bg-butter border border-ink text-ink font-bold hover:bg-butter-light transition-all shadow-ink-sm pressable flex items-center gap-1"
          title="Seed demo garden with active streaks, sulking plant, and level 3 gardener"
        >
          <SparkleIcon className="w-3.5 h-3.5 text-ink" />
          <span>Seed Demo Garden</span>
        </button>

        <button
          onClick={onResetAllData}
          className="px-2.5 py-1 rounded bg-paper-tint border border-ink text-ink-muted hover:text-tomato transition-all flex items-center gap-1"
          title="Reset to fresh clean slate"
        >
          <TrashIcon className="w-3.5 h-3.5" />
          <span>Reset Soil</span>
        </button>
      </div>
    </footer>
  );
};
