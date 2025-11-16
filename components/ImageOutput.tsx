import React from 'react';
import { Loader } from './Loader';
import { DownloadIcon } from './icons/DownloadIcon';

interface ImageOutputProps {
  image: string | null;
  isLoading: boolean;
  error: string | null;
}

const ImageOutput: React.FC<ImageOutputProps> = ({ image, isLoading, error }) => {
  const handleDownload = () => {
    if (!image) return;

    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${image}`;
    link.download = 'odia-story-illustration.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="w-full aspect-video bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="text-center text-red-400 p-4">
          {(() => {
            const parts = error.split(/:(.*)/s);
            const title = parts.length > 1 ? parts[0].trim() : 'Illustration Error';
            const message = parts.length > 1 ? parts[1].trim() : error;
            return (
              <>
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{message}</p>
              </>
            );
          })()}
        </div>
      ) : image ? (
        <>
          <img
            src={`data:image/jpeg;base64,${image}`}
            alt="Generated illustration for the story"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleDownload}
            className="absolute bottom-3 right-3 p-2 bg-slate-900/60 text-slate-200 rounded-full hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-all"
            aria-label="Download image"
            title="Download Image"
          >
            <DownloadIcon className="w-5 h-5" />
          </button>
        </>
      ) : (
        <div className="text-center text-slate-500">
          <p>Your generated illustration will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default ImageOutput;