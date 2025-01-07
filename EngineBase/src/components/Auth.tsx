import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    try {
      const response = await axios.post(endpoint, { username, password });
      console.log(response.data);
      if (isLogin) localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Authentication failed:', error.response?.data?.error || error.message);
    }
  };

  return (
    <div>
      
    </div>
  );
};

export default Auth;
