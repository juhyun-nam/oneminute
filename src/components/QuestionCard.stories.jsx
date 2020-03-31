import React from 'react';

import QuestionCard from './QuestionCard';

export default {
  title: 'QuestionCard',
  component: QuestionCard,
};

export const defaultView = () => (
  <QuestionCard title="title" answers={['ans1', 'ans2']} />
);
