import { TodoItem } from '../components/todo-items-list/todo-items-list';


export interface TodoState {
  todos: TodoItem[];
  isLoading: boolean;
  error: string | null;
}

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  DELETE_TODO = 'DELETE_TODO',
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoError {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface FetchTodoSuccess {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: TodoItem[];
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: string;
}

export type TodoAction = FetchTodoAction | DeleteTodoAction | FetchTodoError | FetchTodoSuccess;
