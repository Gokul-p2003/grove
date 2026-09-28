import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SeedIcon, SparkleIcon, TrophyIcon, CrossIcon } from '../icons/CustomIcons';

interface LevelUpRibbonProps {
  show: boolean;
  level: number;
  rankTitle: string;
  onDismiss: () => void;
}

export const LevelUpRibbon: React.FC<LevelUpRibbonProps> = ({
  show,
  level,
  rankTitle,
  onDismiss,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed top-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-3xl mx-auto bg-butter border-3 border-ink rounded-xl p-4 sm:p-5 shadow-ink-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tomato text-paper border-2 border-ink flex items-center justify-center flex-shrink-0 -rotate-3 shadow-ink-sm">
                <SparkleIcon className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink bg-paper px-2 py-0.5 rounded border border-ink">
                    GARDENER PROMOTION
                  </span>
                  <span className="font-mono text-xs font-bold text-tomato flex items-center gap-1">
                    <SeedIcon className="w-3.5 h-3.5 text-ink" /> +3 Seeds Awarded!
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-bold mt-0.5">
                  Promoted to Level {level}: {rankTitle}!
                </h3>
              </div>
            </div>

            <button
              onClick={onDismiss}
              className="px-3 py-1.5 bg-paper hover:bg-paper-tint border-2 border-ink rounded font-mono text-xs font-bold text-ink shadow-ink-sm pressable flex-shrink-0"
            >
              Collect Rewards
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
