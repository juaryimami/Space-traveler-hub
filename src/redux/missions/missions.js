import { createAsyncThunk } from '@reduxjs/toolkit';

export const FETCH = 'FETCH/MISSIONS';
export const JOINED = 'JOINED/MISSIONS';
export const CANCEL = 'CANCEL/MISSIONS';

const URL = 'https://api.spacexdata.com/v3/missions';

export default createAsyncThunk(FETCH, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export const joinedAction = (payload) => ({
  type: JOINED,
  payload,
});

export const cancelAction = (payload) => ({
  type: CANCEL,
  payload,
});
