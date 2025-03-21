import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getActivities } from './activitiesSlice';  
import './activity.css';

const ActivityFeed = () => {
  const dispatch = useDispatch();  
  const { activities, loading, error } = useSelector((state) => state.activities); 

  useEffect(() => {
    dispatch(getActivities());  
  }, [dispatch]);

  if (loading) {
    return <div>Loading activities...</div>;  
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
   <div className='activity-card'>
    <div className='activity-feed'>
      <h2 className='heading'>Activity Feed</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.user}</strong> {activity.action} <em>({activity.time})</em>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default ActivityFeed;

