import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import StoryInput from './components/StoryInput';
import StoryOutput from './components/StoryOutput';
import { generateStory, generateIllustration } from './services/geminiService';
import { StoryTone } from './components/ToneSelector';
import ExampleStories, { ExampleStory } from './components/ExampleStories';
import StyleSelector, { IllustrationStyle } from './components/StyleSelector';
import ImageOutput from './components/ImageOutput';
import { ImageIcon } from './components/icons/ImageIcon';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [tone, setTone] = useState<StoryTone>('Serious');
  const [generatedStory, setGeneratedStory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [illustrationStyle, setIllustrationStyle] = useState<IllustrationStyle>('Realistic');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleGenerateStory = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedStory('');
    setGeneratedImage(null);
    setImageError(null);


    try {
      const story = await generateStory(prompt, tone);
      setGeneratedStory(story);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading, tone]);

  const handleGenerateIllustration = useCallback(async () => {
    if (!generatedStory || isImageLoading) return;

    setIsImageLoading(true);
    setImageError(null);
    setGeneratedImage(null);

    try {
      const image = await generateIllustration(generatedStory, illustrationStyle);
      setGeneratedImage(image);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setImageError(err.message);
      } else {
        setImageError('An unknown error occurred while generating the image.');
      }
    } finally {
      setIsImageLoading(false);
    }
  }, [generatedStory, isImageLoading, illustrationStyle]);

  const handleClear = useCallback(() => {
    setPrompt('');
    setGeneratedStory('');
    setError(null);
    setGeneratedImage(null);
    setImageError(null);
  }, []);
  
  const handleLoadExample = useCallback((example: ExampleStory) => {
    setPrompt(example.prompt);
    setTone(example.tone);
    setGeneratedStory(example.story);
    setError(null);
    setGeneratedImage(null);
    setImageError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
      <div className="relative container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <Header />
        
        <main className="w-full max-w-4xl mt-8 md:mt-12 flex flex-col gap-8">
          <StoryInput
            prompt={prompt}
            setPrompt={setPrompt}
            tone={tone}
            setTone={setTone}
            onGenerate={handleGenerateStory}
            onClear={handleClear}
            isLoading={isLoading}
          />

          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
              {(() => {
                const parts = error.split(/:(.*)/s);
                const title = parts.length > 1 ? parts[0].trim() : 'Error Generating Story';
                const message = parts.length > 1 ? parts[1].trim() : error;
                return (
                  <>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm mt-1">{message}</p>
                  </>
                );
              })()}
            </div>
          )}

          <StoryOutput story={generatedStory} isLoading={isLoading} />
          
          {generatedStory && !isLoading && (
            <div className="w-full bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-4 flex flex-col gap-4">
               <div className="flex items-center justify-between flex-wrap gap-y-4">
                  <StyleSelector selectedStyle={illustrationStyle} onStyleChange={setIllustrationStyle} disabled={isImageLoading} />
                   <button
                    onClick={handleGenerateIllustration}
                    disabled={isImageLoading}
                    className="px-5 py-2 text-sm font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" />
                    {isImageLoading ? 'Illustrating...' : 'Generate Illustration'}
                  </button>
               </div>
               <ImageOutput image={generatedImage} isLoading={isImageLoading} error={imageError} />
            </div>
          )}

          <ExampleStories onLoadExample={handleLoadExample} isLoading={isLoading} />
        </main>
        
        <footer className="w-full max-w-4xl mt-12 text-center text-slate-500 text-sm">
          <p>Powered by Gemini API</p>
        </footer>
      </div>
    </div>
  );
};

export default App;