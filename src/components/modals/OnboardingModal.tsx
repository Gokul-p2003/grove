import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Category, PlantSpecies } from '../../types';
import { PlantRenderer } from '../plants/PlantRenderer';
import { SpadeIcon, CheckStampIcon, SeedIcon } from '../icons/CustomIcons';

interface OnboardingModalProps {
  isOpen: boolean;
  onComplete: (starterHabit: { name: string; category: Category; species: PlantSpecies }) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onComplete }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [habitName, setHabitName] = useState('Morning Hydration & Sunlight');
  const [category, setCategory] = useState<Category>('Body');
  const [species, setSpecies] = useState<PlantSpecies>('fern');

  const habitPresets = [
    { name: 'Drink 2 Glasses of Water', cat: 'Body' as Category },
    { name: '10 Mins Mindful Breathing', cat: 'Mind' as Category },
    { name: 'Read 1 Chapter of a Book', cat: 'Craft' as Category },
    { name: 'Clear Kitchen Counters', cat: 'Home' as Category },
  ];

  const handleFinish = () => {
    onComplete({
      name: habitName.trim() || 'First Garden Habit',
      category,
      species,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}} title="Welcome to Grove" maxWidth="md">
      <div className="space-y-6 text-ink">
        {/* Step Indicator */}
        <div className="flex items-center justify-between text-xs font-mono font-bold border-b border-ink/20 pb-3">
          <span className="text-moss">STEP {step} OF 3</span>
          <span className="text-ink-muted">
            {step === 1 ? 'Select a Habit' : step === 2 ? 'Choose First Plant' : 'Plant into Earth'}
          </span>
        </div>

        {/* STEP 1: Select Habit */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-ink">What intention would you like to grow?</h4>
              <p className="text-xs font-mono text-ink-muted mt-1">
                Start modest. Every habit becomes a living botanical specimen in your garden.
              </p>
            </div>

            <div className="space-y-2">
              {habitPresets.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => {
                    setHabitName(preset.name);
                    setCategory(preset.cat);
                  }}
                  className={`w-full p-3 rounded-lg border-2 border-ink text-left font-mono text-xs font-bold transition-all pressable flex items-center justify-between ${
                    habitName === preset.name ? 'bg-butter shadow-ink-sm' : 'bg-paper hover:bg-paper-tint'
                  }`}
                >
                  <span>{preset.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded border border-ink bg-paper uppercase">
                    {preset.cat}
                  </span>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-[11px] font-mono text-ink-muted uppercase mb-1">
                Or write your own custom habit:
              </label>
              <input
                type="text"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                placeholder="Custom habit..."
                className="w-full px-3 py-2 bg-paper border-2 border-ink rounded font-sans text-sm shadow-ink-sm focus:outline-none"
              />
            </div>

            <div className="flex justify-end pt-3">
              <Button
                variant="primary"
                disabled={!habitName.trim()}
                onClick={() => setStep(2)}
              >
                Next: Pick Plant &rarr;
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: Choose Starter Plant */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-ink">Choose your starter companion</h4>
              <p className="text-xs font-mono text-ink-muted mt-1">
                Both species are very forgiving of beginner caretakers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Fern */}
              <div
                onClick={() => setSpecies('fern')}
                className={`p-4 rounded-lg border-2 border-ink cursor-pointer pressable flex flex-col items-center text-center gap-2 ${
                  species === 'fern' ? 'bg-moss-tint border-moss-dark shadow-ink' : 'bg-paper'
                }`}
              >
                <div className="w-20 h-20">
                  <PlantRenderer species="fern" stage="sprout" />
                </div>
                <div className="font-serif text-base font-bold text-ink">Bracken Fern</div>
                <p className="text-[11px] font-mono text-ink-muted">
                  Thrives on quiet consistency. Loves cool mist.
                </p>
              </div>

              {/* Tomato */}
              <div
                onClick={() => setSpecies('tomato')}
                className={`p-4 rounded-lg border-2 border-ink cursor-pointer pressable flex flex-col items-center text-center gap-2 ${
                  species === 'tomato' ? 'bg-tomato-tint border-tomato shadow-ink' : 'bg-paper'
                }`}
              >
                <div className="w-20 h-20">
                  <PlantRenderer species="tomato" stage="sprout" />
                </div>
                <div className="font-serif text-base font-bold text-ink">Heritage Tomato</div>
                <p className="text-[11px] font-mono text-ink-muted">
                  Sturdy sun-lover that produces red heirloom orbs.
                </p>
              </div>
            </div>

            <div className="flex justify-between pt-3">
              <Button variant="secondary" onClick={() => setStep(1)}>
                &larr; Back
              </Button>
              <Button variant="primary" onClick={() => setStep(3)}>
                Plant in Plot 01 &rarr;
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Ready to Plant */}
        {step === 3 && (
          <div className="space-y-5 text-center py-2">
            <div className="w-28 h-28 mx-auto p-2 rounded-xl bg-paper-tint border-2 border-ink shadow-ink flex items-center justify-center">
              <PlantRenderer species={species} stage="seed" />
            </div>

            <div>
              <h4 className="font-serif text-2xl text-ink">Ready for Seedtime</h4>
              <p className="text-xs font-mono text-ink-muted mt-1 max-w-sm mx-auto">
                &ldquo;{habitName}&rdquo; will be planted as a seed in Plot 1. Every time you tend it, it advances towards full harvest.
              </p>
            </div>

            <div className="p-3 bg-butter/30 border-2 border-ink rounded-lg text-xs font-mono text-left space-y-1">
              <div className="font-bold text-ink flex items-center gap-1.5">
                <CheckStampIcon className="w-4 h-4 text-moss" /> 0 Guilt Policy:
              </div>
              <p className="text-ink-muted">
                If you miss a day, your plant will sulk gently, but your lifetime growth is never erased.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleFinish}
              className="w-full"
              icon={<SpadeIcon className="w-5 h-5 text-paper" />}
            >
              Enter The Grove
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};
