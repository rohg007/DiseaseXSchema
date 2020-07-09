import React, { Component } from 'react'

export default class LoginPageAdmin extends Component {
    render() {
        return (
            <div
            class='card'
            body
              inverse
            style={{
              marginLeft: '20%',
              marginRight: '20%',
              marginTop: '5%',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.45)',
              borderColor: '#333',
          
            }}
          >
    
            <div class='card-header'>
              <h3>Sign In</h3>
            </div>
            <div class='card-body'>
            <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button href="/am"  className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>  
            </div>
              
          </div>
    
        )

    }
}
