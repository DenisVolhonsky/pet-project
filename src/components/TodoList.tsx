import { useEffect, useRef, useState } from 'react';
import { User } from '../types';
import { Todo } from '../components';
import React from 'react';

interface TodoListProps {
  users: User[];
  handleDelete: (id: number) => void;
  onAddUser: (name: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  users,
  handleDelete,
  onAddUser,
}) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAddUser(name);
      setName(''); // очищаем поле ввода
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  console.log(name);

  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
          <ul>
            {users.map((user) => (
              <Todo key={user.id} user={user} handleDelete={handleDelete} />
            ))}
          </ul>
          <div className="mt-4">
            <input
              ref={inputRef}
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              type="text"
              placeholder="New user..."
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              className="mt-2 w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleAdd}
            >
              Add user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoList);
