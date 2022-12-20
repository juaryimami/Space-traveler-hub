/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';

export const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});
