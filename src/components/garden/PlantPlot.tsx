import React from 'react';
import { Habit } from '../../types';
import { PlantRenderer } from '../plants/PlantRenderer';
import { getGrowthStage, getStageName, isHabitDrooping } from '../../utils/growthHelpers';
import { Tag } from '../ui/Tag';
import { PlusIcon } from '../icons/CustomIcons';

interface PlantPlotProps {
  plotIndex: number;
  habit?: Habit;
  onSelectHabit: (habitId: string) => void;
  onPlantNew: () => void;
}

export const PlantPlot: React.FC<PlantPlotProps> = ({
  plotIndex,
  habit,
  onSelectHabit,
  onPlantNew,
}) => {
  if (!habit) {
    return (
      <div
        onClick={onPlantNew}
        className="group relative aspect-square rounded-lg border-2 border-dashed border-ink/40 bg-paper-tint/50 hover:bg-paper-tint hover:border-ink transition-all flex flex-col items-center justify-center p-4 cursor-pointer pressable"
        role="button"
        tabIndex={0}
        aria-label={`Empty garden plot ${plotIndex + 1}. Click to plant a new habit.`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onPlantNew();
        }}
      >
        {/* Subtle soil plot ellipse */}
        <div className="w-16 h-8 rounded-full border border-ink/30 bg-clay-tint/50 mb-2 flex items-center justify-center">
          <PlusIcon className="w-4 h-4 text-ink/40 group-hover:text-ink transition-colors" />
        </div>
        <span className="font-mono text-xs font-bold text-ink-muted group-hover:text-ink uppercase tracking-wider text-center">
          Plot {plotIndex + 1}
        </span>
        <span className="text-[10px] font-sans text-ink-faint">Plant seed</span>
      </div>
    );
  }

  const stage = getGrowthStage(habit.completions.length);
  const stageName = getStageName(stage);
  const isDrooping = isHabitDrooping(habit);

  return (
    <div
      onClick={() => onSelectHabit(habit.id)}
      className="group relative aspect-square rounded-lg border-2 border-ink bg-paper p-3 shadow-ink hover:shadow-ink-lg transition-all flex flex-col items-center justify-between cursor-pointer pressable select-none"
      role="button"
      tabIndex={0}
      aria-label={`${habit.name}, a ${habit.species} at ${stageName} stage${isDrooping ? ', currently sulking' : ''}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelectHabit(habit.id);
      }}
    >
      {/* Top Header Row with Category Tag & Status */}
      <div className="w-full flex items-center justify-between gap-1 z-10">
        <Tag category={habit.category} rotation={plotIndex % 2 === 0 ? 'left' : 'right'}>
          {habit.category}
        </Tag>
        {isDrooping && (
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-tomato text-paper border border-ink shadow-ink-sm -rotate-2">
            Sulking
          </span>
        )}
      </div>

      {/* Center Plant Artwork */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center my-auto transition-transform group-hover:scale-105">
        <PlantRenderer species={habit.species} stage={stage} isDrooping={isDrooping} />
      </div>

      {/* Bottom Title & Stage Chip */}
      <div className="w-full text-center z-10 pt-1 border-t border-ink/20">
        <div className="font-serif text-sm text-ink truncate font-normal" title={habit.name}>
          {habit.name}
        </div>
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-ink-muted">
          <span className="text-moss font-bold font-mono">{habit.completions.length} tends</span>
          <span>&bull;</span>
          <span className="capitalize">{stage}</span>
        </div>
      </div>
    </div>
  );
};
