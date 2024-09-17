import { User } from '../types';

interface TodoProps {
  user: User;
  handleDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ user, handleDelete }) => {
  return (
    <li className="flex justify-between items-center py-2 border-b border-gray-200">
      <span>{user.name}</span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleDelete(user.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
