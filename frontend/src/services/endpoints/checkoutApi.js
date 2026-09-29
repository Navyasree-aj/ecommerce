import api from '../api';

export const createOrder = async (orderData) => {
  // Skeleton API call for MERN backend integration
  const response = await api.post('/orders', orderData);
  return response.data;
};