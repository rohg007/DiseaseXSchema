import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

function AppNavBar() {
  let history = useHistory();
  const [logoutoption, setLogoutOption] = React.useState(true);
  return (
    <div className='container-fluid p-0 sticky-top'>
      <Navbar color='dark' dark expand='lm' className='mb-5 '>
        <Container>
          <NavbarBrand href={localStorage.user ? '/health_center' : '/'}>
            DiseaseX
          </NavbarBrand>
          {localStorage.user ? (
            <div className='dropdown'>
              <div
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <div
                  className={`userSectionBackground d-flex justify-content-center align-items-center`}
                >
                  <p className='mb-0 text-white'>
                    {JSON.parse(localStorage.user).name[0]}
                  </p>
                </div>
              </div>
              <div
                className={` p-0 dropdown-menu dropdown-menu-right dropdownMenu`}
                aria-labelledby='dropdownMenuButton'
              >
                <div className={`flexContainer`}>
                  <div className={`mb-0 userName`}>
                    {JSON.parse(localStorage.user).name}
                  </div>
                  <div className={`mb-0 userEmail`}>
                    {JSON.parse(localStorage.user).email}
                  </div>
                </div>

                <hr className='divider' />

                <div
                  onClick={() => {
                    localStorage.removeItem('user');
                    setLogoutOption(!logoutoption);
                    history.replace('/');
                  }}
                  className={`p-3 d-flex align-items-center justify-content-center  logOut`}
                >
                  <p className={`mb-0`}>LogOut</p>
                </div>
              </div>
            </div>
          ) : (
            // <div
            //   onClick={() => {
            //     localStorage.removeItem('user');
            //     setLogoutOption(!logoutoption);
            //     history.replace('/');
            //   }}
            //   className='ml-auto'
            //   style={{
            //     color: 'white',
            //     fontSize: '14px',
            //     fontWeight: '500',
            //     cursor: 'pointer',
            //   }}
            // >
            //   LogOut
            // </div>
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
