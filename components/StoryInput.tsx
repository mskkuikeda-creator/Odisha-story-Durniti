
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { TrashIcon } from './icons/TrashIcon';
import ToneSelector, { StoryTone } from './ToneSelector';

interface StoryInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  tone: StoryTone;
  setTone: (tone: StoryTone) => void;
  onGenerate: () => void;
  onClear: () => void;
  isLoading: boolean;
}

const StoryInput: React.FC<StoryInputProps> = ({ prompt, setPrompt, tone, setTone, onGenerate, onClear, isLoading }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      onGenerate();
    }
  };

  return (
    <div className="w-full bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-1">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ଆପଣଙ୍କ କାହାଣୀର ଆରମ୍ଭ କିମ୍ବା ଏକ ବିଚାର ଏଠାରେ ଲେଖନ୍ତୁ..."
          className="w-full h-36 bg-slate-800/0 text-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none placeholder-slate-500"
          disabled={isLoading}
        />
      </div>
      <div className="flex items-center justify-between p-2 flex-wrap gap-y-2">
        <ToneSelector selectedTone={tone} onToneChange={setTone} disabled={isLoading} />
        <div className="flex items-center gap-2">
          <p className="text-xs text-slate-500 hidden sm:block">
            <kbd className="font-sans border bg-slate-900 border-slate-700 rounded px-1.5 py-0.5">Ctrl</kbd> + <kbd className="font-sans border bg-slate-900 border-slate-700 rounded px-1.5 py-0.5">Enter</kbd>
          </p>
          <button
            onClick={onClear}
            disabled={isLoading || !prompt}
            className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-700/50 rounded-md hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <TrashIcon className="w-4 h-4" />
            Clear
          </button>
          <button
            onClick={onGenerate}
            disabled={isLoading || !prompt.trim()}
            className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <SparklesIcon className="w-4 h-4" />
            {isLoading ? 'Generating...' : 'Generate Story'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryInput;
