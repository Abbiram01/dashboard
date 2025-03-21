const mockUsers = [
      { id: 1, name: 'Abhi', points:'100' },
      { id: 2, name: 'Ram', points: '300'},
      { id: 3, name: 'sahith', points: '50' },
      { id: 4, name: 'Raj', points: '10' },
      { id: 5, name: 'kamal', points: '40' },
      { id: 6, name: 'hari', points: '10' },
      { id: 7, name: 'bharath', points: '60' },
    ];
  
export const getUsers =  () => {
    return new Promise((resolve) => {
      setTimeout(() =>
        resolve(mockUsers), 1000);  
    });
  };
  