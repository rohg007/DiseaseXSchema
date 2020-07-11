import React from 'react';
import { useHistory } from 'react-router-dom';
import SignUp from '../api/auth/signUpApi.jsx';
import './signup.css';

function SignUpPage() {
  let history = useHistory();
  const [healthcenterName, setHealthcenterName] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [inCharge, setIncharge] = React.useState('');
  const [web, setWeb] = React.useState('');
  const [error, setError] = React.useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    contactError: '',
    inChargeError: '',
    overAllError: '',
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!email || !password || !healthcenterName || !contact || !inCharge) {
      setError((error) => ({
        ...error,
        overAllError: 'Please enter the required Values!',
      }));
      return;
    }
    try {
      setLoading(true);
      SignUp({
        name: healthcenterName,
        email: email,
        password: password,
        contact: contact,
        incharge: inCharge,
        web: web,
      })
        .then((response) => {
          setError((error) => ({
            ...error,
            nameError: '',
            emailError: '',
            contactError: '',
            passwordError: '',
            inChargeError: '',
            overAllError: '',
            confirmPasswordError: '',
          }));
          setLoading(false);
          localStorage.setItem('user', JSON.stringify(response.data));
          history.replace('/animal_case');
        })
        .catch((err) => {
          setLoading(false);
          setError((error) => ({
            ...error,
            overAllError: err,
          }));
        });
    } catch (error) {
      setError((error) => ({
        ...error,
        overAllError: error,
      }));
    }
  }
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
      <form onSubmit={handleFormSubmit}>
        <div class='card-body'>
          <div className='form-group'>
            <label htmlFor='name'>Health Center name</label>
            <input
              type='text'
              id='name'
              autoComplete='off'
              required
              className='form-control'
              onChange={(event) => {
                setHealthcenterName(event.target.value);
                setError((error) => ({ ...error, nameError: '' }));
              }}
              onBlur={() =>
                healthcenterName.length === 0
                  ? setError((error) => ({
                      ...error,
                      nameError: 'Field cannot be empty',
                    }))
                  : null
              }
              placeholder='Enter Name'
            />
            <div className='errorLabel'>
              <p className='p-0'>{error.nameError}</p>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              required
              id='email'
              autoComplete='on'
              className='form-control'
              placeholder='Enter email'
              onChange={(event) => {
                setEmail(event.target.value);
                setError((error) => ({ ...error, emailError: '' }));
              }}
              onBlur={() =>
                email.length === 0
                  ? setError((error) => ({
                      ...error,
                      emailError: 'Enter a valid Email',
                    }))
                  : null
              }
            />
            <div className='errorLabel'>
              <p className='p-0'>{error.emailError}</p>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              autoComplete='off'
              required
              className='form-control'
              placeholder='Enter password'
              onChange={(event) => {
                setPassword(event.target.value);
                setError((error) => ({ ...error, passwordError: '' }));
              }}
              onBlur={() =>
                password.length < 6
                  ? setError((error) => ({
                      ...error,
                      passwordError:
                        'Password should be atleast 6 characters long!',
                    }))
                  : null
              }
            />
            <div className='errorLabel'>
              <p className='p-0'>{error.passwordError}</p>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmpassword'
              autoComplete='off'
              required
              className='form-control'
              placeholder='Confirm password'
              onChange={(event) => {
                setConfirmPassword(event.target.value);
                setError((error) => ({ ...error, confirmPasswordError: '' }));
              }}
              onBlur={() =>
                password !== confirmPassword
                  ? setError((error) => ({
                      ...error,
                      confirmPasswordError: "Doesn't match the password!",
                    }))
                  : null
              }
            />
            <div className='errorLabel'>
              <p className='p-0'>{error.confirmPasswordError}</p>
            </div>
          </div>
          <div className='d-flex align-items-center jsutify-content-center'>
            <div className='flex-fill pr-3'>
              <div className='form-group'>
                <label htmlFor='contactNumber'>Contact</label>
                <input
                  type='number'
                  id='contactNumber'
                  autoComplete='off'
                  required
                  className='form-control'
                  placeholder='Contact Info.'
                  onChange={(event) => {
                    setContact(event.target.value);
                    setError((error) => ({ ...error, contactError: '' }));
                  }}
                  onBlur={() =>
                    contact[0] === 0
                      ? setError((error) => ({
                          ...error,
                          contactError: 'please exclude zero from starting',
                        }))
                      : contact.length !== 10
                      ? setError((error) => ({
                          ...error,
                          contactError: 'Please enter a valid phone number',
                        }))
                      : null
                  }
                />
                <div className='errorLabel'>
                  <p className='p-0'>{error.contactError}</p>
                </div>
              </div>
            </div>
            <div className='flex-fill pr-3'>
              <div className='form-group'>
                <label htmlFor='incharge'>In Charge</label>
                <input
                  type='text'
                  id='incharge'
                  autoComplete='off'
                  required
                  className='form-control'
                  placeholder='InCharge Of:'
                  onChange={(event) => {
                    setIncharge(event.target.value);
                    setError((error) => ({ ...error, inChargeError: '' }));
                  }}
                  onBlur={() =>
                    inCharge.length === 0
                      ? setError((error) => ({
                          ...error,
                          inChargeError: 'Field cannot be empty',
                        }))
                      : null
                  }
                />
                <div className='errorLabel'>
                  <p className='p-0'>{error.inChargeError}</p>
                </div>
              </div>
            </div>
            <div className='flex-fill '>
              <div className='form-group'>
                <label htmlFor='web'>Web Link</label>
                <input
                  type='text'
                  id='web'
                  autoComplete='off'
                  className='form-control'
                  placeholder='web Link if Any!'
                  onChange={(event) => {
                    setWeb(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div class='card-footer d-flex align-items-center flex-column'>
          <div className='ml-auto'>
            <button
              type='submit'
              style={{ width: '150px' }}
              className='btn btn-primary btn-block'
            >
              Sign Up
            </button>
          </div>

          <div className='ml-auto'>
            <p className='forgot-password p-0'>
              Already registered <a href='/loginPage'>sign in?</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
