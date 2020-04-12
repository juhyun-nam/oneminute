import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const lineData = {
  labels: [
    '1점',
    '2점',
    '3점',
    '4점',
    '5점',
  ],
  datasets: [{
    label: 'colleague',
    borderColor: '#FF6384',
    backgroundColor: '#FF6384',
    fill: false,
    data: [],
  }, {
    label: 'salary',
    borderColor: '#4BC0C0',
    backgroundColor: '#4BC0C0',
    fill: false,
    data: [],
  }, {
    label: 'job',
    borderColor: '#36A2EB',
    backgroundColor: '#36A2EB',
    fill: false,
    data: [],
  }, {
    label: 'career',
    borderColor: '#9966FF',
    backgroundColor: '#9966FF',
    fill: false,
    data: [],
  }],
};

export default function ItemChart({ datas }) {
  const localData = { ...lineData };
  const ds = localData.datasets;
  [ds[0].data, ds[1].data, ds[2].data, ds[3].data] = [...datas];
  return (
    <div>
      <Line data={localData} />
    </div>
  );
}

ItemChart.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.array).isRequired,
};
