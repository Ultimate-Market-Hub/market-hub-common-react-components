import { type Meta, type StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  component: Icon,
  title: 'Components/Atoms/Icon',
  args: { name: 'AcademicCapIcon', version: 'outline', size: 'sm' },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = {} satisfies Story;
