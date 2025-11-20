import React from 'react';
import { MODES } from '../hooks/usePomodoro';

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const getModeLabel = (mode) => {
    switch (mode) {
        case MODES.FOCUS:
            return 'Focus';
        case MODES.SHORT_BREAK:
            return 'Short Break';
        case MODES.LONG_BREAK:
            return 'Long Break';
        default:
            return '';
    }
};

const TimerDisplay = ({ timeLeft, mode }) => {
    return (
        <div className="timer-display">
            <div className="mode-label">{getModeLabel(mode)}</div>
            <div className="time-value">{formatTime(timeLeft)}</div>
        </div>
    );
};

export default TimerDisplay;
