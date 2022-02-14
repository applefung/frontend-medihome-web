export interface CommentType {
  id: string;
  patientUserId: string;
  title: string;
  content: string;
  rating: number;
  time: Date;
}
