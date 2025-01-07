import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

export const registerUser = async (email: string, password: string, name?: string, profilePicture?: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      email,
      password,
      name,
      profilePicture,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(err.response?.data?.error || 'Registration failed');
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};
