import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Register: React.FC = () => {
  const { register, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleRegister = async () => {
    try {
      const data = await register(email, password, name, profilePicture);
      console.log('User registered:', data);
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Profile Picture URL" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
      <button onClick={handleRegister} disabled={loading}>Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
