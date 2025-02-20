import { useState, useTransition } from 'react';
// import 'tailwindcss/tailwind.css';

export const FetchButton = () => {
  const [todoList, setTodoList] = useState<ToDo[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, startTransition] = useTransition();

  const handleOnClick = () => {
    startTransition(async () => {
      try {
        const todos = await fetchTodoList();
        setTodoList(todos);
      } catch (error) {
        setError((error as Error).message);
      }
    });
  };

  return (
    <div className='flex flex-col items-center max-w-md mx-auto'>
      <button
        onClick={handleOnClick}
        disabled={isLoading}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
      >
        Fetch ToDos
      </button>
      <br />
      <TodoList todos={todoList} isLoading={isLoading} error={error} />
    </div>
  );
};

type ToDo = {
  id: number;
  task: string;
};

type ToDoListProps = {
  todos: ToDo[];
  isLoading: boolean;
  error: string;
};

const TodoList = ({ todos, isLoading, error }: ToDoListProps) => {
  if (isLoading) {
    return (
      <div className='loader border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-10 h-10 animate-spin'></div>
    );
  }

  if (error) {
    return <p className='text-black font-bold mt-2 text-lg'>Error: {error}</p>;
  }

  return (
    <ul className='list-none p-0 w-full'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className='p-2 border-b border-gray-300 last:border-b-0'
        >
          {todo.task}
        </li>
      ))}
    </ul>
  );
};

const fetchTodoList = async (): Promise<ToDo[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error('Failed to fetch ToDo list'));
      } else {
        resolve([
          { id: 1, task: 'Do laundry' },
          { id: 2, task: 'Buy groceries' },
          { id: 3, task: 'Clean the house' },
          { id: 4, task: 'Cook dinner' },
          { id: 5, task: 'Walk the dog' },
          { id: 6, task: 'Wash the car' },
          { id: 7, task: 'Take out the trash' },
          { id: 8, task: 'Mow the lawn' },
          { id: 9, task: 'Water the plants' },
          { id: 10, task: 'Vacuum the floor' },
        ]);
      }
    }, 3000);
  });
};
