import { DocumentItem } from './DocumentItem';
import type { Document } from '../types';

const documents: Document[] = [
  { id: 1, name: '2024-Q3-Statement.pdf' },
  { id: 2, name: '2023-Tax-Form-1099.pdf' },
];

export function DocumentList() {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <DocumentItem key={doc.id} documentName={doc.name} />
      ))}
    </div>
  );
}
