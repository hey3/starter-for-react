import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'
import { addReadme } from 'storybook-readme'

const req = require.context('../src/components', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'hey3 web-base storybook',
      brandUrl: 'https://github.com/hey3/web-base',
    }),
    isFullscreen: false,
    isToolshown: true,
  },
})
addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } })

addDecorator(withA11y)
addDecorator(addReadme)
addDecorator((Story) => <Story />)

configure(loadStories, module)
