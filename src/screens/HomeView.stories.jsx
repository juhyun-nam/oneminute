import React from 'react';
import { action } from '@storybook/addon-actions';

import HomeView from './HomeView';

export default {
  title: 'screen/HomeView',
  component: HomeView,
};

const onClick = action('onClick', 'onMouseOver');

export const Default = () => (
  <HomeView onClick={onClick} />
);
