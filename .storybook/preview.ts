import '../preview/index.css';
import { reactRouterDecorator } from './decorator';

export const parameters = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    decorators: [reactRouterDecorator],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
