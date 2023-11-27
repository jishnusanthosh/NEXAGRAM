// src/components/Signup.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailSignup = async () => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User created:', response.user);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const handlePhoneSignup = async () => {
    // Implement phone signup using Firebase
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleEmailSignup}>Sign up with Email</button>

      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handlePhoneSignup}>Sign up with Phone</button>
    </div>
  );
};

export default Signup;
