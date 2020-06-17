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
    label: '구간별 합',
    backgroundColor: 'rgba(54,162,235,0.4)',
    borderColor: 'rgba(54,162,235,1)',
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

export default function TotalChart({ data }) {
  lineData.datasets[0].data = data;
  return (
    <div>
      <Bar
        data={lineData}
        options={options}
      />
    </div>
  );
}

TotalChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
