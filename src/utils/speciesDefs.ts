import { PlantSpecies, PlantSpeciesMeta } from '../types';

export const SPECIES_CATALOG: Record<PlantSpecies, PlantSpeciesMeta> = {
  fern: {
    species: 'fern',
    commonName: 'Bracken Fern',
    tagline: 'Loves steady mist and shade. Forgiving of quiet days.',
    seedCost: 0, // Unlocked by default
    defaultCategory: 'Body',
    difficulty: 'Easy',
  },
  tomato: {
    species: 'tomato',
    commonName: 'Heritage Tomato',
    tagline: 'Thirsty, generous vine that yields bright scarlet globes.',
    seedCost: 0, // Unlocked by default
    defaultCategory: 'Craft',
    difficulty: 'Easy',
  },
  sunflower: {
    species: 'sunflower',
    commonName: 'Solar Sunflower',
    tagline: 'Towering golden rays that crane their necks to track the daylight.',
    seedCost: 5,
    defaultCategory: 'Mind',
    difficulty: 'Moderate',
  },
  cactus: {
    species: 'cactus',
    commonName: 'Prickly Saguaro',
    tagline: 'Armored desert monument with delicate midnight scarlet blooms.',
    seedCost: 8,
    defaultCategory: 'Home',
    difficulty: 'Moderate',
  },
  bonsai: {
    species: 'bonsai',
    commonName: 'Cloud Juniper Bonsai',
    tagline: 'Ancient dwarfed cedar trained in a shallow earthenware basin.',
    seedCost: 12,
    defaultCategory: 'Mind',
    difficulty: 'Specialist',
  },
};
