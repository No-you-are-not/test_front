import { useState } from 'react';
import { generateLink } from '../services/api';
import { CopyButton } from './CopyButton';

interface DocumentItemProps {
  documentName: string;
}

export function DocumentItem({ documentName }: DocumentItemProps) {
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateLink = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await generateLink(documentName);
      setGeneratedLink(response.link);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate link');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-effect rounded-2xl shadow-pink p-6 border-2 border-pink-100 hover:shadow-pink-lg transition-all duration-300 hover:scale-[1.02] animate-scale-in">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 gradient-soft-pink rounded-2xl flex items-center justify-center border-2 border-pink-200">
            <svg
              className="w-8 h-8 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-4">{documentName}</h3>

          <button
            onClick={handleGenerateLink}
            disabled={isLoading}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md ${
              isLoading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'gradient-pink text-white hover:shadow-pink'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
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
                Generating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Generate Secure Link
              </span>
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl animate-scale-in">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}

          {generatedLink && (
            <div className="mt-4 p-5 gradient-soft-pink border-2 border-pink-200 rounded-xl animate-scale-in">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm font-semibold text-pink-900">Secure link generated!</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 px-4 py-3 bg-white border-2 border-pink-200 rounded-xl text-sm text-gray-700 font-mono focus:outline-none focus:border-pink-400"
                />
                <CopyButton text={generatedLink} />
              </div>
              <div className="mt-3 flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-pink-700 flex-shrink-0 mt-0.5"
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
                <p className="text-xs text-pink-800 font-medium">
                  This link can only be used once
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
