import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './components/Counter';

describe('Counter component', () => {
  it('renders children content correctly', () => {
    render(<Counter>Test Child</Counter>);

    // Проверка, что текст ребенка отображается
    expect(screen.getByText(/Test Child/i)).toBeInTheDocument();
  });

  it('renders initial counter value', () => {
    render(<Counter>Counter</Counter>);

    // Проверка, что начальное значение счетчика равно 0
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increases the counter value when + button is clicked', () => {
    render(<Counter>Counter</Counter>);

    const incrementButton = screen.getByText('+');

    // Клик по кнопке увеличения
    fireEvent.click(incrementButton);

    // Проверка, что значение счетчика увеличилось до 1
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decreases the counter value when - button is clicked', () => {
    render(<Counter>Counter</Counter>);

    const decrementButton = screen.getByText('-');

    // Клик по кнопке уменьшения
    fireEvent.click(decrementButton);

    // Проверка, что значение счетчика уменьшилось до -1
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('correctly handles multiple increments and decrements', () => {
    render(<Counter>Counter</Counter>);

    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');

    // Несколько кликов на увеличение
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Значение должно быть 2
    expect(screen.getByText('2')).toBeInTheDocument();

    // Несколько кликов на уменьшение
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    // Значение должно быть -1
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});

describe('Counter component snapshot', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Counter>Test Counter</Counter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
