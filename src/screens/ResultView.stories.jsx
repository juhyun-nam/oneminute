import React from 'react';
// import { action } from '@storybook/addon-actions';

import ResultView from './ResultView';

export default {
  title: 'screen/ResultView',
  component: ResultView,
};

// const onClick = action('onClick', 'onMouseOver');

export const Default = () => (
  <ResultView
    percentage={50}
    totalDist={[
      10, 20, 50, 20,
    ]}
    selections={{
      distance: 1, job: 2, colleague: 3, salary: 2, career: 5,
    }}
    distanceDist={[10, 20, 50, 10, 20]}
    colleagueDist={[20, 30, 10, 20, 20]}
    salaryDist={[30, 20, 10, 30, 10]}
    jobDist={[5, 15, 30, 30, 20]}
    careerDist={[5, 15, 35, 25, 20]}
  />
);
