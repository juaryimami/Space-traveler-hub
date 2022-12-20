/* eslint-disable react/prop-types */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

function MissionItem({ item }) {
  return (
    <tr>
      <td>{item.mission_name}</td>
      <td>{item.description}</td>
      <td>
        <Badge bg="primary">Active Member</Badge>
      </td>
      <td>
        <Button variant="outline-secondary">Join Mission</Button>
      </td>

    </tr>
  );
}

export default MissionItem;
