import { useMutation, useQuery, useQueryClient } from 'react-query';
import { User } from './types';
import { createUser, deleteUser, getUsers } from './api';
import { TodoList } from './components/TodoList';
import './App.css';
import MapComponent from './components/MapComponent';

function App() {
  const queryClient = useQueryClient();

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery<User[]>(['users'], getUsers);

  const addUserMutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    queryClient.invalidateQueries('users'); // refetch data after removing
  };

  const handleAddUser = (name: string) => {
    const newUser: User = {
      id: Date.now(),
      name,
      coordinates: [48.350125, 10.876974],
    };
    addUserMutation.mutate(newUser);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  console.log(users);

  return (
    <div className="App">
      <TodoList
        users={users}
        handleDelete={handleDelete}
        onAddUser={handleAddUser}
      />
      <MapComponent users={users} />
    </div>
  );
}

export default App;
