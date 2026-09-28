import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Habit, Profile, PlantSpecies, Category, Frequency } from '../types';
import { getTodayString, getYesterdayString, getCurrentMonthString } from '../utils/dateHelpers';
import { getXpThresholdForLevel, getGardenerRank } from '../utils/growthHelpers';
import { SPECIES_CATALOG } from '../utils/speciesDefs';

interface LevelUpInfo {
  show: boolean;
  level: number;
  rankTitle: string;
}

interface GroveStore {
  habits: Habit[];
  profile: Profile;
  activeModal: 'none' | 'add-habit' | 'habit-detail' | 'stickers' | 'seed-shop' | 'weekly-review' | 'onboarding';
  selectedHabitId: string | null;
  levelUpBanner: LevelUpInfo | null;
  lastAwardedBonusDate: string | null;

  // Actions
  addHabit: (params: { name: string; category: Category; frequency: Frequency; species: PlantSpecies }) => void;
  updateHabit: (id: string, updates: Partial<Habit>) => void;
  deleteHabit: (id: string) => void;
  checkIn: (habitId: string, dateStr?: string) => void;
  useRainCheck: (habitId: string) => boolean;
  unlockSpecies: (species: PlantSpecies) => boolean;
  openModal: (modal: 'add-habit' | 'habit-detail' | 'stickers' | 'seed-shop' | 'weekly-review' | 'onboarding', habitId?: string) => void;
  closeModal: () => void;
  dismissLevelUp: () => void;
  completeOnboarding: (starterHabit?: { name: string; category: Category; species: PlantSpecies }) => void;
  seedDemoData: () => void;
  resetAllData: () => void;
}

const initialProfile: Profile = {
  xp: 0,
  level: 1,
  seeds: 4, // Starter pocket of seeds
  unlockedSpecies: ['fern', 'tomato'],
  achievements: [],
  rainChecksAvailable: 2,
  lastRainCheckMonth: getCurrentMonthString(),
  hasCompletedOnboarding: false,
};

const defaultStarterHabits: Habit[] = [
  {
    id: 'starter-fern-1',
    name: 'Morning Hydration & Stretch',
    category: 'Body',
    frequency: { type: 'daily' },
    species: 'fern',
    createdAt: new Date().toISOString(),
    completions: [],
    rainChecksUsed: 0,
    plotIndex: 0,
  },
];

