import React from 'react';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinedAction, cancelAction } from '../../redux/missions/missions';

function MissionItem({ item }) {
  const {
    id, name, description, reserved,
  } = item;

  const dispatch = useDispatch();

  const reserveClick = (id) => {
    dispatch(joinedAction(id));
  };
  const cancelClick = (id) => {
    dispatch(cancelAction(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {!reserved
          ? <Badge bg="secondary">Not A Member</Badge>
          : <Badge bg="primary">Active Member</Badge>}
      </td>
      <td>
        {reserved
          ? <Button variant="outline-danger" onClick={() => cancelClick(id)}>Leave Mission</Button>
          : <Button variant="outline-secondary" onClick={() => reserveClick(id)}>Join Mission</Button>}
      </td>
    </tr>

  );
}

MissionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
