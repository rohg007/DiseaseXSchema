import React, { Component } from 'react';
import Background from '../images/background.jpg';

var sectionStyle = {
  backgroundImage: 'url(' + Background + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: '2',
};

export default class New_human_case extends Component {
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
          backgroundColor: 'rgba(0,0,0,0.40)',
          borderColor: '#333',
        }}
      >
        <div class='card-header'>
          <h3>Patient Details</h3>
        </div>
        <div class='card-body'>
          <div className='form-group'>
            <label>Patient's Name</label>
            <input type='text' className='form-control' placeholder='Name' />
          </div>

          <div className='form-group'>
            <label>Patient's Email Address</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
            />
          </div>

          <div className='form-group'>
            <label>Patient's Address</label>
            <input type='text' className='form-control' placeholder='Address' />
          </div>

          <div className='form-group'>
            <label>Contact Number</label>
            <input
              type='text'
              className='form-control'
              placeholder='Phone Number'
            />
          </div>

          <div className='form-group'>
            <label>Status</label>
            <div onChange={this.onChangeValue}>
              <input type='radio' /> Infected
              <input type='radio' /> Deceased
              <input type='radio' /> Recovered
            </div>
          </div>
        </div>
        <div class='card-footer'>
          <button type='submit' className='btn btn-primary btn-block'>
            Submit
          </button>
          <p className='forgot-password text-right'>
            <a href='/human_case'>All Cases? </a>

            <a href='/new_animalcase'>Add Animal Case?</a>
          </p>
        </div>
      </div>
    );
  }
}
