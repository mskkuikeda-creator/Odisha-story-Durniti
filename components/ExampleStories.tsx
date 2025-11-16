import React from 'react';
import { StoryTone } from './ToneSelector';

export interface ExampleStory {
  title: string;
  prompt: string;
  tone: StoryTone;
  story: string;
}

const examples: ExampleStory[] = [
  {
    title: 'The Honest Clerk',
    prompt: 'A low-level government clerk discovers a massive scam in the pension department, but reporting it would put his family in danger.',
    tone: 'Serious',
    story: `ସୁରେଶ ବାବୁ ଜଣେ ସାଧାରଣ କିରାଣୀ ଥିଲେ। ପେନସନ ବିଭାଗରେ ତାଙ୍କର ଛୋଟ ଚାକିରିଟିଏ, ଯେଉଁଥିରେ ପରିବାର ଚଳାଇବା କଷ୍ଟକର ଥିଲା। ଦିନେ କାଗଜପତ୍ର ଦେଖୁ ଦେଖୁ ତାଙ୍କ ହାତରେ ଏକ ବଡ଼ ଧରଣର ଘୋଟାଲା ଧରାପଡ଼ିଲା। ହଜାର ହଜାର ବୃଦ୍ଧବୃଦ୍ଧାଙ୍କ ପେନସନ ଟଙ୍କା କିଛି ଅଫିସର ମିଳିମିଶି ହଡ଼ପ କରୁଥିଲେ।
ସୁରେଶ ବାବୁଙ୍କ ବିବେକ ତାଙ୍କୁ କହିଲା ଏହାର ପ୍ରତିବାଦ କରିବାକୁ। କିନ୍ତୁ ଯେତେବେଳେ ସେ ଏ ବିଷୟରେ ଉପରିସ୍ଥ ଅଧିକାରୀଙ୍କୁ ଜଣାଇଲେ, ତାଙ୍କୁ ଚୁପ୍ ରହିବାକୁ ଧମକ ମିଳିଲା। ତାଙ୍କ ଛୋଟ ଝିଅର ଫଟୋ ତାଙ୍କ ଟେବୁଲ ଉପରେ ରଖି କୁହାଗଲା, "ପରିବାର କଥା ଭାବନ୍ତୁ।"
ସେ ଦ୍ୱନ୍ଦ୍ୱରେ ପଡ଼ିଗଲେ। ସଚ୍ଚୋଟତାର ରାସ୍ତା ତାଙ୍କ ପରିବାର ପାଇଁ ବିପଦ ଆଣିପାରେ, ଆଉ ଚୁପ୍ ରହିଲେ ହଜାର ହଜାର ଗରିବଙ୍କ ଅଭିଶାପ ମିଳିବ। ଶେଷରେ, ସେ ନିଷ୍ପତ୍ତି ନେଲେ ଯେ ସେ ଲଢ଼ିବେ, କିନ୍ତୁ ଏକୁଟିଆ ନୁହେଁ। ସେ ଗଣମାଧ୍ୟମର ଜଣେ ସାମ୍ବାଦିକ ବନ୍ଧୁଙ୍କୁ ସବୁ ପ୍ରମାଣ ଦେଇଦେଲେ। ଖବର ପ୍ରକାଶ ପାଇବା ପରେ ହଇଚଇ ସୃଷ୍ଟି ହେଲା ଏବଂ ଦୁର୍ନୀତିଗ୍ରସ୍ତ ଅଫିସରମାନେ ନିଲମ୍ବିତ ହେଲେ। ସୁରେଶ ବାବୁଙ୍କୁ କିଛି ଦିନ ଅସୁବିଧାର ସମ୍ମୁଖୀନ ହେବାକୁ ପଡ଼ିଲା, କିନ୍ତୁ ତାଙ୍କ ସାହସ ପାଇଁ ସମସ୍ତେ ତାଙ୍କୁ ପ୍ରଶଂସା କଲେ।`
  },
  {
    title: 'The Magical Pothole',
    prompt: 'A pothole on a busy road is never fixed because local politicians use it to win elections every year by promising to repair it.',
    tone: 'Satirical',
    story: `ଆମ ସହରର ମୁଖ୍ୟ ରାସ୍ତାରେ ଗୋଟିଏ ଗାତ ଥିଲା, ଯାହାକୁ ଲୋକେ "ଯାଦୁઈ ଗାତ" ବୋଲି କହୁଥିଲେ। ଏହି ଗାତର ଯାଦୁ ଏହା ଥିଲା ଯେ ଏହା କେବେବି ପୋତି ହେଉନଥିଲା। ପ୍ରତି ନିର୍ବାଚନ ପୂର୍ବରୁ, ସବୁ ନେତା ଆସି ସେହି ଗାତ ପାଖରେ ଠିଆ ହୋଇ ଭାଷଣ ଦେଉଥିଲେ, "ମୋତେ ଭୋଟ ଦିଅନ୍ତୁ, ମୁଁ ଏହି ଗାତକୁ ସବୁଦିନ ପାଇଁ ପୋତିଦେବି।"
ଲୋକେ ତାଳି ମାରୁଥିଲେ, ଭୋଟ ଦେଉଥିଲେ, ଆଉ ନେତା ଜିତିବା ପରେ ଗାତଟି ସେମିତି ରହୁଥିଲା। ଧୀରେ ଧୀରେ ଗାତଟି ଏକ ପର୍ଯ୍ୟଟନ ସ୍ଥଳୀ ପାଲଟିଗଲା। ଲୋକେ ସେଠାରେ ସେଲ୍ଫି ନେଉଥିଲେ।
ଥରେ ଜଣେ ନୂଆ, ଯୁବ ନେତା ଆସିଲେ ଏବଂ ରାତାରାତି ସେହି ଗାତକୁ ପୋତିଦେଲେ। ସକାଳୁ ଉଠି ଲୋକେ ଦେଖିଲେ ରାସ୍ତା ସମତଳ। ସମସ୍ତେ ଖୁସି ହେବା ବଦଳରେ ଦୁଃଖୀ ହୋଇଗଲେ। ପୁରୁଣା ନେତାମାନେ କହିଲେ, "ଦେଖିଲ! ଏ ଯୁବକ ଆମ ସହରର ପରମ୍ପରାକୁ ନଷ୍ଟ କରିଦେଲା!" ଆଗାମୀ ନିର୍ବାଚନରେ ସେହି ଯୁବ ନେତା ହାରିଗଲେ କାରଣ ତାଙ୍କ ପାଖରେ ନିର୍ବାଚନୀ ପ୍ରତିଶ୍ରୁତି ଦେବାକୁ କୌଣସି ଗାତ ନଥିଲା।`
  },
  {
    title: 'The Bribe for Justice',
    prompt: 'A poor farmer has to pay a bribe to get the police to investigate the theft of his only buffalo, only to find out the money he paid was used to silence the only witness.',
    tone: 'Tragic Irony',
    story: `ହରିଆର ଏକମାତ୍ର ସମ୍ପତ୍ତି ଥିଲା ତା’ର ମଇଁଷି, ଲକ୍ଷ୍ମୀ। ଦିନେ ରାତିରେ ସେ ଚୋରି ହୋଇଗଲା। ହରିଆ ଥାନାକୁ ଦୌଡ଼ିଲା, କିନ୍ତୁ ପୋଲିସବାବୁ ତା’ କଥା ଶୁଣିଲେନି। କହିଲେ, "ଏତେ ଛୋଟ କଥା ପାଇଁ ଆମ ପାଖରେ ସମୟ ନାହିଁ।"
ଜଣେ ଲୋକ ତାକୁ କହିଲା, "ବାବୁଙ୍କ ହାତ ଗରମ କର, କାମ ହୋଇଯିବ।" ହରିଆ ତା’ ସ୍ତ୍ରୀର ଶେଷ ଗହଣାତକ ବିକି ପାଞ୍ଚ ହଜାର ଟଙ୍କା ଯୋଗାଡ଼ କଲା ଏବଂ ପୋଲିସବାବୁଙ୍କୁ ଦେଲା। ପୋଲିସବାବୁ ହସିଲେ ଏବଂ କହିଲେ, "ଠିକ ଅଛି, ଏବେ ତଦନ୍ତ ହେବ।"
କିଛି ଦିନ ପରେ ହରିଆ ଜାଣିବାକୁ ପାଇଲା ଯେ ତା’ର ଜଣେ ପଡ଼ୋଶୀ ସେହି ଚୋରି ଦେଖିଥିଲା। ସେ ଖୁସି ହୋଇ ଥାନାକୁ ଗଲା। କିନ୍ତୁ ପୋଲିସବାବୁ କହିଲେ ଯେ ସେହି ସାକ୍ଷୀ ଏବେ ମନା କରୁଛି। ହରିଆ ପରେ ଜାଣିଲା ଯେ ତା’ର ସେହି ପାଞ୍ଚ ହଜାର ଟଙ୍କାରୁ କିଛି ଅଂଶ ଦେଇ ପୋଲିସବାବୁ ସେହି ସାକ୍ଷୀର ମୁହଁ ବନ୍ଦ କରିଦେଇଛନ୍ତି। ନ୍ୟାୟ ପାଇବା ପାଇଁ ଦେଇଥିବା ଲାଞ୍ଚ ହିଁ ତା’ ନ୍ୟାୟର ରାସ୍ତାକୁ ବନ୍ଦ କରିଦେଲା।`
  },
  {
    title: 'The Faulty Bridge',
    prompt: 'A newly appointed young engineer is pressured by his superiors and local politicians to approve a poorly constructed bridge that could endanger lives.',
    tone: 'Serious',
    story: `ଅମିତ ଜଣେ ଯୁବ ଇଞ୍ଜିନିୟର, ସରକାରୀ ଚାକିରିରେ ନୂଆ କରି ଯୋଗ ଦେଇଥିଲେ। ତାଙ୍କୁ ଏକ ନୂଆ ନିର୍ମାଣାଧୀନ ପୋଲର କାର୍ଯ୍ୟଭାର ମିଳିଥିଲା। କିନ୍ତୁ ସେ ଦେଖିଲେ ଯେ ପୋଲ ନିର୍ମାଣରେ ଅତି ନିମ୍ନମାନର ସାମଗ୍ରୀ ବ୍ୟବହାର କରାଯାଉଛି। ଠିକାଦାର ଏବଂ ତାଙ୍କ ଉପରିସ୍ଥ ଅଧିକାରୀମାନେ ମିଳିମିଶି ଏହି କାମ କରୁଥିଲେ।
ଯେତେବେଳେ ଅମିତ ଏହାର ପ୍ରତିବାଦ କଲେ, ତାଙ୍କୁ ଚୁପ୍ ରହିବାକୁ କୁହାଗଲା। ତାଙ୍କୁ ଲାଞ୍ଚର ପ୍ରଲୋଭନ ଦେଖାଗଲା, କିନ୍ତୁ ସେ ମନା କରିଦେଲେ। ଏହାପରେ ତାଙ୍କୁ ଧମକ ମିଳିଲା ଯେ ତାଙ୍କ ଚାକିରି ଚାଲିଯିବ।
ଅମିତଙ୍କ ଆଗରେ ଦୁଇଟି ରାସ୍ତା ଥିଲା - ନିଜର ସୁରକ୍ଷିତ ଭବିଷ୍ୟତ ପାଇଁ ଆଖି ବନ୍ଦ କରିଦେବା, କିମ୍ବା ହଜାର ହଜାର ଲୋକଙ୍କ ଜୀବନ ସହ ଖେଳୁଥିବା ଏହି ଦୁର୍ନୀତି ବିରୋଧରେ ସ୍ୱର ଉଠାଇବା। ସେ ଦ୍ୱିତୀୟ ରାସ୍ତା ବାଛିଲେ। ସେ ସବୁ ପ୍ରମାଣ ଏକାଠି କରି ଏକ ଗଣମାଧ୍ୟମ ସଂସ୍ଥାକୁ ଦେଇଦେଲେ। ଏହାପରେ ଯାଞ୍ଚ ଆରମ୍ଭ ହେଲା ଏବଂ ପୋଲର କାମ ବନ୍ଦ ହୋଇଗଲା। ଅମିତଙ୍କୁ ଅନେକ ଅସୁବିଧାର ସମ୍ମୁଖୀନ ହେବାକୁ ପଡିଲା, କିନ୍ତୁ ତାଙ୍କ ବିବେକ ସଫା ଥିଲା ଯେ ସେ ଏକ ବଡ଼ ଦୁର୍ଘଟଣାକୁ ଏଡ଼ାଇ ଦେଇଛନ୍ତି।`
  },
  {
    title: 'The Ghost School',
    prompt: 'A remote village has a government school that exists only on paper. Teachers have been drawing salaries for years, but no building or student has ever existed.',
    tone: 'Satirical',
    story: `କୁସୁମପୁର ଗାଁରେ ଗୋଟିଏ ସରକାରୀ ସ୍କୁଲ ଥିଲା, ଯାହାକୁ କେହି କେବେ ଦେଖିନଥିଲେ। ସରକାରୀ କାଗଜପତ୍ରରେ ସ୍କୁଲର ନାଁ, ଶିକ୍ଷକଙ୍କ ନାଁ ଏବଂ ପିଲାଙ୍କ ସଂଖ୍ୟା ସବୁ ଠିକଠାକ୍ ଥିଲା। ପ୍ରତି ମାସରେ ଶିକ୍ଷକମାନଙ୍କ ଦରମା ସେମାନଙ୍କ ବ୍ୟାଙ୍କ ଖାତାକୁ ଚାଲିଯାଉଥିଲା।
କଥାଟା ସେତେବେଳେ ଜଣାପଡ଼ିଲା ଯେତେବେଳେ ଜଣେ ନୂଆ ଜିଲ୍ଲାପାଳ ସ୍କୁଲ ପରିଦର୍ଶନରେ ଆସିବାକୁ ଚାହିଁଲେ। ସ୍ଥାନୀୟ ଅଧିକାରୀମାନଙ୍କ ମୁଣ୍ଡରେ ଚଡ଼କ ପଡ଼ିଲା। ରାତାରାତି ଗୋଟିଏ ଭଙ୍ଗା ଚାଳ ଘରକୁ ସ୍କୁଲର ବୋର୍ଡ ଲଗାଗଲା। ଗାଁର କିଛି ଲୋକଙ୍କୁ ପଇସା ଦେଇ ତାଙ୍କ ପିଲାଙ୍କୁ ସ୍କୁଲ ପଠାଇବାକୁ କୁହାଗଲା।
ଜିଲ୍ଲାପାଳ ଆସିଲେ, ସବୁ ଦେଖିଲେ। ସେ ପିଲାଙ୍କୁ ପଚାରିଲେ, "ତୁମ ସାର୍ କେମିତି ପଢ଼ାନ୍ତି?" ଜଣେ ପିଲା ନିରୀହ ଭାବେ ଉତ୍ତର ଦେଲା, "ସାର୍? କାଲି ରାତିରେ ତ ପ୍ରଥମ ଥର ପାଇଁ ଦେଖିଲି!" ପୂରା ଘଟଣାଟି ଏକ ପ୍ରହସନରେ ପରିଣତ ହେଲା ଏବଂ ସମସ୍ତେ ଜାଣିଗଲେ ଯେ ଏହା ଏକ "ଭୂତ ସ୍କୁଲ" ଥିଲା।`
  },
  {
    title: 'The Sanctioned House',
    prompt: 'An elderly widow spends her life savings bribing officials to get a government-sanctioned house, only for it to collapse in the first monsoon rain due to poor construction.',
    tone: 'Tragic Irony',
    story: `କମଳା ବୁଢ଼ୀ ସାରା ଜୀବନର ସଞ୍ଚୟକୁ ଏକାଠି କରି ସରକାରୀ ଯୋଜନାରେ ଘରଟିଏ ପାଇବା ପାଇଁ ଅଫିସରମାନଙ୍କୁ ଲାଞ୍ଚ ଦେଇଥିଲେ। ପ୍ରତି ଟେବୁଲରେ ତାଙ୍କୁ ଟଙ୍କା ଦେବାକୁ ପଡୁଥିଲା। ଶେଷରେ, ତାଙ୍କ ନାଁରେ ଘରଟି ମଞ୍ଜୁର ହେଲା। ତାଙ୍କ ଖୁସି କହିଲେ ନସରେ। ସେ ଭାବିଥିଲେ ବର୍ଷା ଦିନରେ ଆଉ ତାଙ୍କ ଭଙ୍ଗା ଚାଳ ଘରେ ପାଣି ଗଳିବ ନାହିଁ।
ନୂଆ ଘର ତିଆରି ହେଲା। ସେ ବଡ଼ ଆନନ୍ଦରେ ଗୃହ ପ୍ରବେଶ କଲେ। କିନ୍ତୁ ପ୍ରଥମ ବର୍ଷାରେ ହିଁ ତାଙ୍କ ସବୁ ସ୍ୱପ୍ନ ଧୋଇଗଲା। ଘରର ଛାତରୁ ପାଣି ଗଳିବାକୁ ଲାଗିଲା ଏବଂ କାନ୍ଥରେ ଫାଟ ଦେଖାଗଲା। ଗୋଟିଏ ରାତିର ପ୍ରବଳ ବର୍ଷାରେ ଘରଟି ଭୁଶୁଡ଼ି ପଡ଼ିଲା।
କମଳା ବୁଢ଼ୀ ଅଳ୍ପକେ ବଞ୍ଚିଗଲେ। ସେ ବୁଝିପାରିଲେ ଯେ ଯେଉଁ ଅଫିସରମାନଙ୍କୁ ସେ ଘର ପାଇବା ପାଇଁ ଲାଞ୍ଚ ଦେଇଥିଲେ, ସେହି ଅଫିସରମାନେ ହିଁ ଠିକାଦାରଠାରୁ ଲାଞ୍ଚ ନେଇ ନିମ୍ନମାନର କାମକୁ ଅନୁମୋଦନ କରିଥିଲେ। ଘର ପାଇବାର ଲାଞ୍ଚ ହିଁ ତାଙ୍କ ମୃତ୍ୟୁର କାରଣ ହେବାକୁ ଯାଉଥିଲା।`
  }
];

interface ExampleStoriesProps {
  onLoadExample: (example: ExampleStory) => void;
  isLoading: boolean;
}

const ExampleStories: React.FC<ExampleStoriesProps> = ({ onLoadExample, isLoading }) => {
  return (
    <div className="w-full mt-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-slate-300">Need inspiration?</h3>
        <p className="text-slate-400">Click an example to see how it works.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {examples.map((example) => (
          <button
            key={example.title}
            onClick={() => onLoadExample(example)}
            disabled={isLoading}
            className="text-left p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-2 ${
              example.tone === 'Serious' ? 'bg-red-900/50 text-red-300' :
              example.tone === 'Satirical' ? 'bg-yellow-900/50 text-yellow-300' :
              'bg-blue-900/50 text-blue-300'
            }`}>
              {example.tone}
            </span>
            <h4 className="font-bold text-slate-200">{example.title}</h4>
            <p className="text-sm text-slate-400 mt-1">{example.prompt}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExampleStories;