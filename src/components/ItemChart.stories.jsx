import React from 'react';

import ItemChart from './ItemChart';

export default {
  title: 'Chart/ItemChart',
  component: ItemChart,
};

export const Default = () => (
  <ItemChart title="title" subtitle="subtitle" data={[10, 20, 40, 10, 20]} />
);
