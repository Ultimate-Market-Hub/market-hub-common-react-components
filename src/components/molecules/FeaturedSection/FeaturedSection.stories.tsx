import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { FeaturedSection, type FeaturedSectionProps } from './FeaturedSection';

export default {
  title: 'components/molecules/Featured Section',
  component: FeaturedSection,
  argTypes: {},
} as Meta<typeof FeaturedSection>;

const Template: StoryFn<typeof FeaturedSection> = (
  args: FeaturedSectionProps
) => <FeaturedSection {...args} />;

const Template2: StoryFn<typeof FeaturedSection> = (
  args: FeaturedSectionProps
) => <FeaturedSection {...args} />;

export const Featured = Template.bind({});
export const WithQuickActions = Template2.bind({});

Featured.args = {
  buttonLabel: 'Shop collection',
  buttonRoute: '/',
  heading: 'Long-term thinking',
  description:
    "We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe",
  withImage: true,
  withBranding: false,
};
