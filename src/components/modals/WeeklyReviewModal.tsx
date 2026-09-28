import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Habit } from '../../types';
import { subDays, format, parseISO } from 'date-fns';
import { CalendarIcon, SparkleIcon, CheckStampIcon } from '../icons/CustomIcons';

interface WeeklyReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  habits: Habit[];
}

export const WeeklyReviewModal: React.FC<WeeklyReviewModalProps> = ({
  isOpen,
  onClose,
  habits,
}) => {
  // Compute past 7 days statistics
  const today = new Date();
  const past7Days = Array.from({ length: 7 }, (_, i) =>
    format(subDays(today, 6 - i), 'yyyy-MM-dd')
  );

  let totalScheduled = habits.length * 7;
  let totalCompletions = 0;

  habits.forEach((h) => {
    past7Days.forEach((d) => {
      if (h.completions.includes(d)) totalCompletions++;
    });
  });

  const completionRate =
    totalScheduled > 0 ? Math.round((totalCompletions / totalScheduled) * 100) : 0;

  // Dry, warm, human microcopy generator
  const getEncouragingNote = (rate: number) => {
    if (rate >= 90) {
      return "You tended every single corner. Your plants are basically immortal now. Go touch grass. Literally.";
    }
    if (rate >= 70) {
      return "Strong week in the soil. A leaf or two drooped, but nothing wilted permanently. Take a long breath.";
    }
    if (rate >= 40) {
      return "Modest tending. The roots held fast. Soil is patient; it does not keep a grudge against you.";
    }
    return "Quiet week. The seeds slept peacefully under the mulch. Next week the sun comes out again.";
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sunday Field Receipt" maxWidth="md">
      <div className="space-y-6 text-ink">
        {/* Receipt Styled Tear-Sheet Card */}
        <div className="p-6 rounded-lg bg-paper-tint border-2 border-ink border-dashed shadow-ink space-y-4">
          <div className="flex items-center justify-between pb-3 border-b-2 border-ink">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-moss" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                7-Day Botanical Telemetry
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-moss">
              {format(today, 'MMM d, yyyy')}
            </span>
          </div>

          {/* Metric Big Score */}
          <div className="text-center py-3">
            <div className="font-serif text-5xl text-ink font-bold">{completionRate}%</div>
            <span className="font-mono text-xs font-bold uppercase text-ink-muted">
              Weekly Garden Consistency
            </span>
          </div>

          {/* Day by Day Pips Row */}
          <div className="flex items-center justify-between gap-1 pt-2 border-t border-ink/20">
            {past7Days.map((d) => {
              const dayName = format(parseISO(d), 'EEE');
              const countOnDay = habits.filter((h) => h.completions.includes(d)).length;
              const hasActivity = countOnDay > 0;

              return (
                <div key={d} className="flex-1 text-center">
                  <span className="text-[10px] font-mono text-ink-muted block uppercase">
                    {dayName}
                  </span>
                  <div
                    className={`w-7 h-7 mx-auto rounded border border-ink mt-1 flex items-center justify-center text-xs font-mono font-bold ${
                      hasActivity
                        ? 'bg-moss text-paper shadow-ink-sm'
                        : 'bg-paper text-ink/30'
                    }`}
                  >
                    {hasActivity ? '✓' : '-'}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Editorial Warm Dry Microcopy */}
          <div className="p-3.5 rounded bg-paper border-2 border-ink text-xs font-mono leading-relaxed text-ink shadow-ink-sm">
            <span className="text-moss font-bold block mb-1">Caretaker&apos;s Field Note:</span>
            &ldquo;{getEncouragingNote(completionRate)}&rdquo;
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex justify-end">
          <Button variant="primary" onClick={onClose}>
            Back to Garden
          </Button>
        </div>
      </div>
    </Modal>
  );
};
