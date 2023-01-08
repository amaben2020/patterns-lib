import { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';

const useCtx = () => {
  const { state, dispatch } = useContext(TodoContext);
  return { state, dispatch };
};

export default useCtx;
