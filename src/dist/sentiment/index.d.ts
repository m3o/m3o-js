export declare class SentimentService {
  private client;
  constructor(token: string);
  analyze(request: AnalyzeRequest): Promise<AnalyzeResponse>;
}
export interface AnalyzeRequest {
  lang?: string;
  text?: string;
}
export interface AnalyzeResponse {
  score?: number;
}
