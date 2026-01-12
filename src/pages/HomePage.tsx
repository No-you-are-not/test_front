import { DocumentList } from '../components/DocumentList';

export function HomePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-scale-in">
          <div className="inline-block mb-6 animate-bounce-gentle">
            <div className="w-20 h-20 mx-auto gradient-pink rounded-3xl flex items-center justify-center shadow-pink-lg transform rotate-12">
              <svg
                className="w-12 h-12 text-white transform -rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Shhh... Top Secret Document Stuff 🤫
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Generate adorably secure, self-destructing* links for your super important documents
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            *Okay, they don't actually explode. But they DO become useless after one use. Same energy, less mess.
          </p>
        </div>

        <DocumentList />

        <div className="mt-10 p-6 glass-effect rounded-3xl shadow-pink border-2 border-pink-100 animate-scale-in">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 gradient-pink rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-pink-900 mb-3">How this magic works ✨</h3>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-pink text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                  <span>Click the button that says "Generate Secure Link" (it's the pink one, you can't miss it)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-pink text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                  <span>Copy the link and share it with your friend/enemy/cat (we don't judge)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-pink text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                  <span>They click it ONCE and see the document. Feel the power!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-pink text-white text-xs font-bold flex items-center justify-center mt-0.5">4</span>
                  <span>Link goes "poof" 💨 and becomes more useless than a chocolate teapot</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
