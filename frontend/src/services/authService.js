import axios from 'axios';

// Update this port/path if your backend API uses a different URL (e.g., http://localhost:5000/api/users)
const API_URL = 'http://localhost:5000/api/auth';

// Login User
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Register / Signup User
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem('user');
};

// Get current user from local storage
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Default export in case components use default import syntax
export default {
  loginUser,
  registerUser,
  logoutUser,
  getCurrentUser,
};