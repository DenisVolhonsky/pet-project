import React, { createContext, useState } from 'react';

interface MyContextProviderProps {
  children: React.ReactNode;
}

interface contextValue {
  name: string;
  age: number;
  isAuthenticated: boolean;
  theme: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<contextValue | null>(null);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(30);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light');

  const contextValue: contextValue = {
    name,
    age,
    isAuthenticated,
    theme,
    setName,
    setAge,
    setIsAuthenticated,
    setTheme,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
