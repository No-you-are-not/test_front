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
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-start gap-3">
        <svg
          className="w-8 h-8 text-blue-500 flex-shrink-0"
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
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{documentName}</h3>

          <button
            onClick={handleGenerateLink}
            disabled={isLoading}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
              isLoading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
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
              'Generate Secure Link'
            )}
          </button>

          {error && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {generatedLink && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Secure link generated:</p>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 font-mono"
                />
                <CopyButton text={generatedLink} />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ⚠️ This link can only be used once
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
