import { addons } from '@storybook/addons'
import theme from './theme'

import '../src/static/fonts/font.css'
import '../src/static/normalize.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}