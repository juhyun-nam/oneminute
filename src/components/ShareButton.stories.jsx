import React from 'react';
import { action } from '@storybook/addon-actions';

import ShareButton from './ShareButton';

export default {
  title: 'ShareButton',
  component: ShareButton,
};

export const Default = () => (
  <ShareButton onClick={action('onClick', 'onMouseOver')} />
);
