import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './signup.css';

export default class Login extends Component {
  render() {
    return (
      <div
        class='card'
        body
          inverse
        style={{
          marginLeft: '20%',
          marginRight: '20%',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.45)',
          borderColor: '#333',
      
        }}
      >

        <div class='card-header'>
          <h3>Sign Up</h3>
        </div>
        <div class='card-body'>
          <div className='form-group'>
            <label>Health Center name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Name of health center'
            />
          </div>

          <div className='form-group'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
            />
          </div>
          <div className='form-group'>
            <label>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
            />
          </div>
        </div>
        <div class='card-footer'>
          
        <button type='submit' className='btn btn-primary btn-block'>
            Sign Up
          </button>
          <p className='forgot-password text-right'>
            Already registered <a href='/loginPage'>sign in?</a>
          </p>
        </div>
      </div>
    );
  }
}
