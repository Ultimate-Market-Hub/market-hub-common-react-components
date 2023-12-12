import {type Meta, type StoryObj} from '@storybook/react';

import {expect, within} from '@storybook/test';
import {HeaderSection} from "~/components/atoms/HeaderSection/HeaderSection";

const meta = {
  component: HeaderSection,
  title: 'components/atoms/HeaderSection',
  args: {},
} satisfies Meta<typeof HeaderSection>;
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
    primary: 'Buy Buy Buy!!!',
    secondary: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
  },
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.')).toBeInTheDocument()

  },
} satisfies Story;

export const WithTitleOnly = {
  args: {
    textCenter: false,
    primary: 'Products',
    secondary: 'Here are all your products',
  },
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Buy Buy Buy!!!')).toBeInTheDocument()

  },
} satisfies Story;
