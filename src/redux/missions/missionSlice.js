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
  reducers: {
    reservedMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) { return mission; }
        return { ...mission, reserved: true };
      });
      state.missions = [...newState];
    },
    cancelMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) { return mission; }
        return { ...mission, reserved: false };
      });
      state.missions = [...newState];
    },
  },
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
          url: data.wikipedia,
          reserved: false,
        });
      });
      state.missions = [...newData];
    },
  },
});

export const { reservedMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
