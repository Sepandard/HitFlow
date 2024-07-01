export interface FeedbackModel {
  feeling: FeedbackFeeling;
  message?: string;
}

export interface FeedbackResponse {
  id: number;
  message: string;
  creationTime: string;
  feeling: FeedbackFeeling;
  userId?: number;
}

export interface FeedbackListItem {
  id: number;
  message?: string;
  feeling: FeedbackFeeling;
}

export enum FeedbackFeeling {
  TERRIBLE = 1,
  BAD = 2,
  NORMAL = 3,
  GOOD = 4,
  FANATIC = 5,
}
