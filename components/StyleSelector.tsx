import React from 'react';

export type IllustrationStyle = 'Realistic' | 'Cartoonish' | 'Abstract';

export const styles: IllustrationStyle[] = ['Realistic', 'Cartoonish', 'Abstract'];

interface StyleSelectorProps {
  selectedStyle: IllustrationStyle;
  onStyleChange: (style: IllustrationStyle) => void;
  disabled: boolean;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onStyleChange, disabled }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-slate-400 font-medium">Style:</span>
      <div className="flex items-center bg-slate-900/50 border border-slate-700 rounded-md p-0.5">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => onStyleChange(style)}
            disabled={disabled}
            aria-pressed={selectedStyle === style}
            className={`px-3 py-1 text-sm rounded-md transition-colors disabled:opacity-50 ${
              selectedStyle === style
                ? 'bg-cyan-600 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
