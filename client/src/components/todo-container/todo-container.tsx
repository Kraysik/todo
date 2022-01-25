import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import ActiveTodos from '../active-todos/active-todos';
import CompletedTodos from '../completed-todos/completed-todos';

const TodoContainer = () => {
  const { isUncompletedTodos } = useAppSelector(state => state.ui);

  return (
    <>
      { isUncompletedTodos ? <ActiveTodos/> : <CompletedTodos/> }
    </>
  );
};

export default TodoContainer;
