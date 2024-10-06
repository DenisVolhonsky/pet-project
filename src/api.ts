import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from './types';

const API_URL = 'https://66e95d1987e41760944921fc.mockapi.io/api/v1/users';

export const getUsers = async (): Promise<User[] | undefined> => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error(`Error getting users:${error}`);
    throw error;
  }
};

// example getUsers with hook useGetUsers
export const useGetUsers = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (err) {
        setError(`Error fetching user: ${err}`);
        console.error(`Error fetching user: ${err}`);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { users, loading, error };
};

export const createUser = async (user: User): Promise<User | null> => {
  const response = await axios.post<User>(API_URL, user);
  return response.data;
};

export const updateUser = async (
  userId: number,
  updatedUser: User
): Promise<User> => {
  const response = await axios.put<User>(`${API_URL}/${userId}`, updatedUser);
  return response.data;
};

export const deleteUser = async (userId: number): Promise<void> => {
  await axios.delete(`${API_URL}/${userId}`);
};
