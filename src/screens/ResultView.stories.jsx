import React from 'react';
import { action } from '@storybook/addon-actions';

import ResultView from './ResultView';

export default {
  title: 'ResultView',
  component: ResultView,
};

export const defaultView = () => (
  <ResultView onClick={action('onClick', 'onMouseOver')} />
);
