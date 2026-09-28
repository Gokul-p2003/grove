import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Habit } from '../../types';
import { PlantRenderer } from '../plants/PlantRenderer';
import {
  getGrowthStage,
  getStageName,
  getCompletionsNeededForNextStage,
  isHabitDrooping,
  getPlantStatusMessage,
} from '../../utils/growthHelpers';
import { getLast30DaysStrings, formatDateDisplay, formatShortDate } from '../../utils/dateHelpers';
import { Tag } from '../ui/Tag';
import { DropIcon, TrashIcon, CheckStampIcon } from '../icons/CustomIcons';

interface HabitDetailModalProps {
  habit: Habit | null;
  isOpen: boolean;
  onClose: () => void;
  rainChecksAvailable: number;
  onUseRainCheck: (habitId: string) => void;
  onDeleteHabit: (habitId: string) => void;
  onToggleCompleteToday: (habitId: string) => void;
}

export const HabitDetailModal: React.FC<HabitDetailModalProps> = ({
  habit,
  isOpen,
  onClose,
  rainChecksAvailable,
  onUseRainCheck,
  onDeleteHabit,
  onToggleCompleteToday,
}) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  if (!habit) return null;

  const stage = getGrowthStage(habit.completions.length);
  const stageName = getStageName(stage);
  const neededForNext = getCompletionsNeededForNextStage(habit.completions.length);
  const isDrooping = isHabitDrooping(habit);
  const statusMsg = getPlantStatusMessage(habit);
  const last30Days = getLast30DaysStrings();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={habit.name} maxWidth="lg">
      <div className="space-y-6 text-ink">
        {/* Plant Portrait & Status Banner */}
        <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-lg bg-paper-tint border-2 border-ink">
          {/* Large Plant Artwork */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-paper rounded-lg border-2 border-ink p-2 flex-shrink-0 shadow-ink-sm">
            <PlantRenderer species={habit.species} stage={stage} isDrooping={isDrooping} />
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <Tag category={habit.category}>{habit.category}</Tag>
              <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-paper border border-ink">
                Species: {habit.species}
              </span>
              <span className="font-mono text-xs font-bold text-moss uppercase px-2 py-0.5 rounded bg-moss-tint border border-moss">
                Stage: {stageName}
              </span>
            </div>

            <p className="font-serif text-lg text-ink italic">&ldquo;{statusMsg}&rdquo;</p>

            <div className="text-xs font-mono text-ink-muted">
              {neededForNext > 0 ? (
                <span>
                  <strong className="text-moss font-bold">{neededForNext} more tends</strong> to advance from {stage} to next stage.
                </span>
              ) : (
                <span className="text-moss font-bold">
                  ★ Full botanical canopy achieved! Magnificent harvest.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Sulking / Forgiving Rain Check Protection */}
        {isDrooping && (
          <div className="p-4 rounded-lg bg-tomato-tint border-2 border-tomato flex flex-col sm:flex-row items-center justify-between gap-3 shadow-ink-sm">
            <div>
              <div className="font-serif text-base font-bold text-tomato">
                Plant is sulking from yesterday
              </div>
              <p className="text-xs font-mono text-ink-muted">
                No progress was lost. You can water it today, or redeem a monthly rain check.
              </p>
            </div>

            <Button
              variant="butter"
              size="sm"
              disabled={rainChecksAvailable <= 0}
              onClick={() => onUseRainCheck(habit.id)}
              icon={<DropIcon className="w-3.5 h-3.5 text-ink" />}
            >
              Rain Check ({rainChecksAvailable} left)
            </Button>
          </div>
        )}

        {/* 30-Day Botanical History Heatmap */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-serif text-base text-ink">30-Day Growth History</h4>
            <span className="text-xs font-mono text-ink-muted">
              {habit.completions.length} total lifetime check-ins
            </span>
          </div>

          <div className="grid grid-cols-10 sm:grid-cols-15 gap-1.5 p-3 rounded-lg bg-paper border-2 border-ink shadow-ink-sm">
            {last30Days.map((dateStr) => {
              const isCompleted = habit.completions.includes(dateStr);
              return (
                <div
                  key={dateStr}
                  title={`${formatDateDisplay(dateStr)}: ${isCompleted ? 'Tended' : 'Unwatered'}`}
                  className={`aspect-square rounded border border-ink flex items-center justify-center text-[9px] font-mono select-none ${
                    isCompleted
                      ? 'bg-moss text-paper font-bold'
                      : 'bg-paper-tint text-ink/40'
                  }`}
                >
                  {isCompleted ? '✓' : ''}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-ink-faint mt-1.5 px-1">
            <span>{formatShortDate(last30Days[0])}</span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-moss border border-ink inline-block" /> Tended
              <span className="w-2.5 h-2.5 rounded bg-paper-tint border border-ink inline-block ml-2" /> Rest
            </span>
            <span>Today</span>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t-2 border-ink flex flex-wrap items-center justify-between gap-3">
          <div>
            {!showConfirmDelete ? (
              <button
                type="button"
                onClick={() => setShowConfirmDelete(true)}
                className="text-xs font-mono text-tomato hover:underline flex items-center gap-1"
              >
                <TrashIcon className="w-3.5 h-3.5" /> Remove Plant
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-tomato font-bold">Uproot forever?</span>
                <button
                  type="button"
                  onClick={() => onDeleteHabit(habit.id)}
                  className="px-2 py-1 text-xs font-mono font-bold bg-tomato text-paper rounded border border-ink pressable"
                >
                  Confirm Delete
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmDelete(false)}
                  className="px-2 py-1 text-xs font-mono rounded border border-ink"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="moss"
              size="sm"
              onClick={() => {
                onToggleCompleteToday(habit.id);
                onClose();
              }}
              icon={<CheckStampIcon className="w-4 h-4 text-paper" />}
            >
              Tend Today (+10 XP)
            </Button>
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
