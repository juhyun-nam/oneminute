import React from 'react';
import { action } from '@storybook/addon-actions';

import HomeView from './HomeView';

export default {
  title: 'Screen|HomeView',
  component: HomeView,
};

export const Default = () => (
  <HomeView onClick={action('onClick', 'onMouseOver')} />
);
