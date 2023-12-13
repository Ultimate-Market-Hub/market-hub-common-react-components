import { StoryObj, type Meta } from '@storybook/react';

import { withSlideOverProvider } from '../../../../.storybook/decorator';
import SlideOverExample from './SlideOver';

const meta = {
  component: SlideOverExample,
  title: 'components/molecules/SlideOver',
  decorators: [withSlideOverProvider],
  args: {},
} satisfies Meta<typeof SlideOverExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSlideOver = {
  args: {},
} satisfies Story;
