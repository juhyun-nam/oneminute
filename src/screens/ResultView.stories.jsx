import React from 'react';
import { action } from '@storybook/addon-actions';

import ResultView from './ResultView';

export default {
  title: 'Screen|ResultView',
  component: ResultView,
};

export const Default = () => (
  <ResultView onClick={action('onClick', 'onMouseOver')} />
);
