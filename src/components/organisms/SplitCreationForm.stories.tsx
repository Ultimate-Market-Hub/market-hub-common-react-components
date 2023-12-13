import { Meta, StoryObj } from '@storybook/react';

import { SplitCreationForm } from '~/components/organisms/SplitCreationForm';

const meta = {
  component: SplitCreationForm,
  title: 'components/organisms/SplitForm',
  args: {},
} satisfies Meta<typeof SplitCreationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithMainForm = {
  args: {
    createLabel: 'Create your shop',
    createButtonLabel: 'Create',
    headerPrimary: 'Backoffice Shop Setup: Quick and Easy Guide',
    headerSecondary:
      "Welcome to the streamlined process of setting up your shop in our backoffice. This brief guide will walk you through the essentials, ensuring a smooth and efficient experience. Let's get started on creating your standout shop effortlessly!",
  },
} satisfies Story;
