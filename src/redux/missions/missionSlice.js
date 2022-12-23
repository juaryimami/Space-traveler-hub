import {
  FETCH, JOINED, CANCEL,
} from './missions';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return action.payload.map((data) => ({
        id: data.mission_id,
        name: data.mission_name,
        description: data.description,
        url: data.wikipedia,
        reserved: false,
      }));
    case JOINED:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case CANCEL:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionReducer;
