import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

import { getRewards } from './rewardsSlice'; 
import './rewards.css';

const RewardsList = () => {
  const dispatch = useDispatch();  
  const { rewards, loading, error } = useSelector((state) => state.rewards);  

  useEffect(() => {
    dispatch(getRewards());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;  
  }

  return (
    <div className='rewards-card'>
    <div className='rewards-list'>
      <h2 className='heading'>Available Rewards</h2>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            <h3>{reward.title}</h3>
            <p>{reward.description}</p>
            <p><strong>Points Required:</strong> {reward.pointsRequired}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default RewardsList;
