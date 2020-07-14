import React, { Component } from 'react';
import Background from '../images/background.jpg';
import createAnimalCase from '../api/animalCase/createAnimalCase';
var sectionStyle = {
  backgroundImage: 'url(' + Background + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: '2',
};

export default class New_animal_case extends Component {
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    console.log('we are here');
    let animalCase = {
      animal: {
        status: 'Deceased',
        breed: 'Duck',
        owner: {
          name: 'Michael Faraday',
          address: '8 Pleasant Rd. Glen Burnie',
          email: 'michael@gmail.com',
          contact: '9100020123',
        }
      },
      disease: {
        name: 'Blackleg',
        symptoms: 'Dark Leg, Heavy,Painful movement of legs',
  
      },
      healthCenter: {
        address: 'Narayan Circle Bihar',
        email: 'suraksha@yahoo.com',
        contact: '1234-9876541',
        name: 'Suraksha Vibhag ',
        latlng: '41.40334, 2.17402',
        incharge: 'Miss Narayani',
        pincode: '305001',
        web: 'surakshakendra.in',
        total_recovered: '40',
        total_affected: '60',
        total_deaths:'5',
      },
      latlng: '25.010021,12.907654',
    };

    try {
      createAnimalCase(animalCase)
        .then((response) => {
          console.log('Success Create');
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log('Server' + err);
    }
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
          <h3>Animal details</h3>
        </div>
        <div class='card-body'>
          <div className='form-group'>
            <label>Owner Name</label>
            <input type='text' className='form-control' placeholder='Name' />
          </div>

          <div className='form-group'>
            <label>Owner's Email Address</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
            />
          </div>

          <div className='form-group'>
            <label>Breed</label>
            <input
              type='text'
              className='form-control'
              placeholder='Type of Animal'
            />
          </div>

          <div className='form-group'>
            <label>Owner's Contact Number</label>
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
          <button
            type='submit'
            onClick={this.submit}
            className='btn btn-primary btn-block'
          >
            Submit
          </button>
          <p className='forgot-password text-right'>
            <a href='/animal_case'>All Cases? </a>

            <a href='/new_humancase'>Add Human Case?</a>
          </p>
        </div>
      </div>
    );
  }
}
