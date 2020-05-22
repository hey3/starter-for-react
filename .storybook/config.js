import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { ThemeProvider } from '@themes/ThemeProvider'

const req = require.context('../src/components', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'hey3 starter-for-react storybook',
      brandUrl: 'https://github.com/hey3/starter-for-react',
    }),
  },
})
addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } })

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(addReadme)
addDecorator((Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
))

configure(loadStories, module)
