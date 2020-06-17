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
    label: '거리',
    borderColor: '#FF6384',
    backgroundColor: '#FF6384',
    fill: false,
    data: [],
  }, {
    label: '동료',
    borderColor: '#FFCD56',
    backgroundColor: '#FFCD56',
    fill: false,
    data: [],
  }, {
    label: '연봉',
    borderColor: '#4BC0C0',
    backgroundColor: '#4BC0C0',
    fill: false,
    data: [],
  }, {
    label: '일',
    borderColor: '#36A2EB',
    backgroundColor: '#36A2EB',
    fill: false,
    data: [],
  }, {
    label: '커리어',
    borderColor: '#9966FF',
    backgroundColor: '#9966FF',
    fill: false,
    data: [],
  }],
};

export default function ItemChart({ datas }) {
  const localData = { ...lineData };
  const ds = localData.datasets;
  [ds[0].data, ds[1].data, ds[2].data, ds[3].data, ds[4].data] = [...datas];
  return (
    <div>
      <Line data={localData} />
    </div>
  );
}

ItemChart.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.array).isRequired,
};