export const useGroveStore = create<GroveStore>()(
  persist(
    (set, get) => ({
      habits: defaultStarterHabits,
      profile: initialProfile,
      activeModal: 'none',
      selectedHabitId: null,
      levelUpBanner: null,
      lastAwardedBonusDate: null,

      addHabit: ({ name, category, frequency, species }) => {
        const { habits, profile } = get();
        // Find next unoccupied plot index (0 to 11)
        const occupiedPlots = new Set(habits.map((h) => h.plotIndex));
        let nextPlot = 0;
        while (occupiedPlots.has(nextPlot) && nextPlot < 11) {
          nextPlot++;
        }

        const newHabit: Habit = {
          id: `habit-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          name,
          category,
          frequency,
          species,
          createdAt: new Date().toISOString(),
          completions: [],
          rainChecksUsed: 0,
          plotIndex: nextPlot,
        };

        const updatedHabits = [...habits, newHabit];

        // Check Grove Keeper badge (5 habits)
        const achievements = new Set(profile.achievements);
        if (updatedHabits.length >= 5) achievements.add('grove_keeper');

        // Check Botanist badge (3 distinct species)
        const uniqueSpecies = new Set(updatedHabits.map((h) => h.species));
        if (uniqueSpecies.size >= 3) achievements.add('botanist');

        set({
          habits: updatedHabits,
          profile: { ...profile, achievements: Array.from(achievements) },
          activeModal: 'none',
        });
      },

      updateHabit: (id, updates) => {
        set((state) => ({
          habits: state.habits.map((h) => (h.id === id ? { ...h, ...updates } : h)),
        }));
      },

      deleteHabit: (id) => {
        set((state) => ({
          habits: state.habits.filter((h) => h.id !== id),
          selectedHabitId: state.selectedHabitId === id ? null : state.selectedHabitId,
          activeModal: state.selectedHabitId === id ? 'none' : state.activeModal,
        }));
      },

      checkIn: (habitId, dateStr) => {
        const targetDate = dateStr || getTodayString();
        const { habits, profile, lastAwardedBonusDate } = get();
        const habit = habits.find((h) => h.id === habitId);
        if (!habit || habit.completions.includes(targetDate)) return;

        // Add completion
        const updatedCompletions = [...habit.completions, targetDate];
        const updatedHabit = { ...habit, completions: updatedCompletions };
        const updatedHabits = habits.map((h) => (h.id === habitId ? updatedHabit : h));

        // +10 XP per completion
        let earnedXp = 10;
        let newBonusDate = lastAwardedBonusDate;

        // Daily Sweep Bonus: Check if all active habits are now completed today
        const allCompletedToday = updatedHabits.every((h) => h.completions.includes(targetDate));
        if (allCompletedToday && updatedHabits.length > 0 && lastAwardedBonusDate !== targetDate) {
          earnedXp += 25; // +25 bonus for finishing all habits in a day
          newBonusDate = targetDate;
        }

        let newXp = profile.xp + earnedXp;
        let newLevel = profile.level;
        let newSeeds = profile.seeds;
        let newLevelUpBanner = get().levelUpBanner;

        // Check Level Up curve: XP needed = 100 * level^1.4
        const neededXp = getXpThresholdForLevel(newLevel);
        if (newXp >= neededXp) {
          newLevel += 1;
          newSeeds += 3; // +3 seeds rewarded on level up
          const rank = getGardenerRank(newLevel);
          newLevelUpBanner = {
            show: true,
            level: newLevel,
            rankTitle: rank.title,
          };
        }

        // Achievements check
        const achievements = new Set(profile.achievements);
        achievements.add('first_sprout');

        if (updatedCompletions.length >= 7) achievements.add('seven_in_bloom');
        if (updatedCompletions.length >= 14) achievements.add('full_canopy');
        if (newLevel >= 4) achievements.add('green_thumb');
        if (allCompletedToday) achievements.add('daily_sweep');

        // Category count achievements
        const categoryCompletions = (cat: Category) =>
          updatedHabits
            .filter((h) => h.category === cat)
            .reduce((sum, h) => sum + h.completions.length, 0);

        if (categoryCompletions('Body') >= 5) achievements.add('body_temple');
        if (categoryCompletions('Mind') >= 5) achievements.add('mind_gardener');
        if (categoryCompletions('Craft') >= 5) achievements.add('craft_artisan');
        if (categoryCompletions('Home') >= 5) achievements.add('hearth_tender');

        set({
          habits: updatedHabits,
          lastAwardedBonusDate: newBonusDate,
          profile: {
            ...profile,
            xp: newXp,
            level: newLevel,
            seeds: newSeeds,
            achievements: Array.from(achievements),
          },
          levelUpBanner: newLevelUpBanner,
        });
      },

      useRainCheck: (habitId) => {
        const { habits, profile } = get();
        const currentMonth = getCurrentMonthString();

        // Replenish 2 rain checks on new month rollover
        let available = profile.rainChecksAvailable;
        if (profile.lastRainCheckMonth !== currentMonth) {
          available = 2;
        }

        if (available <= 0) return false;

        const habit = habits.find((h) => h.id === habitId);
        if (!habit) return false;

        const yesterday = getYesterdayString();
        const updatedCompletions = habit.completions.includes(yesterday)
          ? habit.completions
          : [...habit.completions, yesterday];

        const updatedHabits = habits.map((h) =>
          h.id === habitId
            ? { ...h, completions: updatedCompletions, rainChecksUsed: h.rainChecksUsed + 1 }
            : h
        );

        const achievements = new Set(profile.achievements);
        achievements.add('rainy_day_save');

        set({
          habits: updatedHabits,
          profile: {
            ...profile,
            rainChecksAvailable: available - 1,
            lastRainCheckMonth: currentMonth,
            achievements: Array.from(achievements),
          },
        });

        return true;
      },

      unlockSpecies: (species) => {
        const { profile } = get();
        if (profile.unlockedSpecies.includes(species)) return true;

        const meta = SPECIES_CATALOG[species];
        if (!meta || profile.seeds < meta.seedCost) return false;

        const updatedUnlocked = [...profile.unlockedSpecies, species];
        const achievements = new Set(profile.achievements);
        if (updatedUnlocked.length >= 3) achievements.add('botanist');

        set({
          profile: {
            ...profile,
            seeds: profile.seeds - meta.seedCost,
            unlockedSpecies: updatedUnlocked,
            achievements: Array.from(achievements),
          },
        });

        return true;
      },

      openModal: (modal, habitId) => {
        set({
          activeModal: modal,
          selectedHabitId: habitId || (modal === 'add-habit' ? null : get().selectedHabitId),
        });
      },

      closeModal: () => {
        set({ activeModal: 'none' });
      },

      dismissLevelUp: () => {
        set({ levelUpBanner: null });
      },

      completeOnboarding: (starterHabit) => {
        const { habits, profile } = get();
        let newHabits = [...habits];

        if (starterHabit) {
          newHabits = [
            {
              id: `habit-${Date.now()}`,
              name: starterHabit.name,
              category: starterHabit.category,
              frequency: { type: 'daily' },
              species: starterHabit.species,
              createdAt: new Date().toISOString(),
              completions: [],
              rainChecksUsed: 0,
              plotIndex: 0,
            },
          ];
        }

        set({
          habits: newHabits,
          profile: { ...profile, hasCompletedOnboarding: true },
          activeModal: 'none',
        });
      },

      seedDemoData: () => {
        const today = getTodayString();
        const yesterday = getYesterdayString();

        // Rich demo state showcasing all mechanics:
        // 1. Full Sunflower
        // 2. Bloom Fern (checked in today)
        // 3. Sulking Tomato (missed yesterday)
        // 4. Sapling Bonsai
        // 5. Sprout Cactus
        const demoHabits: Habit[] = [
          {
            id: 'demo-sunflower',
            name: 'Daily 20m Morning Stroll',
            category: 'Body',
            frequency: { type: 'daily' },
            species: 'sunflower',
            createdAt: '2026-09-01T08:00:00Z',
            completions: [
              '2026-09-10', '2026-09-11', '2026-09-12', '2026-09-13', '2026-09-14',
              '2026-09-15', '2026-09-16', '2026-09-17', '2026-09-18', '2026-09-19',
              '2026-09-20', '2026-09-21', '2026-09-22', '2026-09-23', '2026-09-24',
              yesterday, today
            ],
            rainChecksUsed: 0,
            plotIndex: 0,
          },
          {
            id: 'demo-fern',
            name: 'Hydrate 2L Spring Water',
            category: 'Body',
            frequency: { type: 'daily' },
            species: 'fern',
            createdAt: '2026-09-15T09:00:00Z',
            completions: [
              '2026-09-18', '2026-09-19', '2026-09-20', '2026-09-21',
              '2026-09-22', yesterday, today
            ],
            rainChecksUsed: 0,
            plotIndex: 1,
          },
          {
            id: 'demo-tomato',
            name: 'Sketching in Notebook',
            category: 'Craft',
            frequency: { type: 'daily' },
            species: 'tomato',
            createdAt: '2026-09-10T10:00:00Z',
            completions: [
              '2026-09-15', '2026-09-16', '2026-09-17', '2026-09-20'
              // Note: missed yesterday and not checked today -> Will sulk/droop!
            ],
            rainChecksUsed: 0,
            plotIndex: 2,
          },
          {
            id: 'demo-bonsai',
            name: 'Evening Meditation (10m)',
            category: 'Mind',
            frequency: { type: 'daily' },
            species: 'bonsai',
            createdAt: '2026-09-20T11:00:00Z',
            completions: ['2026-09-21', '2026-09-22', yesterday],
            rainChecksUsed: 1,
            plotIndex: 3,
          },
          {
            id: 'demo-cactus',
            name: 'Wipe Desk & Clear Clutter',
            category: 'Home',
            frequency: { type: 'daily' },
            species: 'cactus',
            createdAt: '2026-09-25T12:00:00Z',
            completions: ['2026-09-26', yesterday],
            rainChecksUsed: 0,
            plotIndex: 4,
          },
        ];

        set({
          habits: demoHabits,
          profile: {
            xp: 380,
            level: 3,
            seeds: 8,
            unlockedSpecies: ['fern', 'tomato', 'sunflower', 'cactus', 'bonsai'],
            achievements: ['first_sprout', 'seven_in_bloom', 'botanist', 'rainy_day_save', 'body_temple'],
            rainChecksAvailable: 2,
            lastRainCheckMonth: getCurrentMonthString(),
            hasCompletedOnboarding: true,
          },
          levelUpBanner: null,
          activeModal: 'none',
        });
      },

      resetAllData: () => {
        set({
          habits: defaultStarterHabits,
          profile: initialProfile,
          activeModal: 'none',
          selectedHabitId: null,
          levelUpBanner: null,
        });
      },
    }),
    {
      name: 'grove_garden_storage_v1',
    }
  )
);
