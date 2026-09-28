import React from 'react';
import { Profile } from '../../types';
import { getGardenerRank, getXpThresholdForLevel } from '../../utils/growthHelpers';
import { SeedIcon, RibbonIcon, CalendarIcon, ShopIcon, StarIcon } from '../icons/CustomIcons';

interface TopBarProps {
  profile: Profile;
  onOpenModal: (modal: 'stickers' | 'seed-shop' | 'weekly-review' | 'add-habit') => void;
}

export const TopBar: React.FC<TopBarProps> = ({ profile, onOpenModal }) => {
  const rank = getGardenerRank(profile.level);
  const neededXp = getXpThresholdForLevel(profile.level);
  const prevLevelThreshold = profile.level > 1 ? getXpThresholdForLevel(profile.level - 1) : 0;
  
  // Progress within current level bracket
  const xpInTier = Math.max(0, profile.xp - prevLevelThreshold);
  const tierTarget = Math.max(1, neededXp - prevLevelThreshold);
  const progressPercent = Math.min(Math.round((xpInTier / tierTarget) * 100), 100);

  return (
    <header className="bg-paper border-2 border-ink rounded-xl p-4 sm:p-5 shadow-ink-lg mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Brand & Gardener Rank */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-butter border-2 border-ink flex items-center justify-center shadow-ink-sm flex-shrink-0 -rotate-2">
            <span className="font-serif text-2xl text-ink font-bold leading-none">G</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-2xl sm:text-3xl text-ink tracking-tight leading-none">
                Grove
              </h1>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-moss-tint text-moss border border-moss font-bold uppercase">
                {rank.title}
              </span>
            </div>
            <p className="text-xs font-mono text-ink-muted mt-1">
              Rank Lvl {profile.level} &bull; {rank.subtitle}
            </p>
          </div>
        </div>

        {/* Center: XP Progress Bar */}
        <div className="flex-1 max-w-md space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono font-bold">
            <span className="text-ink flex items-center gap-1">
              <StarIcon className="w-3.5 h-3.5 text-butter" />
              <span>{profile.xp} TOTAL XP</span>
            </span>
            <span className="text-ink-muted">
              {profile.xp} / {neededXp} XP ({progressPercent}%)
            </span>
          </div>

          <div className="h-3 bg-paper-tint border-2 border-ink rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-butter rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Right: Seeds Balance & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Seeds Pill */}
          <button
            onClick={() => onOpenModal('seed-shop')}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-paper hover:bg-butter/50 border-2 border-ink rounded font-mono text-xs font-bold text-ink shadow-ink-sm pressable"
            title="Open Seed Shop"
          >
            <SeedIcon className="w-4 h-4 text-butter" />
            <span>{profile.seeds} Seeds</span>
          </button>

          {/* Stickers */}
          <button
            onClick={() => onOpenModal('stickers')}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-paper hover:bg-paper-tint border-2 border-ink rounded font-mono text-xs font-bold text-ink shadow-ink-sm pressable"
            title="View Achievements"
          >
            <RibbonIcon className="w-4 h-4 text-tomato" />
            <span className="hidden sm:inline">Stickers</span>
          </button>

          {/* Weekly Review */}
          <button
            onClick={() => onOpenModal('weekly-review')}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-paper hover:bg-paper-tint border-2 border-ink rounded font-mono text-xs font-bold text-ink shadow-ink-sm pressable"
            title="Weekly Review"
          >
            <CalendarIcon className="w-4 h-4 text-moss" />
            <span className="hidden sm:inline">Review</span>
          </button>
        </div>
      </div>
    </header>
  );
};
