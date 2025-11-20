import React, { useState } from 'react';

const Settings = ({ settings, onUpdate, onClose }) => {
    const [localSettings, setLocalSettings] = useState(settings);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalSettings({
            ...localSettings,
            [name]: parseInt(value, 10) * 60, // Convert minutes to seconds
        });
    };

    const handleSave = () => {
        onUpdate(localSettings);
        onClose();
    };

    return (
        <div className="settings-overlay">
            <div className="settings-modal">
                <h2>Settings</h2>

                <div className="setting-group">
                    <label>Focus Duration (min)</label>
                    <input
                        type="number"
                        name="focusDuration"
                        value={localSettings.focusDuration / 60}
                        onChange={handleChange}
                        min="1"
                        max="60"
                    />
                </div>

                <div className="setting-group">
                    <label>Short Break (min)</label>
                    <input
                        type="number"
                        name="shortBreakDuration"
                        value={localSettings.shortBreakDuration / 60}
                        onChange={handleChange}
                        min="1"
                        max="30"
                    />
                </div>

                <div className="setting-group">
                    <label>Long Break (min)</label>
                    <input
                        type="number"
                        name="longBreakDuration"
                        value={localSettings.longBreakDuration / 60}
                        onChange={handleChange}
                        min="1"
                        max="60"
                    />
                </div>

                <div className="setting-group">
                    <label>Long Break Interval</label>
                    <input
                        type="number"
                        name="longBreakInterval"
                        value={localSettings.longBreakInterval}
                        onChange={(e) => setLocalSettings({ ...localSettings, longBreakInterval: parseInt(e.target.value, 10) })}
                        min="1"
                        max="10"
                    />
                </div>

                <div className="settings-actions">
                    <button onClick={onClose} className="btn-secondary">Cancel</button>
                    <button onClick={handleSave} className="btn-primary">Save</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
