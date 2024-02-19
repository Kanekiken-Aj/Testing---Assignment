import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UncontrolledComponent from './UncontrolledComponent'; // Assuming the component is in a file named UncontrolledComponent.js

describe('UncontrolledComponent', () => {
  test('renders without crashing', () => {
    render(<UncontrolledComponent />);
  });

  test('displays initial value', () => {
    const { getByTestId } = render(<UncontrolledComponent defaultValue="Initial Value" />);
    expect(getByTestId('input')).toHaveValue('Initial Value');
  });

  test('updates input value on change', () => {
    const { getByTestId } = render(<UncontrolledComponent />);
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input).toHaveValue('New Value');
  });

  test('calls onChange callback when input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<UncontrolledComponent onChange={onChangeMock} />);
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'Changed Value' } });
    expect(onChangeMock).toHaveBeenCalledWith('Changed Value');
  });

  // Add more test cases as needed
});
