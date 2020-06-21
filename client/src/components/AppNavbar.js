import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

export default class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div >
          <Navbar color='dark' dark expand='lm' className='mb-5'>
            <Container>
              <NavbarBrand href='/'>DiseaseX</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  <NavLink href='/signup'>Register</NavLink>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          
      </div>
    );
  }
}
