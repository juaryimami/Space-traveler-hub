import React from 'react';
import { useSelector } from 'react-redux';
import styles from './profile.module.css';

function Profile() {
  const missions = useSelector((state) => state.mission);
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

  return (
    <div className={styles.profile_container}>
      <div className={styles.mission_container}>
        <h1>My Missions</h1>
        {/* display no missions joined when array is empty */}
        {arr.length === 0 && <p>No missions joined yet...</p>}
        <div style={styling}>
          {arr.map((name) => (
            <div className={styles.specific_mission} key={name.id}>
              <span>{name.name}</span>
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
