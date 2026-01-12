export interface Document {
  id: number;
  name: string;
}

export interface GenerateLinkResponse {
  link: string;
}

export interface RedeemLinkResponse {
  documentName: string;
}

export interface ErrorResponse {
  error?: string;
  message?: string | string[];
  statusCode?: number;
}
