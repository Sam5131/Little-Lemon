// src/context/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on init
  useEffect(() => {
    const savedUser = localStorage.getItem('littleLemonUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('littleLemonUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('littleLemonUser');
    }
  }, [user]);

  const login = (email, password) => {
    // In a real app, this would make an API call
    // For demo purposes, we'll simulate authentication
    
    // Check if user exists in mock database
    const savedUsers = JSON.parse(localStorage.getItem('littleLemonUsers') || '[]');
    const existingUser = savedUsers.find(u => u.email === email);

    if (existingUser) {
      if (existingUser.password === password) {
        const userData = {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          phone: existingUser.phone
        };
        setUser(userData);
        return { success: true, message: 'Login successful!' };
      } else {
        return { success: false, message: 'Incorrect password' };
      }
    } else {
      return { success: false, message: 'User not found. Please register.' };
    }
  };

  const register = (name, email, phone, password) => {
    // Check if user already exists
    const savedUsers = JSON.parse(localStorage.getItem('littleLemonUsers') || '[]');
    const existingUser = savedUsers.find(u => u.email === email);

    if (existingUser) {
      return { success: false, message: 'Email already registered' };
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      password, // In a real app, this would be hashed
      createdAt: new Date().toISOString()
    };

    savedUsers.push(newUser);
    localStorage.setItem('littleLemonUsers', JSON.stringify(savedUsers));

    // Auto login after registration
    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone
    };
    setUser(userData);

    return { success: true, message: 'Registration successful!' };
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    
    // Update in mock database
    const savedUsers = JSON.parse(localStorage.getItem('littleLemonUsers') || '[]');
    const updatedUsers = savedUsers.map(u => 
      u.id === user.id ? { ...u, ...updatedData } : u
    );
    localStorage.setItem('littleLemonUsers', JSON.stringify(updatedUsers));
    
    return { success: true, message: 'Profile updated successfully!' };
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};