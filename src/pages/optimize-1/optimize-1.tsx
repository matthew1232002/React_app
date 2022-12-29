import React, { memo, useState } from 'react';
import { CenteredLayout } from '~/components';
import { useRenderHighlight } from '~/utils';
import css from './optimize-1.module.scss';

const todosData = [
  { id: 1, text: 'run a marathon', done: false },
  { id: 2, text: 'ride an elephant', done: false },
  { id: 3, text: 'swim with a fish', done: false },
];

interface TodoProps {
  text: string;
  done: boolean;
  onClick: () => void;
}

const Todo: React.FC<TodoProps>= memo(({ text, done, onClick }) => {
  const ref = useRenderHighlight(css.render);
  return (
    <li ref={ref} onClick={onClick} className={css.listItem}>
      {done ? '[x]' : '[ ]'} {text}
    </li>
  );
}, (prevProps, nextProps) => prevProps.done === nextProps.done);

export const Optimize1 = () => {
  const [todos, setTodos] = useState(todosData);

  const handleTodoClick = (id: number) => {
      setTodos((prevState) => prevState.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    }

  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todos.map((item) => (
          <Todo
            key={`todo-item-${item.id}`}
            text={item.text}
            done={item.done}
            onClick={() => handleTodoClick(item.id)}
          />
        ))}
      </ul>
    </CenteredLayout>
  );
};