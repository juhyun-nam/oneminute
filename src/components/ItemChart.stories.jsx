import React from 'react';

import ItemChart from './ItemChart';

export default {
  title: 'Chart/ItemChart',
  component: ItemChart,
};

export const Default = () => (
  <ItemChart datas={[
    [10, 20, 40, 10, 20],
    [5, 25, 40, 10, 20],
    [20, 20, 40, 20, 20],
    [0, 20, 60, 10, 10],
    [40, 10, 0, 10, 40],
  ]}
  />
);
