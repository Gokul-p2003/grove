import React from 'react';
import { Modal } from '../ui/Modal';
import { ACHIEVEMENTS } from '../../utils/achievementDefs';
import { RibbonIcon, StarIcon, CheckStampIcon, SparkleIcon } from '../icons/CustomIcons';

interface StickerBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedIds: string[];
}

export const StickerBookModal: React.FC<StickerBookModalProps> = ({
  isOpen,
  onClose,
  unlockedIds,
}) => {
  const unlockedSet = new Set(unlockedIds);
  const totalCount = ACHIEVEMENTS.length;
  const unlockedCount = ACHIEVEMENTS.filter((a) => unlockedSet.has(a.id)).length;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Gardener Sticker Album" maxWidth="xl">
      <div className="space-y-6 text-ink">
        {/* Album Header Telemetry */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-paper-tint border-2 border-ink">
          <div>
            <div className="font-serif text-lg text-ink">Field Badges & Botanical Seals</div>
            <p className="text-xs font-mono text-ink-muted">
              Earned through steady daily repetition and botanical patience.
            </p>
          </div>
          <div className="text-right">
            <span className="font-mono text-xl font-black text-moss">
              {unlockedCount} / {totalCount}
            </span>
            <span className="block text-[10px] font-mono text-ink-muted uppercase">Badges Collected</span>
          </div>
        </div>

        {/* The Sticker Grid (12+ Stickers with editorial slight rotation) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((ach) => {
            const isUnlocked = unlockedSet.has(ach.id);
            const rotStyle = {
              transform: `rotate(${ach.rotationDeg}deg)`,
            };

            return (
              <div
                key={ach.id}
                style={rotStyle}
                className={`p-4 rounded-lg border-2 border-ink transition-all select-none relative ${
                  isUnlocked
                    ? 'bg-paper shadow-ink hover:scale-105'
                    : 'bg-paper-tint/60 border-ink/40 opacity-75'
                }`}
              >
                {/* Badge Icon / Seal */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center ${
                      isUnlocked
                        ? ach.category === 'growth'
                          ? 'bg-moss text-paper'
                          : ach.category === 'streak'
                          ? 'bg-tomato text-paper'
                          : ach.category === 'botany'
                          ? 'bg-butter text-ink'
                          : 'bg-clay text-paper'
                        : 'bg-paper-tint text-ink/30 border-ink/40'
                    }`}
                  >
                    {ach.badgeStyle === 'ribbon' ? (
                      <RibbonIcon className="w-5 h-5" />
                    ) : ach.badgeStyle === 'stamp' ? (
                      <CheckStampIcon className="w-5 h-5" />
                    ) : ach.badgeStyle === 'circle' ? (
                      <StarIcon className="w-5 h-5" />
                    ) : (
                      <SparkleIcon className="w-5 h-5" />
                    )}
                  </div>

                  <span
                    className={`text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded border ${
                      isUnlocked
                        ? 'bg-paper text-ink border-ink'
                        : 'bg-paper-tint text-ink-faint border-ink/30'
                    }`}
                  >
                    {isUnlocked ? 'EARNED' : 'SEALED'}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1">
                  <h4
                    className={`font-serif text-sm font-bold leading-tight ${
                      isUnlocked ? 'text-ink' : 'text-ink/60'
                    }`}
                  >
                    {ach.title}
                  </h4>
                  <p className="text-[11px] font-mono text-ink-muted leading-relaxed">
                    {isUnlocked ? ach.description : ach.secretHint || ach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
