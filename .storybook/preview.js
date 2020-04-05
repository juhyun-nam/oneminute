import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import 'bootstrap/dist/css/bootstrap.css';


addParameters({
  docs: {
    inlineStories: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
});