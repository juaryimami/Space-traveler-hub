import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'space-travelers-hub/rockets/GET_ROCKETS';
const ROCKET_RESERVED = 'space-travelers-hub/rockets/ROCKET_RESERVED';
const ROCKET_CANCELED = 'space-travelers-hub/rockets/ROCKET_CANCELED';

const initialState = [];

// Calling API
const getRocketsFromAPI = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    description: rocket.description,
    imgs: rocket.flickr_images,
  }));
  return rockets;
};

// Action creator
export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  try {
    return await getRocketsFromAPI();
  } catch (error) {
    return error;
  }
});

export const reservedRocket = (payload) => ({
  type: ROCKET_RESERVED,
  payload,
});

export const canceledRocket = (payload) => ({
  type: ROCKET_CANCELED,
  payload,
});

// Reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    case ROCKET_RESERVED:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    case ROCKET_CANCELED:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default rocketsReducer;
