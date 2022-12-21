/* eslint-disable react-hooks/exhaustive-deps */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import fetchMission from '../../redux/missions/missions';
import MissionItem from './Missionitem';

function Mission() {
  const { missions, status } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!status) {
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
            <MissionItem key={item.mission_id} item={item} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Mission;
