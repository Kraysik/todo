import React, { Dispatch } from 'react';
import Todo from '../todo-item/todo-item';

export interface TodoItemsListProps {
  todoItems: Array<TodoItem>;
  setSingleTodoIsDone?: Dispatch<TodoItem>;
}

export interface TodoItemStructure {
  name: string;
  description?: string;
  isDone: boolean;
}

export interface TodoItem extends TodoItemStructure {
  _id: string
}
function TodoItemsList({ todoItems, setSingleTodoIsDone }: TodoItemsListProps) {
  return (
    <>
      { todoItems.map(todoItem => <Todo key={ todoItem._id } setSingleTodoIsDone={setSingleTodoIsDone} { ...todoItem } />) }
    </>
  );
}

export default TodoItemsList;
