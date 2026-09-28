import React from 'react';
import { motion } from 'framer-motion';
import { Habit } from '../../types';
import { getTodayString } from '../../utils/dateHelpers';
import { Tag } from '../ui/Tag';
import { CheckStampIcon, DropIcon, SparkleIcon, SpadeIcon } from '../icons/CustomIcons';
import { isHabitDrooping } from '../../utils/growthHelpers';

interface TodayPanelProps {
  habits: Habit[];
  onCheckIn: (habitId: string) => void;
  onPlantNew: () => void;
}

export const TodayPanel: React.FC<TodayPanelProps> = ({
  habits,
  onCheckIn,
  onPlantNew,
}) => {
  const today = getTodayString();
  const completedTodayCount = habits.filter((h) => h.completions.includes(today)).length;
  const totalHabits = habits.length;
  const allCompleted = totalHabits > 0 && completedTodayCount === totalHabits;

  return (
    <aside className="bg-paper border-2 border-ink rounded-xl p-5 sm:p-6 shadow-ink-lg flex flex-col h-full">
      {/* Panel Header */}
      <div className="pb-4 mb-4 border-b-2 border-ink">
        <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-1">
          <span>Today&apos;s Tending</span>
          <span className="text-moss font-bold font-mono">
            {completedTodayCount}/{totalHabits} Done
          </span>
        </div>
        <h3 className="font-serif text-2xl text-ink">Daily Protocol</h3>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-paper-tint border-2 border-ink rounded-full overflow-hidden mt-3 p-0.5">
          <div
            className="h-full bg-moss rounded-full transition-all duration-300"
            style={{ width: `${totalHabits > 0 ? (completedTodayCount / totalHabits) * 100 : 0}%` }}
          />
        </div>

        {allCompleted && (
          <div className="mt-3 px-3 py-1.5 rounded bg-butter border border-ink shadow-ink-sm flex items-center gap-2 text-xs font-mono font-bold text-ink">
            <SparkleIcon className="w-4 h-4 text-ink flex-shrink-0" />
            <span>DAILY SWEEP COMPLETE! +25 XP BONUS</span>
          </div>
        )}
      </div>

      {/* Habit Items List */}
      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        {habits.length === 0 ? (
          <div className="py-10 text-center space-y-3">
            <p className="font-serif text-lg text-ink">The soil is bare.</p>
            <p className="text-xs font-mono text-ink-muted">
              Nothing due. Go touch grass. Literally. Or plant your first seed below.
            </p>
            <button
              onClick={onPlantNew}
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 bg-tomato text-paper border-2 border-ink rounded shadow-ink-sm pressable"
            >
              <SpadeIcon className="w-3.5 h-3.5" /> Plant Habit
            </button>
          </div>
        ) : (
          habits.map((habit) => {
            const isCompleted = habit.completions.includes(today);
            const isDrooping = isHabitDrooping(habit);

            return (
              <div
                key={habit.id}
                className={`border-2 border-ink rounded-lg p-3 transition-all ${
                  isCompleted
                    ? 'bg-moss-tint/60 border-moss-dark shadow-ink-sm'
                    : isDrooping
                    ? 'bg-tomato-tint/50 border-tomato shadow-ink'
                    : 'bg-paper hover:bg-paper-tint shadow-ink'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag category={habit.category} rotation="none">
                        {habit.category}
                      </Tag>
                      <span className="text-[11px] font-mono text-ink-muted uppercase">
                        {habit.species}
                      </span>
                      {isDrooping && !isCompleted && (
                        <span className="text-[10px] font-mono font-bold text-tomato border border-tomato px-1 rounded bg-paper">
                          Sulking
                        </span>
                      )}
                    </div>

                    <h4
                      className={`font-serif text-base text-ink leading-snug ${
                        isCompleted ? 'line-through text-ink-muted opacity-80' : ''
                      }`}
                    >
                      {habit.name}
                    </h4>

                    <div className="text-[11px] font-mono text-ink-faint">
                      {isCompleted ? (
                        <span className="text-moss font-bold flex items-center gap-1">
                          <CheckStampIcon className="w-3 h-3" /> Tended today (+10 XP)
                        </span>
                      ) : isDrooping ? (
                        <span className="text-tomato font-bold">Needs water today</span>
                      ) : (
                        <span>{habit.completions.length} lifetime tendings</span>
                      )}
                    </div>
                  </div>

                  {/* Tactile Stamp Button with Framer Motion */}
                  <div className="flex-shrink-0 pt-0.5">
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 1.3, rotate: -4 }}
                        animate={{ scale: 1, rotate: -1 }}
                        transition={{ type: "spring", stiffness: 450, damping: 20 }}
                        className="px-2.5 py-1.5 rounded border-2 border-moss bg-moss-tint text-moss text-xs font-mono font-black tracking-wider flex items-center gap-1 shadow-ink-sm select-none"
                      >
                        <CheckStampIcon className="w-3.5 h-3.5" />
                        <span>TENDED</span>
                      </motion.div>
                    ) : (
                      <button
                        onClick={() => onCheckIn(habit.id)}
                        aria-label={`Mark ${habit.name} as tended for today`}
                        className="group/btn relative px-3 py-1.5 rounded border-2 border-ink bg-paper hover:bg-butter text-ink text-xs font-mono font-bold tracking-wider shadow-ink-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5 pressable"
                      >
                        <DropIcon className="w-3.5 h-3.5 text-moss group-hover/btn:scale-110 transition-transform" />
                        <span>TEND</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Panel Prompt */}
      <div className="pt-4 mt-3 border-t-2 border-ink/20 flex items-center justify-between">
        <span className="text-[11px] font-mono text-ink-faint">
          Forgiving soil &bull; Streak safe
        </span>
        <button
          onClick={onPlantNew}
          className="text-xs font-mono font-bold text-ink hover:text-tomato underline underline-offset-4 decoration-2"
        >
          + Add New Habit
        </button>
      </div>
    </aside>
  );
};
