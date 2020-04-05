import React from 'react';
import { action } from '@storybook/addon-actions';

import QuestionCard from './QuestionCard';

export default {
  title: 'QuestionCard',
  component: QuestionCard,
};

export const Default = () => (
  <QuestionCard title="title" answers={['ans1', 'ans2']} changeDispatch={action('onClick')} />
);
