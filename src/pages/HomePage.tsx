import { DocumentList } from '../components/DocumentList';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Secure Document Link Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate secure, one-time-use links for your sensitive documents
          </p>
        </div>

        <DocumentList />

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">How it works:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
            <li>Click "Generate Secure Link" for any document</li>
            <li>Copy the generated link and share it securely</li>
            <li>The recipient can view the document once using the link</li>
            <li>After viewing, the link becomes invalid for security</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
