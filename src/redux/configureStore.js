<<<<<<< HEAD
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
=======
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';

export const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});
>>>>>>> 0f27a82303552d4edf3d36dd270be7ab7cebe515
