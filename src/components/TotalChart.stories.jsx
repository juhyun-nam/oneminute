import React from 'react';

import TotalChart from './TotalChart';

export default {
  title: 'Chart/TotalChart',
  component: TotalChart,
};

export const Default = () => (
  <TotalChart title="title" data={[10, 20, 40, 10, 20]} />
);
