/* eslint-disable import/first */
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockedUsedNavigate,
 }));

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import renderer from 'react-test-renderer';
import UserScreen from './';

test('renders userscreen correctly - snapshot', () => {
  const tree = renderer
    .create(<UserScreen/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('user screen render title', () => {
    render(<UserScreen />);
    const titleText = screen.getByText(/Here's some info about the user:/i);
    expect(titleText).toBeInTheDocument();
  });

test('navigate back button should be enabled on first render', () => {
    render(<UserScreen />);
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeEnabled();
  });