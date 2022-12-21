import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

export default createAsyncThunk('fetch/missions', async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});
