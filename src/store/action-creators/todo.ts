import { TodoAction, TodoActionTypes } from '../../types/todo';
import { Dispatch } from 'redux';
import { deleteTodo, getAllTodo, updateTodo } from '../../api/todos';
import { TodoItem } from '../../components/todo-items-list/todo-items-list';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const { data } = await getAllTodo();
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Fetch todos error' });
    }
  };
};

export const fetchCompletedTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const { data } = await getAllTodo('isDone=true');
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Fetch todos error' });
    }
  }
}

export const updateTodoAction = (todo: TodoItem) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      await updateTodo(todo);
      const { data } = await getAllTodo();
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Fetch todos error' });
    }
  }
}

export const deleteTodoAction = (id: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      await deleteTodo(id);
      dispatch({ type: TodoActionTypes.DELETE_TODO, payload: id });
    } catch (error) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Fetch todos error' });
    }
  }
}

