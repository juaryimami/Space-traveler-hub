import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Mission from '../components/mission/Mission';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Mission />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
