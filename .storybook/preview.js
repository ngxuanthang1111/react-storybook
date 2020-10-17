import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {story()}
  </ThemeProvider>
));

addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
