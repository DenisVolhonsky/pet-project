import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { User } from './types';
import { createUser, deleteUser, getUsers } from './api';
import { MapComponent, Modal, Popup, TodoList } from './components';
import { useGeolocation } from './hooks';
import './styles/App.css';

function App() {
  const queryClient = useQueryClient();
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery<User[]>(['users'], getUsers);

  const myLocation = useGeolocation();

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

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
      coordinates: myLocation,
    };
    addUserMutation.mutate(newUser);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div className="App">
      <Modal title="My modal" isVisible={isModalVisible} onClose={toggleModal}>
        <p>Content of modal window</p>
      </Modal>
      <button
        className="popup-button"
        onMouseEnter={() => setPopupVisible(true)}
        onMouseLeave={() => setPopupVisible(false)}
        onClick={toggleModal}
      >
        Click me!!!
      </button>
      <div className="app-container">
        <Popup message="This is popup message" isVisible={isPopupVisible} />
        <TodoList
          users={users}
          handleDelete={handleDelete}
          onAddUser={handleAddUser}
        />
        <MapComponent users={users} />
      </div>
    </div>
  );
}

export default App;
