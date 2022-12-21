import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import fetchMission from '../../redux/missions/missions';
import styles from './profile.module.css';
import { cancelMission } from '../../redux/missions/missionSlice';

function Profile() {
  const dispatch = useDispatch();
  const { missions, status } = useSelector((state) => state.mission);
  const rockets = useSelector((state) => state.rockets);

  const arr = missions.filter((mission) => mission.reserved);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);
  // Remove border when filtered array is empty
  const styling = {
    border: arr.length === 0 ? 'none' : '1px solid #e3e3e3',
  };

  const reservedRocketsstyling = {
    border: rocketsReserved.length === 0 ? 'none' : '1px solid #e3e3e3',
  };

  useEffect(() => {
    if (!status) {
      dispatch(fetchMission());
    }
  }, []);

  const cancelClick = (id) => {
    dispatch(cancelMission(id));
  };

  return (
    <div className={styles.profile_container}>
      <div className={styles.mission_container}>
        <h1>My Missions</h1>
        {/* display no missions joined when array is empty */}
        {arr.length === 0 && <p>No missions joined yet...</p>}
        <div style={styling}>
          {arr.map((item) => (
            <div className={styles.specific_mission} key={item.mission_id}>
              <Row>
                <Col>{item.mission_name}</Col>
                <Col>
                  <Button variant="outline-primary" href={item.url} target="_blank">Read More</Button>
                  <Button variant="outline-danger" className="mt-2" onClick={() => cancelClick(item.mission_id)}>Leave Mission</Button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rockets_container}>
        <h1>My Rockets</h1>
        {rocketsReserved.length === 0 && <p>No Rockets reserved yet...</p>}
        <div style={reservedRocketsstyling}>
          {rocketsReserved.map((rocket) => (
            <div className={styles.reservedRocket} key={rocket.id}>
              <span>{rocket.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Profile;
