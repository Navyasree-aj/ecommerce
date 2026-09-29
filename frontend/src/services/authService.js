import api from './api';

export const loginUser = async (credentials) => {
  const response = await api.post('/api/auth/login', credentials);

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || 'Login failed');

    error.response = {
      data,
      status: response.status,
    };

    throw error;
  }

  return data;
};

export const registerUser = async (userData) => {
  const response = await api.post('/api/auth/register', userData);

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || 'Registration failed');

    error.response = {
      data,
      status: response.status,
    };

    throw error;
  }

  return data;
};