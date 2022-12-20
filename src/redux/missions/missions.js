const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';
const initialState = [];

const getMissionsFromApi = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missionData = data.map((item) => ({
    id: item.mission_id,
    name: item.mission_name,
    description: item.description,
  }));
  return missionData;
};

export const getMissions = () => (async (dispatch) => {
  const missions = await getMissionsFromApi();
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default missionsReducer;
