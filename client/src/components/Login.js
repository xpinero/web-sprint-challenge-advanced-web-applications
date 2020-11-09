import e from "express";
import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('login/endpoint', credentials)
    .then (res => {
      localStorage.setItem('token', res.data.token);
      this.props.history.push('/');
    })
  }

  const handleChange = e => {
    setCredentials: {
      ...credentials,
      [e.target.name]: e.target.value,
    }
  }
  return (
    <div>
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
      <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
