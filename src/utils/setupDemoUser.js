// src/utils/setupDemoUser.js
// Run this once to create a demo account

export const setupDemoUser = () => {
  const demoUser = {
    id: 'demo-123',
    name: 'Demo User',
    email: 'demo@littlelemon.com',
    phone: '5551234567',
    password: 'demo123',
    createdAt: new Date().toISOString()
  };

  const existingUsers = JSON.parse(localStorage.getItem('littleLemonUsers') || '[]');
  
  // Check if demo user already exists
  const userExists = existingUsers.some(u => u.email === demoUser.email);
  
  if (!userExists) {
    existingUsers.push(demoUser);
    localStorage.setItem('littleLemonUsers', JSON.stringify(existingUsers));
    console.log('Demo user created successfully!');
    console.log('Email: demo@littlelemon.com');
    console.log('Password: demo123');
  } else {
    console.log('Demo user already exists');
  }
};

// Call this in your index.js or main App component once
// setupDemoUser();