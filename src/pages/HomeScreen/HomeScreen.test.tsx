/* eslint-disable import/first */
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockedUsedNavigate,
 }));

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './';

test('renders homescreen correctly - snapshot', () => {
  const tree = renderer
    .create(<HomeScreen/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('HomeScreen render title', () => {
    render(<HomeScreen />);
    const titleText = screen.getByText(/Git-A-User!/i);
    expect(titleText).toBeInTheDocument();
  });

test('search button should be disabled on first render', () => {
    render(<HomeScreen />);
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeDisabled();
  });

  test('search button should be enabled when input has a value', () => {
    render(<HomeScreen />);
    userEvent.type(screen.getByPlaceholderText(/Github username/i), "Sif1");
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeEnabled();
  });


