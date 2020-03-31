import React from 'react';
import { action } from '@storybook/addon-actions';

import QuestionView from './QuestionView';

export default {
  title: 'QuestionView',
  component: QuestionView,
};

export const defaultView = () => (
  <QuestionView onClick={action('onClick', 'onMouseOver')} />
);
