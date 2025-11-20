import React from 'react';

const Controls = ({ isActive, isPaused, onToggle, onReset, onSkip }) => {
    return (
        <div className="controls">
            <button
                className={`btn-primary ${isActive ? 'active' : ''} `}
                onClick={onToggle}
            >
                {isActive ? 'Pause' : (isPaused ? 'Continue' : 'Start')}
            </button>

            <button className="btn-secondary" onClick={onSkip}>
                Skip
            </button>

            <button className="btn-secondary" onClick={onReset}>
                Reset
            </button>
        </div>
    );
};

export default Controls;
