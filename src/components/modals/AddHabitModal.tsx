import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Category, Frequency, PlantSpecies } from '../../types';
import { SPECIES_CATALOG } from '../../utils/speciesDefs';
import { SpadeIcon } from '../icons/CustomIcons';

interface AddHabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedSpecies: PlantSpecies[];
  onAddHabit: (params: {
    name: string;
    category: Category;
    frequency: Frequency;
    species: PlantSpecies;
  }) => void;
}

export const AddHabitModal: React.FC<AddHabitModalProps> = ({
  isOpen,
  onClose,
  unlockedSpecies,
  onAddHabit,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Category>('Body');
  const [species, setSpecies] = useState<PlantSpecies>(unlockedSpecies[0] || 'fern');
  const [frequencyType, setFrequencyType] = useState<'daily' | 'weekly'>('daily');
  const [timesPerWeek, setTimesPerWeek] = useState<number>(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddHabit({
      name: name.trim(),
      category,
      frequency: frequencyType === 'daily' ? { type: 'daily' } : { type: 'weekly', timesPerWeek },
      species,
    });

    setName('');
    onClose();
  };

  const categories: Category[] = ['Body', 'Mind', 'Craft', 'Home'];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Plant a New Habit">
      <form onSubmit={handleSubmit} className="space-y-5 text-ink">
        {/* Habit Name */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-1.5">
            Habit Name
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Read 20 pages, Hydrate 2L, Sketch..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-paper border-2 border-ink rounded font-sans text-sm placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-moss shadow-ink-sm"
          />
        </div>

        {/* Category Radio Pills */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-1.5">
            Category
          </label>
          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`py-2 px-1 text-center font-mono text-xs font-bold border-2 border-ink rounded transition-all pressable ${
                  category === cat
                    ? 'bg-ink text-paper shadow-ink-sm'
                    : 'bg-paper text-ink hover:bg-paper-tint'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Plant Species Selection */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-1.5">
            Choose Plant Species
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {unlockedSpecies.map((sp) => {
              const meta = SPECIES_CATALOG[sp];
              const isSelected = species === sp;
              return (
                <button
                  key={sp}
                  type="button"
                  onClick={() => setSpecies(sp)}
                  className={`p-2.5 text-left border-2 border-ink rounded transition-all pressable ${
                    isSelected
                      ? 'bg-butter text-ink shadow-ink-sm border-ink'
                      : 'bg-paper text-ink hover:bg-paper-tint'
                  }`}
                >
                  <div className="font-serif text-sm font-bold capitalize">{meta.commonName}</div>
                  <div className="text-[10px] font-mono text-ink-muted truncate">{meta.tagline}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Frequency */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-1.5">
            Frequency
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFrequencyType('daily')}
              className={`flex-1 py-2 font-mono text-xs font-bold border-2 border-ink rounded pressable ${
                frequencyType === 'daily'
                  ? 'bg-moss text-paper shadow-ink-sm'
                  : 'bg-paper text-ink hover:bg-paper-tint'
              }`}
            >
              Daily
            </button>
            <button
              type="button"
              onClick={() => setFrequencyType('weekly')}
              className={`flex-1 py-2 font-mono text-xs font-bold border-2 border-ink rounded pressable ${
                frequencyType === 'weekly'
                  ? 'bg-moss text-paper shadow-ink-sm'
                  : 'bg-paper text-ink hover:bg-paper-tint'
              }`}
            >
              X Times / Week
            </button>
          </div>

          {frequencyType === 'weekly' && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs font-mono text-ink-muted">Target:</span>
              {[2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setTimesPerWeek(num)}
                  className={`w-8 h-8 rounded border-2 border-ink font-mono text-xs font-bold ${
                    timesPerWeek === num ? 'bg-ink text-paper' : 'bg-paper text-ink'
                  }`}
                >
                  {num}
                </button>
              ))}
              <span className="text-xs font-mono text-ink-muted">days a week</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t-2 border-ink flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={!name.trim()}
            icon={<SpadeIcon className="w-4 h-4 text-paper" />}
          >
            Plant Seed
          </Button>
        </div>
      </form>
    </Modal>
  );
};
