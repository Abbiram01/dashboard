const dummyRewards = [
    { id: 1, title: 'Free Coffee', pointsRequired: 50, description: 'Get a free coffee after 50 points.' },
    { id: 2, title: 'Discount Voucher', pointsRequired: 100, description: 'Get a $10 discount voucher after 100 points.' },
    { id: 3, title: 'Gift Card', pointsRequired: 200, description: 'Earn a $50 gift card after 200 points.' },
  ];
  
  
  export const fetchRewards = () => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyRewards); 
      }, 500); 
    });
  };
  