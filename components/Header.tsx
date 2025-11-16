
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center w-full max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
        ଓଡ଼ିଆ ଗଳ୍ପ ଲେଖକ
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-400">
        ଭାରତରେ ଦୁର୍ନୀତି ବିରୋଧରେ ଏକ ଆଧୁନିକ କାହାଣୀ ଲେଖିବା ପାଇଁ AI ବ୍ୟବହାର କରନ୍ତୁ
      </p>
    </header>
  );
};

export default Header;
