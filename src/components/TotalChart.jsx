import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const lineData = {
  labels: [
    '5 ~ 10점',
    '11 ~ 15점',
    '16 ~ 20점',
    '21 ~ 25점',
  ],
  datasets: [{
    label: '총 점수',
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [],
  }],
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
        min: 0,
        max: 100,
      },
    }],
  },
};

export default function TotalChart({ title, data }) {
  lineData.datasets[0].data = data;
  return (
    <div>
      <h4>{title}</h4>
      <Bar
        data={lineData}
        options={options}
      />
    </div>
  );
}

TotalChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
