import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const doughnutData = {
  labels: [
    '1점',
    '2점',
    '3점',
    '4점',
    '5점',
  ],
  datasets: [{
    data: [],
    backgroundColor: [
      '#FF6384',
      '#FFCD56',
      '#4BC0C0',
      '#36A2EB',
      '#9966FF',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#FFCD56',
      '#4BC0C0',
      '#36A2EB',
      '#9966FF',
    ],
  }],
};

export default function ItemChart({ title, subtitle, data }) {
  const localData = { ...doughnutData };
  localData.datasets[0].data = data;
  return (
    <div>
      <h2>
        {title}
      </h2>
      <h4>
        {subtitle}
      </h4>
      <Doughnut data={localData} />
    </div>
  );
}

ItemChart.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
