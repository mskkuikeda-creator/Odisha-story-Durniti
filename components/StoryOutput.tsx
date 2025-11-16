
import React, { useState, useEffect } from 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
import { Loader } from './Loader';

interface StoryOutputProps {
  story: string;
  isLoading: boolean;
}

const StoryOutput: React.FC<StoryOutputProps> = ({ story, isLoading }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    if (story) {
      navigator.clipboard.writeText(story);
      setCopied(true);
    }
  };

  return (
    <div className="w-full bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg min-h-[20rem] flex flex-col">
      <div className="flex justify-between items-center p-3 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-slate-300">Generated Story</h2>
        {story && !isLoading && (
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-700/50 rounded-md hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            {copied ? <CheckIcon className="w-4 h-4 text-green-400" /> : <ClipboardIcon className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
      <div className="p-6 flex-grow relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader />
          </div>
        ) : story ? (
          <p className="text-gray-300 whitespace-pre-wrap leading-relaxed font-serif text-lg">{story}</p>
        ) : (
          <div className="text-center text-slate-500 h-full flex items-center justify-center">
            <p>Your generated story will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryOutput;
