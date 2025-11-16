
import React from 'react';

export type StoryTone = 'Serious' | 'Satirical' | 'Tragic Irony';

export const tones: StoryTone[] = ['Serious', 'Satirical', 'Tragic Irony'];

interface ToneSelectorProps {
  selectedTone: StoryTone;
  onToneChange: (tone: StoryTone) => void;
  disabled: boolean;
}

const ToneSelector: React.FC<ToneSelectorProps> = ({ selectedTone, onToneChange, disabled }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-slate-400 font-medium">Tone:</span>
      <div className="flex items-center bg-slate-900/50 border border-slate-700 rounded-md p-0.5">
        {tones.map((tone) => (
          <button
            key={tone}
            onClick={() => onToneChange(tone)}
            disabled={disabled}
            aria-pressed={selectedTone === tone}
            className={`px-3 py-1 text-sm rounded-md transition-colors disabled:opacity-50 ${
              selectedTone === tone
                ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToneSelector;
