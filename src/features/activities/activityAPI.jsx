const dummyActivities = [
    { id: 1, user: 'Abhi', action: 'completed a task', time: '2 hours ago' },
    { id: 2, user: 'Ram', action: 'posted an update', time: '3 hours ago' },
    { id: 3, user: 'sahith', action: 'completed a task', time: '5 hours ago' },
    { id: 4, user: 'Raj', action: 'completed a task', time: '10 hours ago' },
    { id: 5, user: 'kamal', action: 'posted an update', time: '12 hours ago'},
    { id: 6, user: 'hari', action: 'posted an update', time: '1 day ago'},
    { id: 7, user: 'shiva', action: 'posted an update', time: '1 day ago'},
    { id: 8, user: 'bharath', action: 'posted an update', time: '2 days ago'},
    { id: 9, user: 'teja', action: 'posted an update', time: '3 days ago'},
    { id: 10, user: 'Salaar', action: 'posted an update', time: '3 days ago'},
  ];
  
 
  export const fetchActivities = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyActivities);
      }, 500);
    });
  };
  