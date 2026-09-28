# Grove // Illustrated Gamified Habit Garden

> **Grove** is an illustrated, warm, and forgiving habit tracker web app built with React, TypeScript, Tailwind CSS, Zustand, and Framer Motion. Each habit is a living plant in your personal botanical sanctuary. Missing a day makes a plant sulk—it never wipes out your hard-earned growth.

---

## Key Features

- **Botanical Garden Grid**: Habit plants sit on interactive soil plots. Clicking any plot opens its history heatmap, growth telemetry, and forgiving rain checks.
- **30 Custom SVG Plant Illustrations**: 5 botanical species (`Fern`, `Tomato`, `Sunflower`, `Cactus`, `Bonsai`) each drawn across 5 growth stages (`Seed`, `Sprout`, `Sapling`, `Bloom`, `Full`) plus a dedicated `Drooping` (sulking) state. **Zero icon libraries, zero component libraries.**
- **Forgiving Streaks & Rain Checks**: 2 rain checks per month protect drooping plants from guilt. Growth stage is tied to total lifetime care, not fragile consecutive streaks.
- **Gardener XP & Rank Progression**:
  - `+10 XP` per completion
  - `+25 XP` Daily Sweep bonus for finishing all due habits in a day
  - Level curve: `100 * level^1.4`
  - Gardener ranks: *Seedling*, *Sprout Tender*, *Green Thumb*, *Groundskeeper*, *Grove Keeper*.
  - Full-width Level Up celebration ribbon banner with +3 seeds drop.
- **Botanical Seed Shop**: Spend seeds earned from level-ups to unlock new species (Sunflower, Cactus, Bonsai).
- **12 Achievement Badges (Sticker Book)**: Editorial risograph stickers with micro-rotations and secret hint riddles.
- **Sunday Weekly Review**: Receipt-styled tear sheet summarizing weekly consistency with dry, warm caretaker microcopy.
- **3-Step First-Run Onboarding**: Pick an intention, choose a companion, and watch it planted into Plot 1.
- **Instant Demo Seeder**: Click *"Seed Demo Garden"* in the footer to instantly populate a thriving garden with Level 3 stats, sulking tomato, blooming fern, and unlocked badges.

---

## Design System & Risograph Style Tokens

- **Paper Canvas**: `#F4EEE0`
- **Thick Ink Line**: `#1F1B16` (2px borders, 4px 4px 0 hard offset shadows)
- **Foliage Green (Moss)**: `#3F6B3A`
- **Terracotta (Tomato)**: `#E4572E`
- **Golden Sunflower (Butter)**: `#F2C94C`
- **Earthen Pots (Clay)**: `#C97A56`
- **Typography**: Young Serif (Headings), IBM Plex Mono (Telemetry & XP), Familjen Grotesk (Body)
- **Texture**: Subtle SVG noise grain overlay (`feTurbulence`)

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your web browser.
