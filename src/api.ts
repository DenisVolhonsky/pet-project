import axios from 'axios';
import { User } from './types';

const API_URL = 'https://66e95d1987e41760944921fc.mockapi.io/api/v1/users';

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
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
