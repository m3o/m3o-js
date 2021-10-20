export declare class AnswerService {
  private client;
  constructor(token: string);
  question(request: QuestionRequest): Promise<QuestionResponse>;
}
export interface QuestionRequest {
  query?: string;
}
export interface QuestionResponse {
  answer?: string;
  image?: string;
  url?: string;
}
