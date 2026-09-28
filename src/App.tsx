import React, { useEffect } from 'react';
import { useGroveStore } from './store/useGroveStore';
import { TopBar } from './components/navigation/TopBar';
import { GardenCanvas } from './components/garden/GardenCanvas';
import { TodayPanel } from './components/today/TodayPanel';
import { GardenFooter } from './components/navigation/GardenFooter';
import { AddHabitModal } from './components/modals/AddHabitModal';
import { HabitDetailModal } from './components/modals/HabitDetailModal';
import { StickerBookModal } from './components/modals/StickerBookModal';
import { SeedShopModal } from './components/modals/SeedShopModal';
import { WeeklyReviewModal } from './components/modals/WeeklyReviewModal';
import { OnboardingModal } from './components/modals/OnboardingModal';
import { LevelUpRibbon } from './components/modals/LevelUpRibbon';

export default function App() {
  const {
    habits,
    profile,
    activeModal,
    selectedHabitId,
    levelUpBanner,
    addHabit,
    deleteHabit,
    checkIn,
    useRainCheck,
    unlockSpecies,
    openModal,
    closeModal,
    dismissLevelUp,
    completeOnboarding,
    seedDemoData,
    resetAllData,
  } = useGroveStore();

  // First-run onboarding check
  useEffect(() => {
    if (!profile.hasCompletedOnboarding && habits.length === 0) {
      openModal('onboarding');
    }
  }, [profile.hasCompletedOnboarding, habits.length, openModal]);

  const selectedHabit = habits.find((h) => h.id === selectedHabitId) || null;

  return (
    <div className="min-h-screen bg-paper text-ink p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto flex flex-col justify-between">
      <div>
        {/* Top Navigation & Telemetry */}
        <TopBar profile={profile} onOpenModal={openModal} />

        {/* Main Content: Garden Canvas (Left) + Today Sheet (Right) */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Garden View (8 cols on desktop) */}
          <div className="lg:col-span-8">
            <GardenCanvas
              habits={habits}
              onSelectHabit={(id) => openModal('habit-detail', id)}
              onPlantNew={() => openModal('add-habit')}
            />
          </div>

          {/* Today's Tending Sheet (4 cols on desktop) */}
          <div className="lg:col-span-4">
            <TodayPanel
              habits={habits}
              onCheckIn={(id) => checkIn(id)}
              onPlantNew={() => openModal('add-habit')}
            />
          </div>
        </main>
      </div>

      {/* Footer Controls & Demo Seeder */}
      <GardenFooter
        onSeedDemoData={seedDemoData}
        onResetAllData={resetAllData}
      />

      {/* Modals & Screens */}
      <AddHabitModal
        isOpen={activeModal === 'add-habit'}
        onClose={closeModal}
        unlockedSpecies={profile.unlockedSpecies}
        onAddHabit={addHabit}
      />

      <HabitDetailModal
        isOpen={activeModal === 'habit-detail' && !!selectedHabit}
        onClose={closeModal}
        habit={selectedHabit}
        rainChecksAvailable={profile.rainChecksAvailable}
        onUseRainCheck={(id) => useRainCheck(id)}
        onDeleteHabit={(id) => deleteHabit(id)}
        onToggleCompleteToday={(id) => checkIn(id)}
      />

      <StickerBookModal
        isOpen={activeModal === 'stickers'}
        onClose={closeModal}
        unlockedIds={profile.achievements}
      />

      <SeedShopModal
        isOpen={activeModal === 'seed-shop'}
        onClose={closeModal}
        userSeeds={profile.seeds}
        unlockedSpecies={profile.unlockedSpecies}
        onUnlockSpecies={(sp) => unlockSpecies(sp)}
      />

      <WeeklyReviewModal
        isOpen={activeModal === 'weekly-review'}
        onClose={closeModal}
        habits={habits}
      />

      <OnboardingModal
        isOpen={activeModal === 'onboarding'}
        onComplete={completeOnboarding}
      />

      {/* Level Up Celebration Ribbon Banner */}
      {levelUpBanner && (
        <LevelUpRibbon
          show={levelUpBanner.show}
          level={levelUpBanner.level}
          rankTitle={levelUpBanner.rankTitle}
          onDismiss={dismissLevelUp}
        />
      )}
    </div>
  );
}
