import { QuestionInterface } from 'interfaces/question';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AnswerInterface {
  id?: string;
  content: string;
  question_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  question?: QuestionInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AnswerGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  question_id?: string;
  user_id?: string;
}
