import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Profile from '../screens/Profile/Profile';
import '@testing-library/jest-dom';

describe('Check display of missions and rockets on my profile', () => {
  test('check if My Missions is displayed in Profile', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Profile />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });
  test('check if My Rockets is displayed in Profile', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Profile />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
