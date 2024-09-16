import { User } from '../types';
import Todo from './Todo';

interface TodoListProps {
  users: User[];
}

export const TodoList: React.FC<TodoListProps> = ({ users }) => {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
          <ul>
            {users.map((user) => (
              <Todo key={user.id} user={user} />
            ))}
          </ul>
          <div className="mt-4">
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              type="text"
              placeholder="New task..."
            />
            <button className="mt-2 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
