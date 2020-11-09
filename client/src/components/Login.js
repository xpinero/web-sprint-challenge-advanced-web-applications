import e from "express";
import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({});

  state = {
    credentials: {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    },
    isLoading: false
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
    .then (res => {
      console.log('Login post request', res)
      localStorage.setItem('token', res.data.token);
      this.props.history.push('/BubblePage');
    })
  }

  const handleChange = e => {
    setCredentials: {
      ...credentials,
      [e.target.name]: e.target.value,
    }
  }
  
  return (
    <div className='loginContainer'>
    <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={this.login}>
      <input 
      type='text'
      name='username'
      value={credentials.username}
      onChange={this.handleChange}
      />
      <input 
      type='password'
      name='password'
      value={credentials.password}
      onChange={this.handleChange}
      />
      <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default Login;
