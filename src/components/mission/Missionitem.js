/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React from 'react';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { reservedMission, cancelMission } from '../../redux/missions/missionSlice';

function MissionItem({ item }) {
  const dispatch = useDispatch();

  const reserveClick = (id) => {
    dispatch(reservedMission(id));
  };
  const cancelClick = (id) => {
    dispatch(cancelMission(id));
  };

  return (
    <tr>
      <td>{item.mission_name}</td>
      <td>{item.description}</td>
      <td>
        {!item.reserved
          ? <Badge bg="secondary">Not A Member</Badge>
          : <Badge bg="primary">Active Member</Badge>}
      </td>
      <td>
        {item.reserved
          ? <Button variant="outline-danger" onClick={() => cancelClick(item.mission_id)}>Leave Mission</Button>
          : <Button variant="outline-secondary" onClick={() => reserveClick(item.mission_id)}>Join Mission</Button>}
      </td>
    </tr>

  );
}

export default MissionItem;
