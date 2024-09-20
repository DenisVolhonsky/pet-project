const axios = require('axios');
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { useGeolocation } from './hooks';
import { getUsers, createUser, deleteUser } from './api';

jest.mock('axios');
jest.mock('./api');
jest.mock('./hooks');

console.log(axios)

const queryClient = new QueryClient();

(useGeolocation as jest.Mock).mockReturnValue([50, 30]);

describe('App Compomemt', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    (getUsers as jest.Mock).mockReturnValue(new Promise(() => {})); // Имитируем длительную загрузку

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    screen.debug();

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders error state', async () => {
    (getUsers as jest.Mock).mockRejectedValue(new Error('Error loading users'));

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/Error loading users/i)).toBeInTheDocument(),
    );
  });

  it('renders users and handles delete', async () => {
    (getUsers as jest.Mock).mockResolvedValue([
      { id: 1, name: 'John Doe', coordinates: [50, 30] },
    ]);
    (deleteUser as jest.Mock).mockResolvedValue({});

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument(),
    );

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    await waitFor(() => expect(deleteUser).toHaveBeenCalledWith(1));
  });

  it('handles add user', async () => {
    (getUsers as jest.Mock).mockResolvedValue([]);
    (createUser as jest.Mock).mockResolvedValue({});

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    const addUserButton = screen.getByText(/Add User/i);
    fireEvent.click(addUserButton);

    await waitFor(() => expect(createUser).toHaveBeenCalled());
  });

  it('toggles modal visibility', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    const button = screen.getByText(/Click me!!!/i);
    fireEvent.click(button);

    expect(screen.getByText(/Content of modal window/i)).toBeInTheDocument();
  });

  it('shows and hides popup on mouse enter and leave', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    const popupButton = screen.getByText(/Click me!!!/i);

    fireEvent.mouseEnter(popupButton);
    expect(screen.getByText(/This is popup message/i)).toBeInTheDocument();

    fireEvent.mouseLeave(popupButton);
    await waitFor(() =>
      expect(
        screen.queryByText(/This is popup message/i),
      ).not.toBeInTheDocument(),
    );
  });
});
