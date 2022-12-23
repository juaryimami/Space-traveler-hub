import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionItem from '../components/mission/Missionitem';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const item = {
    mission_id: 1,
    mission_name: 'Thaicom',
    description: 'testing',
    reserved: false,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <MissionItem item={item} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
