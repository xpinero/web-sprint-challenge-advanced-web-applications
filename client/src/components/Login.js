import e from "express";
import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({});

  // state = {
  //   credentials: {
  //     username: 'Lambda School',
  //     password: 'i<3Lambd4'
  //   },
  //   isLoading: false
  // }

  const loginCred = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
    .then(res => {
      console.log('Login post req res', res)
      localStorage.setItem('token', res.data.payload);
      props.history.push('/BubblePage');
    })
    .catch(err => console.log(err))
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }
  
  return (
    <div className='loginContainer'>
    <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={loginCred}>
      <label>Lambda School</label>
      <input 
      type='text'
      name='username'
      value={credentials.username}
      onChange={handleChange}
      />
      <label>{`i<3Lambd4`}</label>
      <input 
      type='password'
      name='password'
      value={credentials.password}
      onChange={handleChange}
      />
      <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default Login;
