import React from 'react';
import UserList from './features/users/UserList';
import ActivityFeed from './features/activities/ActivityFeed';
import RewardsList from './features/rewards/RewardsList';
import './App.css';

function App() {

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="heading">Reward System Dashboard</h1>
      </div>
      <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <ActivityFeed />
        <UserList />
        <RewardsList />
      </div>
      </div>
    </div>
  )
}

export default App
