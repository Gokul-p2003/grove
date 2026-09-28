import React from 'react';
import { Habit } from '../../types';
import { PlantPlot } from './PlantPlot';
import { Button } from '../ui/Button';
import { PlusIcon, SunIcon, SpadeIcon } from '../icons/CustomIcons';

interface GardenCanvasProps {
  habits: Habit[];
  onSelectHabit: (id: string) => void;
  onPlantNew: () => void;
}

export const GardenCanvas: React.FC<GardenCanvasProps> = ({
  habits,
  onSelectHabit,
  onPlantNew,
}) => {
  // Ensure at least 6 plots are visible on the grid for pleasant botanical symmetry
  const totalPlots = Math.max(6, Math.ceil((habits.length + 1) / 2) * 2);
  const plotIndices = Array.from({ length: totalPlots }, (_, i) => i);

  // Map habits by their assigned plotIndex
  const habitByPlot = new Map<number, Habit>();
  habits.forEach((h, index) => {
    const pIndex = h.plotIndex !== undefined ? h.plotIndex : index;
    habitByPlot.set(pIndex, h);
  });

  return (
    <section className="bg-paper border-2 border-ink rounded-xl p-5 sm:p-7 shadow-ink-lg relative overflow-hidden">
      {/* Decorative Woodblock Sky/Garden Landscape Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b-2 border-ink gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-butter text-ink border border-ink shadow-ink-sm rotate-2">
              <SunIcon className="w-4 h-4" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-muted">
              Botanical Sanctuary &bull; Sector 01
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink mt-1">The Grove Garden</h2>
          <p className="text-xs sm:text-sm text-ink-muted mt-0.5">
            Click any plot to inspect growth history, rain check protection, or tend soil.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={onPlantNew}
          icon={<SpadeIcon className="w-4 h-4 text-paper" />}
        >
          Plant Habit
        </Button>
      </div>

      {/* Garden Plots Grid (Responsive 2-col to 3-col) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {plotIndices.map((idx) => (
          <PlantPlot
            key={idx}
            plotIndex={idx}
            habit={habitByPlot.get(idx)}
            onSelectHabit={onSelectHabit}
            onPlantNew={onPlantNew}
          />
        ))}
      </div>

      {/* Decorative Garden Footing with Cobblestone Path */}
      <div className="mt-8 pt-4 border-t-2 border-dashed border-ink/30 flex items-center justify-between text-xs font-mono text-ink-faint">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-moss border border-ink inline-block" />
          <span>Active Plants: {habits.length}</span>
        </div>
        <div>
          <span>Dry, Forgiving Soil &bull; 0 Guilt Policy</span>
        </div>
      </div>
    </section>
  );
};
