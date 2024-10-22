export class CreateCourseDto {
  name: string;
  description?: string;
  authorId: number;
  knownLanguageId: number;
  learnLanguageId: number;
}
