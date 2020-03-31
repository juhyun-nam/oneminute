import React from 'react';
import { action } from '@storybook/addon-actions';

import SubmitButton from './SubmitButton';

export default {
  title: 'SubmitButton',
  component: SubmitButton,
};

export const Default = () => (
  <SubmitButton onClick={action('onClick', 'onMouseOver')} />
);
