import React, { Component, useState } from 'react';
import data from '../ConstantDB/Animal_Case.json';
import GetAllAnimalCases from '../api/animalCase/getAllAnimalCases.jsx';
import createAnimalCase from '../api/animalCase/createAnimalCase.jsx';
import DeleteAnimalCase from '../api/animalCase/deleteAnimalCase.jsx';
import UpdateAnimalCase from '../api/animalCase/updateAnimalCase.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import editImage from '../images/edit.png';

class Animal_Case extends Component {
  state = {
    modal: false,
    name: '',
    cases: [],
    filtereddata: [],
    value:'',
    user: '',
    id:'',
    val2:'100',
    message:''
  };

  componentDidMount() {
    
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    try {
      GetAllAnimalCases()
        .then((response) => {
          let extractdata = response.data;
          console.log(response);
          this.setState({ cases: response.data });
          this.setState({
            filtereddata: extractdata.filter((temp) => {
              return temp.healthCenter.email === "udyogvibhag@rediffmail.com";
            }),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log('Server' + err);
    }
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({value:e.target.name});
    this.setState({id:this.state.val2});

  };
  
  handleSubmit = i =>event=> {
    event.preventDefault();
    this.setState({
      // Retrieve the passed parameters from 'div_id'
      // and 'div_name' datasets
      //console.log('jvhxck');
      //id: event.currentTarget.dataset.div_id
      message: `Clicked div Id ${event.currentTarget.dataset.div_id}, name ${event.currentTarget.dataset.div_name}`
    });
    console.log(this.state.message);
    console.log('we are here');
    // const newIt = {
    //   name: this.state.name,
    // };

    // // Add Item via AddItem
    // this.props.addItems(newIt);
    // //close Modal
    // let animalCase = {
    //   animal: {
    //     status: 'Deceased',
    //     livestock: {
    //       breed: 'Pig',
    //       population: 4000000,
    //     },
    //     owner: {
    //       name: 'Michael Faraday',
    //       address: '8 Pleasant Rd. Glen Burnie',
    //       email: 'michael@gmail.com',
    //       contact: '9100020123',
    //     },
    //     nextVaccination: '05/10/2020',
    //     vaccine: {
    //       name: 'Classical swine fever',
    //       scientificName: 'Clostridium botulinum Type C & D',
    //       duration: 1,
    //       forHuman: 'false',
    //     },
    //   },
    //   disease: {
    //     name: 'Blackleg',
    //     scientificName: 'Clostridium chauvoei',
    //     precautions:
    //       'moving Lef Should be avoided, Consult Physician, Rich Diet',
    //     symptoms: 'Dark Leg, Heavy,Painful movement of legs',
    //     morbidity: 60,
    //     mortality: 40,
    //     total_affected: 400000,
    //     total_deaths: 10000,
    //     livestock: [
    //       {
    //         breed: 'Cattle',
    //         population: 5000000,
    //       },
    //       {
    //         breed: 'Buffalo',
    //         population: 6000000,
    //       },
    //       {
    //         breed: 'Sheep',
    //         population: 8000000,
    //       },
    //       {
    //         breed: 'Goat',
    //         population: 10000000,
    //       },
    //     ],
    //     vaccine: [
    //       {
    //         name: 'Classical swine fever',
    //         scientificName: 'Clostridium botulinum Type C & D',
    //         duration: 1,
    //         forHuman: 'false',
    //       },
    //       {
    //         name: 'Bovine tuberculosis',
    //         scientificName: 'Clostridium novyi Type B',
    //         duration: 3,
    //         forHuman: 'false',
    //       },
    //     ],
    //   },
    //   healthCenter: {
    //     address: 'Narayan Circle Bihar',
    //     email: 'suraksha@yahoo.com',
    //     contact: '1234-9876541',
    //     name: 'Suraksha Vibhag ',
    //     latlng: '41.40334, 2.17402',
    //     incharge: 'Miss Narayani',
    //     pincode: '305001',
    //     web: 'surakshakendra.in',
    //   },
    //   latlng: '25.010021,12.907654',
    // };
    // try {
    //   createAnimalCase(animalCase)
    //     .then((response) => {
    //       console.log('Success Create');
    //       console.log(response);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } catch (err) {
    //   console.log('Server' + err);
    // }

    // } else 
   // if (ref === 'put') {
     try {
       console.log('hum wahan jate hai');
       console.log( `${this.state.id}`);
       let obj = this.state.filtereddata[this.state.id];
      let disease = this.state.filtereddata[this.state.id].disease;
      obj = {  
        ...obj,
        disease: {
          ...disease,
          livestock: [
            {
              breed: 'Cattle',
              population: 14000000,
            },
            {
              breed: 'Buffalo',
              population: 8000000,
            },
          ],
        },
      };
      UpdateAnimalCase(obj)
        .then((response) => {
          console.log('Success Update');
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log('Server' + err);
    }
    //}
    // } else if (ref === 'delete') {
    // try {
    //   DeleteAnimalCase(this.state.cases[1]._id)
    //     .then((response) => {
    //       console.log('Success Delete');
    //       console.log(response);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } catch (err) {
    //   console.log('Server' + err);
    // }
    // }
  
    this.toggle();
    
  };

  render() {
    return (
      <div>
        <div>          
          <div className='form-group'>
            <label>Owner Name</label>
            <input type='text' className='form-control' placeholder='Name' />
          </div>
        </div>
        <table class='table table-striped table-active'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Owner Name</th>
              <th>Breed</th>
              <th>Owner's Email</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filtereddata.map((experience, i) => {
              return (

                <tr>
                  <th scope='row'>{i+1}</th>
                  <td>{experience.animal.owner.name}</td>
                  <td>{experience.animal.breed}</td>
                  <td>{experience.animal.owner.email}</td>
                  <td>{experience.animal.status}</td>
                  <td>
                    <img
                      width='10%'
                      height='50%'
                      src={editImage}
                      role='button'
                      color='dark'
                      style={{ marginBottom: '2rem' }}
                      onClick={this.toggle}
                    />
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                      <ModalHeader toggle={this.toggle}>
                        Update the status of the animal
                      </ModalHeader>
                      <ModalBody>
                        <Form >
                          <FormGroup>
                            <div value={this.state.value} onChange={this.onChange} >
                              <div>
                                <input
                                  type='radio'
                                  value='Male'
                                  name='gender'
                                />{' '}
                                Infected
                              </div>
                              <div>
                                <input
                                  type='radio'
                                  value='Male'
                                  name='gender'
                                />{' '}
                                Deceased
                              </div>
                              <div>
                                <input
                                  type='radio'
                                  value='Male'
                                  name='gender'
                                />{' '}
                                Recovered
                              </div>
                            </div>

                            <Button
                                key={i}
                                data-div_id={i}
                                data-div_name={`Div ${i}`}
                                onClick={this.handleButtonClicked}
                            
                                color='dark'
                                style={{ marginTop: '2rem' }}
                                onClick={this.handleSubmit(i)}
                            
                                block
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
      </div>
    );
  }
}

export default Animal_Case;
