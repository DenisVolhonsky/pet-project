import { useState } from 'react';

interface CounterProps {
  children: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ children }) => {
  const [result, setResult] = useState(0);

  const handleIncrease = () => {
    setResult((prevResult) => prevResult + 1);
  };

  const handleDecrise = () => {
    setResult((prevResult) => prevResult - 1);
  };

  return (
    <div>
      {children}
      <span>{result}</span>
      <button
        className="mt-2 bg-indigo-500 text-white p-1 mr-2 ml-2"
        onClick={handleIncrease}
      >
        +
      </button>
      <button
        className="mt-2 bg-indigo-500 text-white p-1"
        onClick={handleDecrise}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
