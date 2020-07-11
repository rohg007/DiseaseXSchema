import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

function AppNavBar() {
  let history = useHistory();
  const [logoutoption, setLogoutOption] = React.useState(true);
  return (
    <div className='container-fluid p-0'>
      <Navbar color='dark' dark expand='lm' className='mb-5'>
        <Container>
          <NavbarBrand href='/'>DiseaseX</NavbarBrand>
          {localStorage.user ? (
            <div
              onClick={() => {
                localStorage.removeItem('user');
                setLogoutOption(!logoutoption);
                history.replace('/');
              }}
              className='ml-auto'
              style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              LogOut
            </div>
          ) : (
            <div
              onClick={() => {
                history.push('/signup');
              }}
              className='ml-auto'
              style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              Register
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavBar;
