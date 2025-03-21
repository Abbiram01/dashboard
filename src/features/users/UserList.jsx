import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';
import './users.css';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
      dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='users-card'>
      <div className='user-list'>
        <h2 className='heading'>User List</h2>
      <div>
        <input className='search-bar'
          type="text"
          placeholder="Search users by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.points} Points {'\u2B50'}
            </li>
          ))
        ) : (
          <p>No users found matching your search criteria.</p>
        )}
      </ul>
    </div>
  </div>
  );
};

export default UserList;

