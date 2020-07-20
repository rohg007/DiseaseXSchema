import React, { Component } from 'react';
import GetAllHumanCases from '../api/humanCases/getAllhumanCase';
import Loading from './loading/loading.jsx';
import GetAllHealthCenters from '../api/healthCenters/getAllhealthCenter';
import UpdateHumanCase from '../api/humanCases/updatehumanCase';
import UpdateHealthCenter from '../api/healthCenters/updatehealthCenter';
import GetAllDiseases from '../api/diseases/getAllDiseases';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
} from 'reactstrap';

import editImage from '../images/edit.png';

var sectionStyle = {
  backgroundColor: 'rgb(162,128,137,0.95)',
  width: '100%',
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'auto',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

class Animal_Case extends Component {
  state = {
    modal: false,
    name: '',
    cases: [],
    filtereddata: [],
    newvalue: '',
    prevvalue: '',
    user: '',
    ide: '',
    hcid: '',
    filtereddata1: '',
    loading: false,
    filtereddata2: '',
    overAllError: '',
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    try {
      this.setState({ loading: true });
      GetAllHumanCases()
        .then((response) => {
          let extractdata = response.data;

          this.setState({ cases: response.data });
          this.setState({
            filtereddata: extractdata.filter((temp) => {
              return temp.healthCenter.email === this.state.user.email;
            }),
          });
          this.setState({ loading: false });
        })
        .catch((err) => {
          this.setState({
            overAllError: "Can't able to fetch!",
            loading: false,
          });
        });
    } catch (err) {
      this.setState({ overAllError: 'Server Error!' });
    }

    try {
      this.setState({ loading: true });
      GetAllHealthCenters()
        .then((response) => {
          let extractdata = response.data;

          this.setState({
            filtereddata2: extractdata.filter((temp) => {
              return temp.email === this.state.user.email;
            }),
            overAllError: '',
            loading: false,
          });
        })
        .catch((err) => {
          this.setState({
            overAllError: "Can't able to fetch!",
            loading: false,
          });
        });
    } catch (err) {
      this.setState({ overAllError: 'Server Error!' });
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ newvalue: e.target.value });
  };
  handleClick = (e) => {
    this.setState({ ide: e.target.name });
    this.toggle();
  };
  handleSubmit = (event) => {
    event.preventDefault();
    try {
      this.setState({ loading: true });
      let obj = this.state.filtereddata[this.state.ide];
      let prev = this.state.filtereddata[this.state.ide].status;
      let obj1 = this.state.filtereddata2[0];

      let a = this.state.filtereddata2[0].total_affected;
      let b = this.state.filtereddata2[0].total_recovered;
      let c = this.state.filtereddata2[0].total_deaths;
      let diseaseName = this.state.filtereddata[this.state.ide].disease.name;

      try {
        GetAllDiseases()
          .then((response) => {
            let extractdataa = response.data;

            this.setState({
              filtereddata1: extractdataa.filter((temp) => {
                return temp.name === diseaseName;
              }),
              overAllError: '',
              loading: false,
            });
          })
          .catch((err) => {
            this.setState({
              overAllError: "Can't able to fetch!",
              loading: false,
            });
          });
      } catch (err) {
        this.setState({ overAllError: 'Server Error!', loading: false });
      }
      if (this.state.newvalue !== '') {
        if (prev === 'infected' || prev === 'Infected') {
          a--;
        }
        if (prev === 'recovered' || prev === 'Recovered') {
          b--;
        }
        if (prev === 'deceased' || prev === 'Deceased') {
          c--;
        }
        if (
          this.state.newvalue === 'infected' ||
          this.state.newvalue === 'Infected'
        ) {
          a++;
        }
        if (
          this.state.newvalue === 'recovered' ||
          this.state.newvalue === 'Recovered'
        ) {
          b++;
        }
        if (
          this.state.newvalue === 'deceased' ||
          this.state.newvalue === 'Deceased'
        ) {
          c++;
        }
        obj = {
          ...obj,
          status: this.state.newvalue,
        };
      } else {
        obj = {
          ...obj,
        };
      }
      obj1 = {
        ...obj1,
        total_affected: a,
        total_recovered: b,
        total_deaths: c,
      };

      UpdateHumanCase(obj)
        .then((response) => {
          this.setState({ overAllError: '' });
        })
        .catch((err) => {
          this.setState({
            overAllError: "Can't able to Update!",
            loading: false,
          });
        });

      UpdateHealthCenter(obj1)
        .then((response) => {
          this.setState({ overAllError: '', loading: false });
        })
        .catch((err) => {
          this.setState({
            overAllError: "Can't able to Update!",
            loading: false,
          });
        });
    } catch (err) {
      this.setState({ overAllError: 'Server Error!' });
    }
    this.toggle();
  };

  render() {
    return (
      <div className='container-fluid p-0' style={sectionStyle}>
        {this.state.loading ? (
          <div
            style={{
              height: '80vh',
            }}
            className='d-flex align-items-center justify-content-center'
          >
            <Loading />
          </div>
        ) : (
          <div className='p-3'>
            {this.state.overAllError !== '' ? (
              <div
                className='p-3 text-center'
                style={{
                  color: '#ec547a',
                  fontWeight: '500',
                }}
              >
                {this.state.overAllError}
              </div>
            ) : null}
            <div
              className='text-center pb-2'
              style={{
                fontSize: '24px',
                fontWeight: '500',
              }}
            >
              Human Cases
            </div>
            {localStorage.user ? (
              <table class='table table-striped table-active'>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Patient Name</th>
                    <th>Email</th>
                    <th>Contact No.</th>
                    <th>Disease Name</th>
                    <th>Status</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filtereddata.map((experience, i) => {
                    return (
                      <tr>
                        <th scope='row'>{i + 1}</th>
                        <td>{experience.patientName}</td>
                        <td>{experience.patientEmail}</td>
                        <td>{experience.patientContact}</td>
                        <td>{experience.disease.name}</td>
                        <td>{experience.status}</td>
                        <td>
                          <img
                            alt='Loading...'
                            width='10%'
                            height='50%'
                            src={editImage}
                            role='button'
                            color='dark'
                            name={i}
                            style={{ marginBottom: '2rem' }}
                            onClick={this.handleClick}
                          />
                          <Modal
                            isOpen={this.state.modal}
                            toggle={this.toggle}
                            data-id={i + 10}
                          >
                            <ModalHeader toggle={this.toggle}>
                              Update the status of the animal
                            </ModalHeader>
                            <ModalBody>
                              <Form>
                                <FormGroup>
                                  <div
                                    value={this.state.value}
                                    onChange={this.onChange}
                                  >
                                    <div>
                                      <input
                                        type='radio'
                                        value='infected'
                                        name='optradio'
                                      />{' '}
                                      Infected
                                    </div>
                                    <div>
                                      <input
                                        type='radio'
                                        value='recovered'
                                        name='optradio'
                                      />{' '}
                                      Recovered
                                    </div>
                                    <div>
                                      <input
                                        type='radio'
                                        value='deceased'
                                        name='optradio'
                                      />{' '}
                                      Deceased
                                    </div>
                                  </div>

                                  <Button
                                    key={i}
                                    color='dark'
                                    style={{ marginTop: '2rem' }}
                                    onClick={this.handleSubmit}
                                    name={i}
                                    block
                                    class='close'
                                    data-dismiss='modal'
                                    aria-hidden='true'
                                  >
                                    Update
                                  </Button>
                                </FormGroup>
                              </Form>
                            </ModalBody>
                          </Modal>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default Animal_Case;
