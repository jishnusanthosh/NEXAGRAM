// src/components/Login.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async () => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', response.user);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleEmailLogin}>Login with Email</button>
    </div>
  );
};

export default Login;
