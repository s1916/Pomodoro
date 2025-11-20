import React, { useState, useEffect } from 'react';
import { usePomodoro, MODES } from './hooks/usePomodoro';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import Settings from './components/Settings';

function App() {
  const {
    mode,
    timeLeft,
    isActive,
    cycles,
    settings,
    toggleTimer,
    resetTimer,
    skipStage,
    updateSettings
  } = usePomodoro();

  const [showSettings, setShowSettings] = useState(false);

  // Dynamic Title
  useEffect(() => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const timeString = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const modeString = mode === MODES.FOCUS ? 'Focus' : 'Break';
    document.title = `${timeString} - ${modeString}`;
  }, [timeLeft, mode]);

  // Dynamic Favicon
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      document.head.appendChild(newLink);
    }

    const faviconColor = mode === MODES.FOCUS ? '%23ff6b6b' : '%234ecdc4'; // #ff6b6b or #4ecdc4
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="${faviconColor}" />
      </svg>
    `;

    document.querySelector("link[rel~='icon']").href = `data:image/svg+xml,${svg}`;
  }, [mode]);

  const getAppClass = () => {
    switch (mode) {
      case MODES.FOCUS: return 'mode-focus';
      case MODES.SHORT_BREAK: return 'mode-short-break';
      case MODES.LONG_BREAK: return 'mode-long-break';
      default: return '';
    }
  };

  const getDuration = (currentMode) => {
    switch (currentMode) {
      case MODES.FOCUS: return settings.focusDuration;
      case MODES.SHORT_BREAK: return settings.shortBreakDuration;
      case MODES.LONG_BREAK: return settings.longBreakDuration;
      default: return settings.focusDuration;
    }
  };

  const isPaused = !isActive && timeLeft < getDuration(mode) && timeLeft > 0;

  return (
    <div className={`app-container ${getAppClass()}`}>
      <header>
        <h1>Pomodoro</h1>
        <button className="btn-icon settings-btn" onClick={() => setShowSettings(true)} aria-label="Settings">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </header>

      <main>
        <TimerDisplay timeLeft={timeLeft} mode={mode} />
        <Controls
          isActive={isActive}
          isPaused={isPaused}
          onToggle={toggleTimer}
          onReset={resetTimer}
          onSkip={skipStage}
        />
      </main>

      <footer>
        <p>Cycles: {cycles}</p>
      </footer>

      {showSettings && (
        <Settings
          settings={settings}
          onUpdate={updateSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default App;
