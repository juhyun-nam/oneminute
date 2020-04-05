import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

const onClick = action('onClick', 'onMouseOver');

export const Info = () => (
  <Button onClick={onClick} text={text('text', 'Info')} variant={text('variant', 'info')} />
);
