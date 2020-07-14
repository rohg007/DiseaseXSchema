import React, { Component } from 'react'
import getAllHumanCases from '../api/humanCases/getAllhumanCase';
import HumanCases from './Human_Case';

export default class Get_human_case extends Component {
    state ={
        cases:[],
    }
    componentDidMount() {
        try {
          getAllHumanCases()
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
    
    render() {
        return (
            <div>
                <HumanCases cases={this.state.cases} />
            </div>
        )
    }
}
