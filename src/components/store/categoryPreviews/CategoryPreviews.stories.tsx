import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import BackgroundImageWithDetails from './BackgroundImageWithDetails';
import ThreeColumn from './ThreeColumn';
import ThreeColumnWithDescription from './ThreeColumnWithDescription';
import WithImageBackgrounds from './WithImageBackgrounds';
import WithScrollingCards from './WithScrollingCards';
import WithSplitImages from './WithSplitImages';

export default {
  title: 'Components/Store/CategoryPreviews',
  component: BackgroundImageWithDetails,
  argTypes: {},
} as Meta<typeof BackgroundImageWithDetails>;

const Template: StoryFn<typeof BackgroundImageWithDetails> = () => (
  <BackgroundImageWithDetails />
);

const Template2: StoryFn<typeof ThreeColumn> = () => <ThreeColumn />;

const Template3: StoryFn<typeof ThreeColumnWithDescription> = () => (
  <ThreeColumnWithDescription />
);

const Template4: StoryFn<typeof WithImageBackgrounds> = () => (
  <WithImageBackgrounds />
);

const Template5: StoryFn<typeof WithScrollingCards> = () => (
  <WithScrollingCards />
);

const Template6: StoryFn<typeof WithSplitImages> = () => <WithSplitImages />;

export const ImageWithDetails = Template.bind({});
export const Three = Template2.bind({});
export const ThreeColumnDescription = Template3.bind({});
export const SlideOverEx = Template4.bind({});
export const ScrollingCards = Template5.bind({});
export const SplitImages = Template6.bind({});
