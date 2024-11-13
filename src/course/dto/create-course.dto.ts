export class CreateCourseDto {
  name: string;
  slug: string;
  description?: string;
  authorId: number;
  knownLanguageId: number;
  learnLanguageId: number;
}
