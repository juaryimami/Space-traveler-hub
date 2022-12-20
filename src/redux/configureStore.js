import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  mission: missionsReducer,
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
