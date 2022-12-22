import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../screens/Rockets/Rockets';

describe('Rockets Screen', () => {
  test('render all rockets', () => {
    const rockets = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Rockets />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
