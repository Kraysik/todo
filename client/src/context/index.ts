import { createContext, Dispatch } from 'react';
import { TodoItem } from '../components/todo-items-list/todo-items-list';

export interface AppContextInterface {
  todos: TodoItem[];
  setTodos: Dispatch<TodoItem[]>;
  isTodosShowed: boolean;
  setIsTodosShowed: Dispatch<boolean>;

  getTodos: (query?: string) => void;
  removeTodoFromList: (todo: TodoItem) => void;
}

export const AppContext = createContext<AppContextInterface | null>(null);
