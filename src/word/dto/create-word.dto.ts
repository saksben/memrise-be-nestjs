export class CreateWordDto {
  name: string;
  translation: string;
  literal?: string;
  pronunciation?: string;
  partOfSpeech?: string;
  gender?: string;
  mems?: string; // Storing as JSON or stringified object
  progress?: number;
  isDifficult?: boolean;
  timeTilReview: Date;
  lessonId: number;
}
