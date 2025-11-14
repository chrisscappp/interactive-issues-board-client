import type { Preview } from '@storybook/react-vite'
import { StylesDecorator } from '../src/shared/config/storybook/StylesDecorator/StylesDecorator'
//import { RouterDecorator } from '../src/shared/config/storybook/RouterDecorator/RouterDecorator'
// добавить декоратор при тесте страниц
import '../src/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    StylesDecorator,
    // RouterDecorator,
  ]
}

export default preview
