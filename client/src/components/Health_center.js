import React from 'react';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import disease from '../ConstantDB/disease.json';
import healthcenterdata from '../ConstantDB/healthCenter.json';
import Background from '../images/background.jpg';

var sectionStyle = {
  backgroundImage: 'url(' + Background + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const subdisease = disease.diseases;
const Health_center = () => {
  const filtereddata = healthcenterdata.healthCenterSchema.filter((temp) => {
    return temp.email === 'udyogvibhag@rediffmail.com';
  });

  const a = filtereddata[0].total_affected;
  const b = filtereddata[0].total_recoverd;
  const c = filtereddata[0].total_deaths;
  const state = {
    labels: ['Infected', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'People',
        borderWidth: 2,
        backgroundColor: [
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
        ],
        hoverBackgroundColor: ['blue', 'green', 'red'],
        position: 'center',
        data: [a, b, c],
      },
    ],
  };

  const barChart = (
    <Bar
      data={state}
      options={{
        title: {
          display: true,

          position: 'top',
          text: `HEALTH CENTER : ${filtereddata[0].name} status`,
          fontSize: '20',
          fontColor: 'black',
        },
        legend: {
          display: false,
          position: 'right',
        },
      }}
    />
  );

  return (
    <div style={sectionStyle}>
      <div className='row'>
        <div
          style={{
            width: '50%',
            height: '50%',
            justifyContent: 'center',
            paddingLeft: '5%',
          }}
        >
          {barChart}
        </div>

        <div
          class='btn-group mr-7'
          role='group'
          aria-label='First group'
          style={{ paddingLeft: '8%', paddingTop: '5%', height: '2%' }}
        >
          <a class='btn btn-large btn-dark' href='/'>
            NEW HUMAN CASE
          </a>
          <a class='btn btn-large btn-dark' href='/'>
            NEW ANIMAL CASE
          </a>
          <a class='btn btn-large btn-dark' href='/human_case'>
            HUMAN CASES
          </a>
          <a class='btn btn-large btn-dark' href='/animal_case'>
            ANIMAL CASES
          </a>
        </div>
      </div>
      <div className='row'>
        {' '}
        {subdisease.map((dise, i) => {
          return (
            <div style={{ width: '25%', height: '25%', paddingTop: '3%' }}>
              <Doughnut
                data={{
                  labels: ['Infected', 'Recoverd', 'Deaths'],
                  datasets: [
                    {
                      label: 'Rainfall',
                      backgroundColor: [
                        'rgba(0, 0, 255, 0.7)',
                        'rgba(0, 255, 0, 0.7)',
                        'rgba(255, 0, 0, 0.7)',
                      ],
                      hoverBackgroundColor: ['blue', 'green', 'red'],
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
                    fontSize: 15,
                    position: 'top',
                  },
                  legend: {
                    display: true,
                    fontColor: 'black',
                    fontSize: '2',
                    position: 'right',
                  },
                  labels: {
                    fontColor: 'black',
                  },
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Health_center;
