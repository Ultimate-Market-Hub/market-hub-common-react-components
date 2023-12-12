import {type Meta, type StoryObj} from '@storybook/react';

import {expect, within} from '@storybook/test';
import {DarkHeaderSection} from "~/components/atoms/HeaderSection/DarkHeaderSection";

const meta = {
  component: DarkHeaderSection,
  title: 'components/atoms/DarkHeaderSection',
  args: {
    textCenter: false,
    primary: 'Support center',
    leading: 'Get the help you need',
    secondary: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
  },
} satisfies Meta<typeof DarkHeaderSection>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    secondary: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    primary: 'Support Center',
    textCenter: false
  },
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Support Center')).toBeInTheDocument();
  },
} satisfies Story;


export const WithCenter = {
  args: {
    textCenter: true,
    primary: 'Buy everthing you can',
    secondary: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
  },
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.')).toBeInTheDocument()

  },
} satisfies Story;
