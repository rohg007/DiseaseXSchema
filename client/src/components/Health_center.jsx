import React from 'react';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import disease from '../ConstantDB/disease.json';
import Background from '../images/background.jpg';
var sectionStyle = {
  backgroundImage: 'url(' + Background + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const subdisease = disease.diseases;
export default class App extends React.Component {
  render() {
    const barChart = (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    );

    return (
      <div style={sectionStyle}>
        {subdisease.map((dise, i) => {
          return (
            <div style={{ width: '30%', height: '30%', padding: '2%' }}>
              <Doughnut
                data={{
                  labels: ['Infected', 'Recoverd', 'Deaths'],
                  datasets: [
                    {
                      label: 'Rainfall',
                      backgroundColor: [
                        'blue',
                        'green',
                        'red',
                        '#00A6B4',
                        '#6800B4',
                      ],
                      hoverBackgroundColor: [
                        '#501800',
                        '#4B5000',
                        '#175000',
                        '#003350',
                        '#35014F',
                      ],
                      data: [
                        dise.total_affected,
                        dise.total_recovered,
                        dise.total_deaths,
                      ],
                    },
                  ],
                }}
                options={{
                  title: {
                    display: true,
                    text: dise.name,
                    fontColor: 'black',
                    fontSize: 20,
                    position: 'top',
                  },
                  legend: {
                    display: true,
                    position: 'right',
                  },
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
