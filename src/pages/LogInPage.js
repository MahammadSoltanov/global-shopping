import React, { Component, useState } from 'react';
import './Login.css'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../FireBase';
import { useNavigate } from 'react-router-dom';

export default function LogInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(auth => navigate('/main'))
      .catch(error => alert(error))
  }

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(auth => navigate('/main'))
      .catch(error => alert(error));
  }
  return (
    <div className='login-page'>

      <div className='login-container'>
        <h1>Welcome to Global Shopping</h1>
        <label className='login-labels'>
          <p>Login</p>
          <input type='email' onChange={(event) => setEmail(event.target.value)}></input>
        </label>

        <label className='login-labels'>
          <p>Password</p>
          <input type='password' onChange={(event) => setPassword(event.target.value)}></input>
        </label>

        <button onClick={signIn} className='sign-in-button'>Sign in</button>
        <p>By Creating an account you agree to Conditons of use and Privacy Notice</p>
        <button className='register-button' onClick={register}>Create account if you doesn't have one</button>
      </div>
    </div>
  )
}

