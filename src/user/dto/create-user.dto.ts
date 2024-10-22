export class CreateUserDto {
  firstName: string;
  lastName: string;
  points?: number;
  username: string;
  password: string;
  toLearnPer?: number;
  toReviewPer?: number;
  toSpeedPer?: number;
  toDifficultPer?: number;
}
