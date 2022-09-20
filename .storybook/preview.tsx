import type { DecoratorFunction } from '@storybook/addons'
import React from 'react'

export const decorators: DecoratorFunction<JSX.Element>[] = [Story => <Story />]
