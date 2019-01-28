export class PostdataModel {
  id: number;
  title: string;
  created_date: Date;
  is_anonymous: boolean;
  author: number = 1;
  text: string;
}
