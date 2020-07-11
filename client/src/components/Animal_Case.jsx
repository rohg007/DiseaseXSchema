import React, { Component } from 'react';
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
const filtereddata = data.animalCaseSchema.filter((temp) => {
  return temp.healthCenter.email === 'suraksha@yahoo.com';
});
var k = 0;

class Animal_Case extends Component {
  state = {
    modal: false,
    name: '',
    cases: [],
  };
  componentDidMount() {
    try {
      GetAllAnimalCases()
        .then((response) => {
          console.log(response);
          this.setState({ cases: response.data });
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
  };
  onSubmit = (e, ref) => {
    e.preventDefault();
    // const newIt = {
    //   name: this.state.name,
    // };

    // // Add Item via AddItem
    // this.props.addItems(newIt);
    // //close Modal
    // if (ref === 'post') {
    //   let animalCase = {
    //     animal: {
    //       status: 'Deceased',
    //       livestock: {
    //         breed: 'Pig',
    //         population: 4000000,
    //       },
    //       owner: {
    //         name: 'Michael Faraday',
    //         address: '8 Pleasant Rd. Glen Burnie',
    //         email: 'michael@gmail.com',
    //         contact: '9100020123',
    //       },
    //       nextVaccination: '05/10/2020',
    //       vaccine: {
    //         name: 'Classical swine fever',
    //         scientificName: 'Clostridium botulinum Type C & D',
    //         duration: 1,
    //         forHuman: 'false',
    //       },
    //     },
    //     disease: {
    //       name: 'Blackleg',
    //       scientificName: 'Clostridium chauvoei',
    //       precautions:
    //         'moving Lef Should be avoided, Consult Physician, Rich Diet',
    //       symptoms: 'Dark Leg, Heavy,Painful movement of legs',
    //       morbidity: 60,
    //       mortality: 40,
    //       total_affected: 400000,
    //       total_deaths: 10000,
    //       livestock: [
    //         {
    //           breed: 'Cattle',
    //           population: 5000000,
    //         },
    //         {
    //           breed: 'Buffalo',
    //           population: 6000000,
    //         },
    //         {
    //           breed: 'Sheep',
    //           population: 8000000,
    //         },
    //         {
    //           breed: 'Goat',
    //           population: 10000000,
    //         },
    //       ],
    //       vaccine: [
    //         {
    //           name: 'Classical swine fever',
    //           scientificName: 'Clostridium botulinum Type C & D',
    //           duration: 1,
    //           forHuman: 'false',
    //         },
    //         {
    //           name: 'Bovine tuberculosis',
    //           scientificName: 'Clostridium novyi Type B',
    //           duration: 3,
    //           forHuman: 'false',
    //         },
    //       ],
    //     },
    //     healthCenter: {
    //       address: 'Narayan Circle Bihar',
    //       email: 'suraksha@yahoo.com',
    //       contact: '1234-9876541',
    //       name: 'Suraksha Vibhag ',
    //       latlng: '41.40334, 2.17402',
    //       incharge: 'Miss Narayani',
    //       pincode: '305001',
    //       web: 'surakshakendra.in',
    //     },
    //     latlng: '25.010021,12.907654',
    //   };
    //   try {
    //     createAnimalCase(animalCase)
    //       .then((response) => {
    //         console.log('Success Create');
    //         console.log(response);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   } catch (err) {
    //     console.log('Server' + err);
    //   }
    // } else if (ref === 'put') {
    // try {
    //   let obj = this.state.cases[1];
    //   let disease = this.state.cases[1].disease;
    //   obj = {
    //     ...obj,
    //     disease: {
    //       ...disease,
    //       livestock: [
    //         {
    //           breed: 'Cattle',
    //           population: 5000000,
    //         },
    //         {
    //           breed: 'Buffalo',
    //           population: 6000000,
    //         },
    //       ],
    //     },
    //   };
    //   UpdateAnimalCase(obj)
    //     .then((response) => {
    //       console.log('Success Update');
    //       console.log(response);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } catch (err) {
    //   console.log('Server' + err);
    // }
    // }
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
    console.log(localStorage);
    return (
      <div>
        <table class='table table-striped table-active'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Owner Name</th>
              <th>Breed</th>
              <th>CaseID</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filtereddata.map((experience, i) => {
              k = k + 1;
              return (
                <tr>
                  <th scope='row'>{k}</th>
                  <td>{experience.animal.owner.name}</td>
                  <td>{experience.animal.liveStock.breed}</td>
                  <td>{experience.caseID}</td>
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
                        <Form onSubmit={this.onSubmit}>
                          <FormGroup>
                            <div onChange={this.onChangeValue}>
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

                              <div>
                                <input
                                  type='radio'
                                  value='Male'
                                  name='gender'
                                />{' '}
                                Delete
                              </div>
                            </div>

                            <Button
                              color='dark'
                              style={{ marginTop: '2rem' }}
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
