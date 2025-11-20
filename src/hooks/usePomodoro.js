import { useState, useEffect, useCallback, useRef } from 'react';

export const MODES = {
    FOCUS: 'focus',
    SHORT_BREAK: 'shortBreak',
    LONG_BREAK: 'longBreak',
};

const DEFAULT_SETTINGS = {
    focusDuration: 25 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 15 * 60,
    longBreakInterval: 4,
};

export function usePomodoro() {
    const [mode, setMode] = useState(MODES.FOCUS);
    const [timeLeft, setTimeLeft] = useState(DEFAULT_SETTINGS.focusDuration);
    const [isActive, setIsActive] = useState(false);
    const [cycles, setCycles] = useState(0);
    const [settings, setSettings] = useState(DEFAULT_SETTINGS);

    const timerRef = useRef(null);

    const getDuration = useCallback((currentMode) => {
        switch (currentMode) {
            case MODES.FOCUS:
                return settings.focusDuration;
            case MODES.SHORT_BREAK:
                return settings.shortBreakDuration;
            case MODES.LONG_BREAK:
                return settings.longBreakDuration;
            default:
                return settings.focusDuration;
        }
    }, [settings]);

    const switchMode = useCallback((newMode) => {
        setMode(newMode);
        setTimeLeft(getDuration(newMode));
        setIsActive(false);
    }, [getDuration]);

    const handleTimerComplete = useCallback(() => {
        setIsActive(false);

        if (mode === MODES.FOCUS) {
            const newCycles = cycles + 1;
            setCycles(newCycles);

            if (newCycles % settings.longBreakInterval === 0) {
                switchMode(MODES.LONG_BREAK);
            } else {
                switchMode(MODES.SHORT_BREAK);
            }
        } else {
            switchMode(MODES.FOCUS);
        }
    }, [mode, cycles, settings.longBreakInterval, switchMode]);

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleTimerComplete();
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, timeLeft, handleTimerComplete]);

    // Update timeLeft if settings change and timer is not active
    useEffect(() => {
        if (!isActive) {
            setTimeLeft(getDuration(mode));
        }
    }, [settings, mode, getDuration]);

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(getDuration(mode));
    };

    const skipStage = () => {
        handleTimerComplete();
    };

    const updateSettings = (newSettings) => {
        setSettings({ ...settings, ...newSettings });
    };

    return {
        mode,
        timeLeft,
        isActive,
        cycles,
        settings,
        toggleTimer,
        resetTimer,
        skipStage,
        updateSettings,
        switchMode, // Expose for manual switching if needed
    };
}
