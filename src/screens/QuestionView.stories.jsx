import React from 'react';
import { action } from '@storybook/addon-actions';

import QuestionView from './QuestionView';

export default {
  title: 'Screen|QuestionView',
  component: QuestionView,
};

export const Default = () => (
  <QuestionView onClick={action('onClick', 'onMouseOver')} />
);
