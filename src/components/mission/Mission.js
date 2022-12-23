import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import fetchMission from '../../redux/missions/missions';
import MissionItem from './Missionitem';

function Mission() {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMission());
    }
  }, []);

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((item) => (
            <MissionItem key={item.id} item={item} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Mission;
