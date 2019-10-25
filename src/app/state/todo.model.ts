import { ID } from '@datorama/akita';

export type Todo = {
  id: ID;
  title: string;
  description: string;
  status: string;
};