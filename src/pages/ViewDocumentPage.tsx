import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { redeemLink } from '../services/api';

export function ViewDocumentPage() {
  const { token } = useParams<{ token: string }>();
  const [documentName, setDocumentName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocument = async () => {
      if (!token) {
        setError('No token provided');
        setIsLoading(false);
        return;
      }

      try {
        const response = await redeemLink(token);
        setDocumentName(response.documentName);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load document');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocument();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="glass-effect rounded-3xl shadow-pink-lg p-10 border-2 border-pink-100 animate-scale-in">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-10">
              Super Secret Document Viewer 🕵️
            </h1>

            {isLoading && (
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 gradient-pink rounded-full opacity-20 animate-ping absolute"></div>
                  <svg
                    className="animate-spin h-24 w-24 text-pink-600 relative"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 font-medium">Decrypting secret files... 🔐</p>
                <p className="text-sm text-gray-500 italic">Just kidding, we're just checking if this link is still alive</p>
              </div>
            )}

            {!isLoading && documentName && (
              <div className="space-y-8">
                <div className="flex justify-center animate-bounce-gentle">
                  <div className="w-28 h-28 gradient-pink rounded-full flex items-center justify-center shadow-pink-lg">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-xl text-gray-600 mb-3">
                    🎉 Congrats! You're now viewing the super secret file:
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mb-6">
                    {documentName}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Look at you, being all secure and stuff. We're proud of you. 🥹
                  </p>
                </div>
                <div className="p-5 gradient-soft-pink border-2 border-pink-300 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-pink-700 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div>
                      <p className="text-pink-900 font-semibold mb-1">
                        Mission Impossible Style: This link will self-destruct! 💥
                      </p>
                      <p className="text-pink-800 text-sm">
                        (Actually, it already did. You just used it. It's dead now. RIP link 🪦)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!isLoading && error && (
              <div className="space-y-8">
                <div className="flex justify-center animate-bounce-gentle">
                  <div className="w-28 h-28 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-red-600 mb-3">Oopsie Daisy! 🙈</h2>
                  <p className="text-xl text-gray-700 mb-6">{error}</p>
                </div>
                <div className="p-5 bg-red-50 border-2 border-red-200 rounded-2xl">
                  <p className="text-red-800 font-medium mb-2">
                    This link is deader than a disco. 🕺💀
                  </p>
                  <p className="text-red-700 text-sm">
                    Possible reasons: Someone already viewed it, it never existed in the first place, or it ran away to join the circus.
                    We're betting on option #1 though.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-10">
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 gradient-pink text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-pink hover:shadow-pink-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
