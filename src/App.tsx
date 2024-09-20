import { useCallback, useState } from 'react';
import { User } from './types';
import {
  Counter,
  UncontrolledForm,
  MapComponent,
  Modal,
  Popup,
  TodoList,
  ControlledForm,
} from './components';
import { useGeolocation } from './hooks';
import { mockUsers } from './mock';
import './styles/App.css';

const App: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);

  const myLocation = useGeolocation();

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleDeleteUser = useCallback((id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }, []);

  const handleAddUser = useCallback(
    (name: string) => {
      const newUser: User = {
        id: Date.now(),
        name,
        coordinates: myLocation,
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
    },
    [myLocation]
  );

  console.log(users);

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
      <Counter>
        <span>Counter:</span>
      </Counter>
      <div className="app-container">
        <Popup message="This is popup message" isVisible={isPopupVisible} />
        <TodoList
          users={users}
          handleDelete={handleDeleteUser}
          onAddUser={handleAddUser}
        />
        <MapComponent users={users} />
      </div>
      <div className="flex justify-end">
        <UncontrolledForm />
        <ControlledForm />
      </div>
    </div>
  );
};

export default App;
