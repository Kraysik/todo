import { TodoAction, TodoActionTypes, TodoState } from '../../types/todo';

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, isLoading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { isLoading: false, error: null, todos: action.payload };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { isLoading: false, error: action.payload, todos: [] };
    case TodoActionTypes.DELETE_TODO:
      return { ...state, isLoading: false, todos: state.todos.filter(todo => todo._id !== action.payload) };
    default:
      return state;
  }
};
