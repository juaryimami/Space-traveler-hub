/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchMission from './missions';

const initialState = {
  missions: [],
  status: null,
};

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMission.pending]: (state) => {
      state.status = 'Loading';
    },
    [fetchMission.rejected]: (state) => {
      state.status = 'failed';
    },
    [fetchMission.fulfilled]: (state, action) => {
      state.status = 'success';
      const newData = [];
      action.payload.forEach((data) => {
        newData.push({
          mission_id: data.mission_id,
          mission_name: data.mission_name,
          description: data.description,
          reserved: false,
        });
      });
      state.missions = [...newData];
    },
  },
});

export default missionSlice.reducer;
