import React from 'react';
import Todo from '../todo-item/todo-item';

export interface TodoItemsListProps {
  todoItems: Array<TodoItem>;
}

export interface TodoItemStructure {
  name: string;
  description?: string;
  isDone: boolean;
}

export interface TodoItem extends TodoItemStructure {
  _id: string
}

function TodoItemsList({ todoItems }: TodoItemsListProps) {
  return (
    <>
      { todoItems.map(todoItem => <Todo key={ todoItem._id } { ...todoItem } />) }
    </>
  );
}

export default TodoItemsList;
