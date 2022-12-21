import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './missions/missionSlice';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  mission: missionReducer,
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
