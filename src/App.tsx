import { useQuery } from 'react-query';
import { User } from './types';
import { getUsers } from './api';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery<User[]>(['users'], getUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  console.log(users);

  return (
    <div className="App">
      <header className="flex justify-center text-3xl font-bold">
        Pet project
      </header>
      <TodoList users={users} />
    </div>
  );
}

export default App;
