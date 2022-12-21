import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import RocketCard from '../../components/RocketCard/RocketCard';

let render = true;

function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getRockets());
  }, [dispatch]);

  const rockets = useSelector((state) => state.rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <RocketCard key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
}

export default Rockets;
