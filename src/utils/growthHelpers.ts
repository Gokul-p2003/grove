import { GrowthStage, Habit } from '../types';
import { getTodayString, getYesterdayString } from './dateHelpers';

export const getGrowthStage = (completionsCount: number): GrowthStage => {
  if (completionsCount <= 0) return 'seed';
  if (completionsCount <= 2) return 'sprout';
  if (completionsCount <= 6) return 'sapling';
  if (completionsCount <= 13) return 'bloom';
  return 'full';
};

export const getStageName = (stage: GrowthStage): string => {
  const names: Record<GrowthStage, string> = {
    seed: 'Dormant Seed',
    sprout: 'Tender Sprout',
    sapling: 'Sturdy Sapling',
    bloom: 'In Bloom',
    full: 'Full Harvest',
  };
  return names[stage];
};

export const getCompletionsNeededForNextStage = (completionsCount: number): number => {
  if (completionsCount <= 0) return 1;
  if (completionsCount <= 2) return 3 - completionsCount;
  if (completionsCount <= 6) return 7 - completionsCount;
  if (completionsCount <= 13) return 14 - completionsCount;
  return 0; // Max stage
};

/**
 * Checks if a habit is drooping (forgiving sulk state).
 * Missing yesterday makes it sulk, unless today was checked in.
 */
export const isHabitDrooping = (habit: Habit): boolean => {
  const today = getTodayString();
  const yesterday = getYesterdayString();

  // If already checked in today, it's not drooping
  if (habit.completions.includes(today)) {
    return false;
  }

  // If created today, it hasn't had a chance to miss yesterday
  if (habit.createdAt.startsWith(today)) {
    return false;
  }

  // If yesterday was NOT completed, plant is sulking
  return !habit.completions.includes(yesterday);
};

export const getPlantStatusMessage = (habit: Habit): string => {
  const today = getTodayString();
  const isCompletedToday = habit.completions.includes(today);
  const isDrooping = isHabitDrooping(habit);

  if (isCompletedToday) {
    return "Tended today. Soaking up the afternoon sun.";
  }
  if (isDrooping) {
    return `Your ${habit.species} is sulking. Water it?`;
  }
  return "Ready for today's tending.";
};

/**
 * Level curve: XP needed = 100 * (level ^ 1.4)
 */
export const getXpThresholdForLevel = (level: number): number => {
  return Math.floor(100 * Math.pow(level, 1.4));
};

export const getGardenerRank = (level: number): { title: string; subtitle: string } => {
  if (level >= 10) return { title: 'Grove Keeper', subtitle: 'Master of Ancient Earth' };
  if (level >= 7) return { title: 'Groundskeeper', subtitle: 'Caretaker of Lush Canopies' };
  if (level >= 4) return { title: 'Green Thumb', subtitle: 'Cultivator of Vigorous Shoots' };
  if (level >= 2) return { title: 'Sprout Tender', subtitle: 'Watcher of Morning Dew' };
  return { title: 'Seedling', subtitle: 'Novice Planter of Seeds' };
};
