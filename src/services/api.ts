import type { GenerateLinkResponse, RedeemLinkResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Generate a secure link for a document
 */
export async function generateLink(documentName: string): Promise<GenerateLinkResponse> {
  const response = await fetch(`${API_BASE_URL}/api/generate-link`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ documentName }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to generate link' }));
    throw new Error(error.message || 'Failed to generate link');
  }

  return await response.json();
}

/**
 * Redeem a secure link to view the document
 */
export async function redeemLink(token: string): Promise<RedeemLinkResponse> {
  const url = `${API_BASE_URL}/api/docs/view/${token}`;
  console.log('Calling backend API:', url);
  console.log('API_BASE_URL:', API_BASE_URL);

  const response = await fetch(url);

  if (response.status === 404) {
    console.error('Got 404 from backend');
    throw new Error('Invalid or expired link.');
  }

  if (!response.ok) {
    console.error('Backend error:', response.status, response.statusText);
    const error = await response.json().catch(() => ({ message: 'Failed to redeem link' }));
    throw new Error(error.message || 'Failed to redeem link');
  }

  return await response.json();
}
