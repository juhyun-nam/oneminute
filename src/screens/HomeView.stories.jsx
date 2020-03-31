import React from 'react';
import { action } from '@storybook/addon-actions';

import HomeView from './HomeView';

export default {
  title: 'HomeView',
  component: HomeView,
};

export const defaultView = () => (
  <HomeView onClick={action('onClick', 'onMouseOver')} />
);
