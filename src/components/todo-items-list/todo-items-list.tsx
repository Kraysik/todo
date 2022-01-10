import React, { Dispatch } from 'react';
import Todo from '../todo-item/todo-item';

export interface TodoItemsListProps {
  todoItems: Array<TodoItem>;
  setSingleTodoIsDone?: Dispatch<TodoItem>;
}

export interface TodoItem {
  id: number;
  name: string;
  description?: string;
  isDone: boolean;
}

function TodoItemsList({ todoItems, setSingleTodoIsDone }: TodoItemsListProps) {
  return (
    <>
      { todoItems.map(todoItem => <Todo key={ todoItem.id } setSingleTodoIsDone={setSingleTodoIsDone} { ...todoItem } />) }
    </>
  );
}

export default TodoItemsList;
