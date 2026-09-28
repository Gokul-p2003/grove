export type Category = 'Body' | 'Mind' | 'Craft' | 'Home';

export type Frequency =
  | { type: 'daily' }
  | { type: 'weekly'; timesPerWeek: number };

export type PlantSpecies = 'fern' | 'tomato' | 'sunflower' | 'cactus' | 'bonsai';

export type GrowthStage = 'seed' | 'sprout' | 'sapling' | 'bloom' | 'full';

export interface Habit {
  id: string;
  name: string;
  category: Category;
  frequency: Frequency;
  species: PlantSpecies;
  createdAt: string; // ISO date string
  completions: string[]; // array of ISO date strings 'YYYY-MM-DD'
  rainChecksUsed: number;
  plotIndex: number; // 0 to 11 on the garden grid
}

export interface Profile {
  xp: number;
  level: number;
  seeds: number;
  unlockedSpecies: PlantSpecies[];
  achievements: string[]; // unlocked achievement IDs
  rainChecksAvailable: number; // 2 per month
  lastRainCheckMonth: string; // 'YYYY-MM'
  hasCompletedOnboarding: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  secretHint?: string;
  category: 'growth' | 'streak' | 'botany' | 'special';
  badgeStyle: 'circle' | 'stamp' | 'ribbon' | 'oval';
  rotationDeg: number;
}

export interface PlantSpeciesMeta {
  species: PlantSpecies;
  commonName: string;
  tagline: string;
  seedCost: number;
  defaultCategory: Category;
  difficulty: 'Easy' | 'Moderate' | 'Specialist';
}
